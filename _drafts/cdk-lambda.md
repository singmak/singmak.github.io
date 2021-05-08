---
layout: post
title: Deploy a Lambda function with CDK
---

I have been building web applications and services with AWS services for some time. I understand how cumbersome it is to set up the same resources manually on AWS for different environments (development, staging, production, etc). That's why we should define our service stacks as codes so that we can deploy the same infrastructure to different environments reliably and easily.
We can use Cloudformation to do that. However, it takes time to learn how to write the Cloudformation templates and it's not very easy. And you probably have already see those Cloudformation templates that contains hundreds lines of codes. Maintaining them and writing them can be very difficult.

What if we can use the programming languages that we are already familiar with to define the infrastructure? What if we can create the AWS resources in just a few lines of codes? With CDK (Cloud Development Kit) we can do all that. 

With CDK, we can define a Cloudformation stack with programming languages such as TypeScript, JavaScript, Python, Java and C#. In this blog post, I am not going to talk about the concepts of CDK, you can just read the [doc](https://aws.amazon.com/cdk/), and here I just want to do a simple demonstration of how to build and deploy a Lambda function with CDK and TypeScript since TypeScript's the language that I am most familiar with now and Lambda function is cheap and easy to get started.

I know we already have [Serverless Framework](https://www.serverless.com/) for creating Lambda service, and we can also add CloudFormation resources in the serverless.yml file. However, it's not very flexible and easy comparing with CDK. CDK opens up the door to define complex stacks that can mix ECS, Lambda, Dynamodb DB, etc that depend on each with simple and clean programming languages.

## Setting up the environment ##
To get started, you need to [install AWS Cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and configure the AWS credentials on your command line environment.
```
> aws configure
```
and then install CDK:
```
> npm install -g aws-cdk
> cdk --version
```
## Setting up the project ##
Creating the project structure and initialize the CDK project
```
> mkdir hello-lambda
> cd hello-lambda
> cdk init app --language typescript
> npm install @aws-cdk/aws-apigateway @aws-cdk/aws-lambda
```
Install **@types/aws-lambda** for 
```typescript
> npm install -D @types/aws-lambda
> mkdir src
```
## Create the Lambda function ##
1. create handler.ts in hello-lambda/src directory
2. add the following codes in handler.ts
```typescript
import { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async (event) => {
  return {
    statusCode: 200,
    body: `Hello ${JSON.stringify(event, null, 2)}!`,
  };
}
```

## Adding Lambda function and API Gateway endpoint to CDK stack ##
1. add the following codes in lib/cdk-stack.ts
```typescript
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create the Lambda function
    const handler = new lambda.Function(this, "handler", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("src"),
      handler: "handler.hello"
    });

    // create the rest API in API Gateway
    const api = new apigateway.RestApi(this, "hello-api", {
      restApiName: "Hello Service",
      description: "This service is an example Lambda service."
    });

    // add a new API resource for path /{id} in the rest API
    const apiResource = api.root.addResource("{id}");
    // create 2 lambda integration for the GET and POST request and add them to the API resource
    apiResource.addMethod("GET", new apigateway.LambdaIntegration(handler));
    apiResource.addMethod("POST", new apigateway.LambdaIntegration(handler));
  }
}

```
## Deploy the changes of the stack ##
1. Bootstrap the stack. a new S3 bucket will be created to stored the deployment package.
   ```typescript
   cdk bootstrap
   ```
2. Deploy the stack