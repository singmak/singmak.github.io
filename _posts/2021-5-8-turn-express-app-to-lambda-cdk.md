---
layout: post
title: Deploy an AWS Lambda function with AWS CDK
---

There are many ways to create and configure the infrastructures of our applications on AWS, either it's with the console, AWS Cli or AWS Cloudformation. With AWS CDK, we can create AWS Cloudformation stacks with the power of programming languages. AWS CDK support multiple programming languages and in this blog post, I am going to demostrate how to turn a simple Express app API written in Typescript into an AWS Lambda function with AWS CDK.

Using AWS Cloudformation is a good way to maintain our infrastructures as code. However, writing a Cloudformation template is not easy. Most of my experience with AWS Cloudformation is with Serverless Framework because when I deploy an AWS Lambda service with Serverless Framework, it deploys the Lambda service as a Cloudformation stack and we don't need to write a single line of AWS CloudFormation template. It saves us so much work. What's even more great about Serverless Framework is that we can override the generated Cloudformation resources or add additional resources in the stack in the serverless.yml. Outside of Serverless Framework, I mostly just use the AWS console or AWS Cli to manually configure the AWS intrastructure... To be honest I was put off by the huge amount of lines of codes in the Cloudformation templates that are required to define a stack and all the template syntax that I need to learn...
But not anymore! Now I know that there's a much easier way to create a Cloudformation stack for developers, which is AWS CDK (AWS Cloud Development Kit).

## Prerequisite
- AWS Cli environment setup
- Node.js version 14+
- Knowledge of typescript
- Basic knowlege AWS Lambda

