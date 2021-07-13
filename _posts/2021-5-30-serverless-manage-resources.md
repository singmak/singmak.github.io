---
layout: post
title: Managing CloudFormation stack with Serverless Framework
---

It's easy to create a AWS Lambda service with Serverless Framework. We just need to write the serverless.yml and Serverless Framework can use the serverless.yml properties to generate the infrastructure resources that the AWS Lambda functions depend on. Basically, if the provider in the serverless.yml is `aws`, the Serverless Framework Service is a Cloudformation stack. Serverless Framework support Cloudformation syntax in serverless.yml. You can add new resources and override / modify the resources generated by Serverless in serverless.yml.

## Adding new resources
It's straightforward to add new resources. You just need to add the resources under the resources -> Resources sections. The resources can be defined in CloudFormation template syntax.
You can add any resources that your Lambda functions needs in this section. It can be a DynamoDb table, an S3 bucket.
```yml
resources:
  Resources:
    usersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: usersTable
        AttributeDefinitions:
          - AttributeName: email
            AttributeType: S
        KeySchema:
          - AttributeName: email
            KeyType: HASH
        ProvisionedThroughput:
          ReadCapacityUnits: 1
          WriteCapacityUnits: 1
```

## The Serverless Framework generated resources
There are many cases that we need to reference the Serverless Framework generated resources in provisioning addition resources. All the resource names are generated based on name templates documented in the `The Serverless Framework generated resources` in https://www.serverless.com/framework/docs/providers/aws/guide/resources/
One example copied from the documentation:
```
When you override basic resources, there are two things to keep in mind when it comes to normalizedFunctionName:

It should start with an uppercase character
The - will be changed to Dash, _ will be changed to Underscore
```
so the `normalizedFunctionName` of a function named `write-port` in the serverless.yml will be `WriteDashPost`.

## Depending on the Serverless Framework generated resources
We can create resources that depend on the resources that are generated by Serverless Framework.

For example here we are adding a Gateway Response resource to the generated Rest Api `ApiGatewayRestApi`

```yml
GatewayResponseDefault4XX:
  Type: 'AWS::ApiGateway::GatewayResponse'
  Properties:
    ResponseParameters:
      gatewayresponse.header.Access-Control-Allow-Origin: "'*'"
      gatewayresponse.header.Access-Control-Allow-Headers: "'*'"
    ResponseType: DEFAULT_4XX
    RestApiId:
      Ref: 'ApiGatewayRestApi'
```

Another example, adding an API mapping to the generated `ApiGatewayDeployment${sls:instanceId}` resource.

`DependsOn` is used since this resource can only be created after `ApiGatewayDeployment${sls:instanceId}` being created.
```yml
UserApiMapping:
  Type: AWS::ApiGatewayV2::ApiMapping
  DependsOn: ApiGatewayDeployment${sls:instanceId}
  Properties: 
    ApiId:
      Ref: ApiGatewayRestApi
    ApiMappingKey: users
    DomainName: api-${self:provider.stage}.sing-example.com
    Stage: ${self:provider.stage}
```

## Override Serverless Framework resources
Serverless Framwork has a [detailed documentation](https://www.serverless.com/framework/docs/providers/aws/guide/resources/#override-aws-cloudformation-resource) about how to override Serverless Framework generated resources.
