---
layout: post
title: Common issues on AWS Lambda
---

AWS Lambda is my first exposure in implementing backend API service. Before that I was mostly an Android developer.
And now I have already developed multiple API services with AWS Lambda. AWS Lambda is easy to get started since I don't need to
know anything about how a server should work and just need to focus on implementing the API with the language that I know already
(javascript) and I can just deploy it easily with [Serverless framework](https://www.serverless.com). However, as I have a bit more experience with Lambda,
I realize Lambda is not as easy as it looks like, especially when you face some Lambda specific issues that you have no ideas how to resolve.

Here are a list of common issues and summary of how to solve them:

### Too many resources ###

I have no concept of microservice when I develop my first Lambda service. It doesn't take long for me to add like 30 APIs to the service. It was all good when I was testing locally, until I tried to deploy it and this error popped up on the terminal:
```
Error --------------------------------------------------

The CloudFormation template is invalid: Template format error: Number of resources, 201, is greater than maximum allowed, 200
```
The reason is that CloudFormation has a limit of 200 resources per stack.
Each Lambda service you deployed with Serverless framework is a Cloudformation stack and for each API that is deployed, multiple AWS resources are created during the deployment of the service, such as:
- the lambda function
- the lambda version
- api gateway
- cloud watch log
- IAM role
  
So it's not surprising that after adding around 30 API, the stack of the service would take over 200 AWS resources.

After some trial and errors with some other approach to resolve the issue. The best and most reliable way to resolve the issue, is to utilize the microservice approach. We can refactor and split the large service to into serveral smaller ones. After that we can use [API Gateway custom domain](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-custom-domains.html) to put all the microservices under same domain.
   
### VPC and internet access ###

By default, a Lambda function is not configured with a vpc and the Lambda can make any internet request during its execution.
However, if your Lambda function requires access to any resources that exists in a VPC such as a RDS database, you need to configure the Lambda function to use VPC as well. and if it happens that your Lambda function need to make an internet request to some external service as well, you will need to configure the VPC subnet to use a NAT gateway to allow internet access within the VPC.

### Out of space for lambda functions ###
### API Gateway timeout limit ###
### Persisting connection with external services (DB, TCP, etc) ###
### Slow performance ###

## Too many resources ##

