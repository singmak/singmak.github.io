"use strict";(self.webpackChunksingsdev=self.webpackChunksingsdev||[]).push([[633],{5792:function(e,n,r){r.r(n),r.d(n,{default:function(){return h}});var t=r(1151),a=r(7294);function s(e){const n=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},(0,t.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.p,null,"It's easy to create a AWS Lambda service with Serverless Framework. We just need to write the serverless.yml and Serverless Framework can use the serverless.yml properties to generate the infrastructure resources that the AWS Lambda functions depend on. Basically, if the provider in the serverless.yml is ",a.createElement(n.code,null,"aws"),", the Serverless Framework Service is a Cloudformation stack. Serverless Framework support Cloudformation syntax in serverless.yml. You can add new resources and override / modify the resources generated by Serverless in serverless.yml."),"\n",a.createElement(n.h2,null,"Adding new resources"),"\n",a.createElement(n.p,null,"It's straightforward to add new resources. You just need to add the resources under the resources -> Resources sections. The resources can be defined in CloudFormation template syntax.\nYou can add any resources that your Lambda functions needs in this section. It can be a DynamoDb table, an S3 bucket."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-yml"},"resources:\n  Resources:\n    usersTable:\n      Type: AWS::DynamoDB::Table\n      Properties:\n        TableName: usersTable\n        AttributeDefinitions:\n          - AttributeName: email\n            AttributeType: S\n        KeySchema:\n          - AttributeName: email\n            KeyType: HASH\n        ProvisionedThroughput:\n          ReadCapacityUnits: 1\n          WriteCapacityUnits: 1\n")),"\n",a.createElement(n.h2,null,"The Serverless Framework generated resources"),"\n",a.createElement(n.p,null,"There are many cases that we need to reference the Serverless Framework generated resources in provisioning addition resources. All the resource names are generated based on name templates documented in the ",a.createElement(n.code,null,"The Serverless Framework generated resources")," in https://www.serverless.com/framework/docs/providers/aws/guide/resources/\nOne example copied from the documentation:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"When you override basic resources, there are two things to keep in mind when it comes to normalizedFunctionName:\n\nIt should start with an uppercase character\nThe - will be changed to Dash, _ will be changed to Underscore\n")),"\n",a.createElement(n.p,null,"so the ",a.createElement(n.code,null,"normalizedFunctionName")," of a function named ",a.createElement(n.code,null,"write-port")," in the serverless.yml will be ",a.createElement(n.code,null,"WriteDashPost"),"."),"\n",a.createElement(n.h2,null,"Depending on the Serverless Framework generated resources"),"\n",a.createElement(n.p,null,"We can create resources that depend on the resources that are generated by Serverless Framework."),"\n",a.createElement(n.p,null,"For example here we are adding a Gateway Response resource to the generated Rest Api ",a.createElement(n.code,null,"ApiGatewayRestApi")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-yml"},"GatewayResponseDefault4XX:\n  Type: 'AWS::ApiGateway::GatewayResponse'\n  Properties:\n    ResponseParameters:\n      gatewayresponse.header.Access-Control-Allow-Origin: \"'*'\"\n      gatewayresponse.header.Access-Control-Allow-Headers: \"'*'\"\n    ResponseType: DEFAULT_4XX\n    RestApiId:\n      Ref: 'ApiGatewayRestApi'\n")),"\n",a.createElement(n.p,null,"Another example, adding an API mapping to the generated ",a.createElement(n.code,null,"ApiGatewayDeployment${sls:instanceId}")," resource."),"\n",a.createElement(n.p,null,a.createElement(n.code,null,"DependsOn")," is used since this resource can only be created after ",a.createElement(n.code,null,"ApiGatewayDeployment${sls:instanceId}")," being created."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-yml"},"UserApiMapping:\n  Type: AWS::ApiGatewayV2::ApiMapping\n  DependsOn: ApiGatewayDeployment${sls:instanceId}\n  Properties: \n    ApiId:\n      Ref: ApiGatewayRestApi\n    ApiMappingKey: users\n    DomainName: api-${self:provider.stage}.sing-example.com\n    Stage: ${self:provider.stage}\n")),"\n",a.createElement(n.h2,null,"Override Serverless Framework resources"),"\n",a.createElement(n.p,null,"Serverless Framwork has a ",a.createElement(n.a,{href:"https://www.serverless.com/framework/docs/providers/aws/guide/resources/#override-aws-cloudformation-resource"},"detailed documentation")," about how to override Serverless Framework generated resources."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?a.createElement(n,e,a.createElement(s,e)):s(e)},l=r(7735),c=r(6089),i=r(2658),d=r(1508),m=r(9241),u=r(5715);const p=e=>{var n,r,s,o,p,h,w;let{data:g,children:v}=e;const y=null!==(n=null===(r=g.mdx)||void 0===r||null===(s=r.frontmatter)||void 0===s?void 0:s.title)&&void 0!==n?n:"Blog Post";return(0,a.useEffect)((()=>(0,u.z)("BlogPost",y)),[]),a.createElement(l.Z,{pageTitle:y},a.createElement(c.Z,{maxWidth:"md",sx:{padding:5}},a.createElement(i.Z,{component:"h1",sx:{fontSize:{xs:"2rem",md:"2.5rem"}}},null===(o=g.mdx)||void 0===o||null===(p=o.frontmatter)||void 0===p?void 0:p.title),a.createElement(i.Z,{component:"p"},null===(h=g.mdx)||void 0===h||null===(w=h.frontmatter)||void 0===w?void 0:w.date),a.createElement(d.Z,{sx:{img:{padding:1,background:"#fff"}}},a.createElement("div",null),a.createElement(t.Zo,{components:{code:m.E}},v))))};function h(e){return a.createElement(p,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-post-mdx-fields-slug-tsx-content-file-path-posts-2021-5-30-serverless-manage-resources-mdx-08a2aee63cb394e384f6.js.map