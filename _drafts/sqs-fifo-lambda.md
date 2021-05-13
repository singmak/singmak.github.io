---
layout: post
title: "AWS CDK Example: Process ordered events with AWS Lambda, SQS FIFO and SNS FIFO"
---
## Prerequisite
- AWS CLI environment [setup](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
- Node.js version 12+
- Basic knowledge of typescript
- Basic knowledge of AWS Lambda

There are many cases that a service need to react based on the events published by another service. And in some cases, the order of the processing of the messages is important. For example, think about bank transactions, the deposit, transfer, withdrawal events need to processed in order or there may not be enough money in the bank account to withdraw or transfer the money. In this tutorial, I am going to demostrate how to implement an infrastructure that can handles events produced by one system and consumed by another system in order with AWS CDK, AWS Lambda, Amazon SQS FIFO queues and Amazon SNS FIFO.

## Architecture
![architecture]()

## Setting up the project

### Install CDK
### Init CDK Project
### Install dependencies


## Create the stack for producing the events

## Create the stack for polling and processing the events

## Example source