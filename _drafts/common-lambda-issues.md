---
layout: post
title: Common issues on AWS Lambda
---

Now that I have already developed multiple API services with AWS Lambda, I know how it's like to develop a Lambda service.
Indeed, AWS Lambda is easy to get started for people like me, who didn't have any backend development experience, since I don't need to know anything about how a server should work and just need to focus on implementing the API with the language that I know already (JavaScript) and I can just deploy it easily with [Serverless framework](https://www.serverless.com). However, as I have a bit more experience with Lambda, I realize that Lambda is not as easy as it looks like, while Lambda make it easy to deploy an API service without setting up a new server, it also has some limitations and introduce some new challenges and issues that I need to solve during the development of the Lambda services.

Here are a list of common issues and summary of how to solve them:

### Too many resources ###

I have no concept of micro-service when I develop my first Lambda service. It doesn't take long for me to add like 30 APIs to the service. It was all good when I was testing locally, until I tried to deploy it and this error popped up on the terminal:
```
Error --------------------------------------------------

The CloudFormation template is invalid: Template format error: Number of resources, 201, is greater than maximum allowed, 200
```
The reason is that CloudFormation has a limit of 200 resources per stack.
Each Lambda service you deployed with Serverless framework is a Cloud Formation stack and for each API that is deployed, multiple AWS resources are created during the deployment of the service, such as:
- the lambda function
- the lambda version
- API gateway
- cloud watch log
- IAM role
  
So it's not surprising that after adding around 30 API, the stack of the service would take over 200 AWS resources.

After some trial and errors with some other approaches to resolve the issue. The best and most reliable way to resolve the issue, is to implement the micro-service approach. We can refactor and split the large service to into several smaller ones. After that, we can use [API Gateway custom domain](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) to map all the micro-services to different paths under same the domain.
   
### VPC and internet access ###

By default, a Lambda function is not configured with a VPC and the Lambda can make any internet request during its execution.
However, if your Lambda function requires access to any resources that exists in a VPC such as an RDS database, you need to configure the Lambda function to use VPC as well. And if it happens that your Lambda function need to make an internet request to some external service as well, you will need to configure the VPC subnet to use a NAT gateway to allow internet access within the VPC.

### Total Lambda functions storage size ###

```
An error occurred: TestLambdaFunction – Code storage limit exceeded. (Service: AWSLambda; Status Code: 400; Error Code: CodeStorageExceededException; Request ID: 05d3ae68-e7f6-11e8-948e-41c95096380e).
```
After deploying multiple Lambda services and a dozen functions, you may see this error then you try to deploy a new version of your Lambda service. The reason is that there's a limit of storage for Lambda functions, which is **75 GB**. Surprisingly, it's not hard to reach this limit, especially if you enabled versioning for your Lambda functions. By default, every time you deploy your Lambda service, a new version of each Lambda functions will be created and so if you deploy a large service with many APIs and a lot of dependencies, you can reach the storage limit fairly quickly. In my experience, if we deploy our Lambda functions with Serverless framework, the versioning feature is not really that useful since most likely we have already checked in our codes in our own version control system. Therefore, to resolve the storage limit issues, you need to do 2 things:
- remove all old versions of your Lambda service from AWS, you can use [serverless-prune-plugin](https://www.serverless.com/plugins/serverless-prune-plugin) to clean up the old versions of
- Turn off versioning of your Lambda service in the **serverless.yml**
  ```yml
  provider:
    versionFunctions: false # optional, default is true
  ```

### Lambda function package size limit ###
There is a hard limit for how big of your Lambda function package, which is **50 MB** for compressed deployment package and uncompressed size of the package cannot be over **250**. You can experience this issue when you function depends on some large library such as Oracle DB client. The only way to get around this is to keep your function small, take good care of the dependencies of your Lambda functions.
- Use [Serverless Webpack](https://github.com/serverless-heaven/serverless-webpack), by using Webpack, you can be sure that the final deployment package will only include the codes and libraries that your function actually depends on.
- Exclude AWS-SDK, the Lambda runtime already has AWS-SDK, there's no need to include AWS-SDK in the deployment package.
- If you need to generate PDF with **[Puppeteer](https://github.com/puppeteer/puppeteer)**, use **puppeteer-core** and **[chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda)** instead to keep your function small.

### Execution timeout limit ###
If you are developing HTTP API with Lambda, make sure the execution won't exceed 30 secs since it's the limit of API Gateway. For the Lambda function itself, the timeout limit is 15 minutes, so if the operation of the function can exceed this amount time, mostly likely you cannot implement it with Lambda.

### Persisting connection with external services (DB, TCP, etc) ###
While it's a good practice to keep the DB / TCP connections around for a normal backend server so that several API requests can share the same connections and reduce the overhead of connecting again and again, it's very hard to achieve in Lambda. 
I had a lot of issue with this when I tried to share the same DB connection with multiple requests with [Knex](http://knexjs.org/). The problem was that AWS can freeze the container of your Lambda function any time after it's not used for a while, the connection with the DB can be dropped. What's worse is that the variables that you keep in the context level of the function is also frozen. Those variables include the status of the DB connection. So next time when the Lambda function was requested again, AWS resumes the container and at this point, the context of the function was still keeping the same status of the DB connection that the function executes previously, which was connecting. Knex was confused and didn't know that the connection was dropped and didn't try to connect again and just returned an error when the Lambda functino tried to access the DB. I end up resolving the issue by creating a new connection with the DB for every Lambda request. 

I hope this blog post gives you some ideas of what kind of issues that you may face when you are developing a Lambda function and some guidance on how to resolve them.