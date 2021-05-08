---
layout: post
title: Deploy a Lambda function with CDK
---

There are many ways to create and configure the infrastructures of our applications on AWS, either it's with the console, AWS Cli or AWS Cloudformation.
Using AWS Cloudformation is a good way to maintain our infrastructures as code. However, writing a Cloudformation template is not easy. In my experience, I usually use Cloudformation together with Serverless Framework because a serverless app created by Serverless Framework is a Cloudformation stack at the end and we can define the AWS resources as part of the Cloudforamtion stack of the Lambda functions in the Serverless Framework config file. For other use cases that are not dealing with Lambda functions... I mostly just use the AWS console or Cli to manually configure the AWS intrastructure... To be honest I was put off by the huge size of the Cloudformation templates that are required to define an infrastructure and all the template syntax that I need to learn...
But not anymore! Now I know that there's a much easier way to create a Cloudformation stack for developers, which is AWS CDK (AWS Cloud Development Kit).
With AWS CDK, we can create AWS Cloudformation stacks with the power of programming languages.