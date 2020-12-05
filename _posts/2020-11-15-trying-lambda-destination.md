---
layout: post
title: Trying Lambda destinations
---

Recently I learned about [Lambda Destinations](https://www.serverless.com/blog/lambda-destinations). I didn't know what it is, I thought it can be a good alternative with SNS when I only need to connect 2 Lambda functions. The usage is straightforward. The idea is to handle the success and failure result of a Lambda function on other Lambda functions:
```
functions:
  helloStarting:
    handler: handler.starting
    destinations:
      onSuccess: someOtherFunction
      onFailure: arn:of:some:existing:resource
```
My main use case was to trigger a Lambda function based on the result of a Lambda function which is triggered by an HTTP API call and I just couldn't get it to work. The destination functions just couldn't get triggered. After reading this [blog post](https://www.trek10.com/blog/lambda-destinations-what-we-learned-the-hard-way), I realize that Lambda Destinations only works if the function was triggered by certain types of ways, and API Gateway is not one of them. A good use case of Lambda Destination is to monitor the results of the executions if the Lambda function was triggered asynchronously.