## Starting point
First of all, please download the example project from [here](https://github.com/singmak/cdk-express-example).
This tutorial will use the codes in the 'starting-point' folder of this repository as a startpoint.

## Basic CDK stack setup
Now assume that you have already downloaded the codes of the starting point project.

First of all, we need to install AWS CDK:

```sh
npm install -g aws-cdk
cdk --version
```

Now unzip the downloaded package and go to the 'starting-point' folder of the unzipped package in the shell.

Create a cdk folder for seperating application codes from the CDK stack codes.

```sh
mkdir cdk
cd cdk
```

Initialize AWS CDK stack with TypeScript template

```sh
cdk init app --language typescript
```

Install the dependencies for creating the Lambda function and API Gateway resources in the stack.

```sh
npm i @aws-cdk/aws-apigateway @aws-cdk/aws-lambda
```

The project should look like this at this point

[![Project structure](/assets/images/cdk-express-project-structure.png)](/assets/images/cdk-express-project-structure.png)

## Code refactoring
Now we need to do a little code refactoring so that the function logic can be seperated from the Express config.  
First open `index.ts` in the project root folder and copy all the codes in function for `/users` API

```typescript
app.get('/users', (req, res) => {
  // COPY start
  const users = ['John', 'Tom', 'Mary'].map((name, index) => ({
    id: index,
    name,
  }));
  // COPY end
  res.json(users);
})

```

create `users.ts` under the project root folder and create the `getUsers` function there

```typescript
export const getUsers = () => {
}
```

Now plaste the codes that you just copied inside, and add `return users;` at the end to return the result of the function.

```typescript
export const getUsers = () => {
  const users = ['John', 'Tom', 'Mary'].map((name, index) => ({
    id: index,
    name,
  }));
  return users;
}
```

Next, we will create a handler for the Lambda function:
1. Create `handler.ts` in the project base folder.
2. Import `getUsers` from `users.ts`.
3. Add an async function `getUsers` to `handler.ts`
4. Return `statusCode` and `body` in the API response. Make sure that body is a `string`.

The returning value determine the API response status code and body.
```typescript
import * as users from './users';

export const getUsers = async () => {
  const result = users.getUsers();
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
}
```

The reason to put the actual logic of the function in `users.ts` intead of directly putting it in `handler.ts` is to make it easier for the original express app to also reuse the `getUsers` function in `users.ts`.

So now we can refactor the original `index.ts` to call `getUsers` from `users.ts` in the `/users` API.
```typescript
import { getUsers } from './users';

app.get('/users', (req, res) => {
  const users = getUsers();
  res.json(users);
})
```

## Add Lambda Function in the stack
Now that the codes are ready, we can work on the CDK stack

Open `cdk/lib/cdk-stack.ts` and add the codes to create the Lambda function
```typescript
import * as lambda from '@aws-cdk/aws-lambda';
```
```typescript
const getUsersHandler = new lambda.Function(this, "GetUsers", {
  runtime: lambda.Runtime.NODEJS_14_X,
  code: lambda.Code.fromAsset("../build"), // build output of the handler js
  handler: "handler.getUsers" // handler is the handler js file name, getUsers is the function name
});

```

Create the API Gateway Rest API that can trigger the Lambda function
```typescript
import * as apigateway from '@aws-cdk/aws-apigateway';
```
```typescript
// Create the Rest API
    const api = new apigateway.RestApi(this, "UsersApi", {
      restApiName: "Users Management",
      description: "API for management of users."
    });
    // Add the path /users in the API
    const apiResource = api.root.addResource("users");
    const getIntegration = new apigateway.LambdaIntegration(getUsersHandler); // linked to the Lambda function here
    apiResource.addMethod("GET", getIntegration);
```

So at the end, the stack should look like this:
```typescript
import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigateway from '@aws-cdk/aws-apigateway';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const getUsersHandler = new lambda.Function(this, "GetUsers", {
      runtime: lambda.Runtime.NODEJS_14_X,
      code: lambda.Code.fromAsset("../build"),
      handler: "handler.getUsers"
    });

    // Create the Rest API
    const api = new apigateway.RestApi(this, "UsersApi", {
      restApiName: "Users Management",
      description: "API for management of users."
    });
    // Add the path /users in the API
    const apiResource = api.root.addResource("users");
    const getIntegration = new apigateway.LambdaIntegration(getUsersHandler);
    apiResource.addMethod("GET", getIntegration);
  }
}
```

## Build the project
Before building the project, we need to exlude `cdk` folder in the `tsconfig.json` in the project base folder.

Since we don't want to build CDK stack on our own (will be handled by CDK deploy)
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./build",
    "esModuleInterop": true,
    "strict": true,
  },
  "exclude": ["cdk"]
}
```

Now call `npm run build` in the shell under the project base folder.

A new folder `build` should be generated at the project base folder, which contains the `handler.js` and `users.js` files.

## Deploy the CDK stack
First go to the cdk folder
```sh
cd cdk
```

Then, we need to bootstrap the CDK stack, this is for creating the resources required for doing deployment of the CDK stack.
```sh
cdk bootstrap
```

You can preview the generated Cloudformation template with `cdk synth` but this is not required to deploy the stack.

Now we can finally deploy our CDK stack to AWS
```sh
cdk deploy
```

You should see a screen similar to this:
[![CDK Deploy](/assets/images/cdk-express-deploy.png)](/assets/images/cdk-express-deploy.png)

input `y` and enter to continue

If the deployment is successful, you should see something similar to this:
[![CDK Deploy Success](/assets/images/cdk-express-deploy-success.png)](/assets/images/cdk-express-deploy-success.png)

If it deploys successfully, you should be able to see that there's a new stack 'CdkStack' in Cloudformation and the new Rest API created in API Gateway and the GetUsers Lambda function created in the AWS console.

You can test the deployed API by calling the url displayed in the deployment outputs.

For my case, the url is `https://ultsb1lqc5.execute-api.ap-southeast-1.amazonaws.com/prod/users`. `/users` is the path of the GET API defined in the CDK stack.

## Local test
Since you didn't remove the Express app in the project, you can still run `npm start` in the project for locally testing the API function. Alternatively, you can also test the function by using a testing framework such as [jest](https://jestjs.io/).

## Clean up
Run `cdk destroy` under the `cdk` folder to delete the stack or you can delete directly in the AWS Cloutformation console.

## Summary
This blog post is just a glimpse to the power of CDK. Now that you know how it's like to create a Cloudformation Stack with CDK, this really opens up the door to the possibilities of defining all kinds of AWS infrastructure with the power of programming languages.