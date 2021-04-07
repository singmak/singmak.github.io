---
layout: post
title: Deploy a Lambda function with CDK
---

I have been building web applications and services with AWS services for some time. I understand how cumbersome it is to set up the same resources manually on AWS for different environments (development, staging, production, etc). That's why we should define our service stack as codes so that we can deploy the same infrastructure to different environments reliably and easily.
We can use Cloudformation for this. But we need to spend some time to learn how to write the template. And you have probably already see those Cloudformation templates that contains hundreds lines of codes. Maintaining them and writing them can be very difficult.

What if we can use the programming languages that we are already familiar with to define the infrastructure? What if we can create the AWS resources in just a few lines of codes? With CDK (Cloud Development Kit) we can do all that.

CDK supports different programming languages, including TypeScript, JavaScript, Python, Java and C#. In this blog post, I am going to use TypeScript to demonstrate how to build and deploy a Lambda function with CDK since it's the language that I am familiar with.

## Setting up the environment ##

To get started, you need to [install AWS Cli](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) and configure your AWS credentials on the command line environment.
```
> aws configure
```
and then install CDK:
```
> npm install -g aws-cdk
> cdk --version
```
