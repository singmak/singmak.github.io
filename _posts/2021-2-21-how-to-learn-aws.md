---
layout: post
title: How to learn AWS as a developer
---

## Gong Hei Fat Choi and Happy Chinese new year! ##

My first post in 2021. I started this blog back in 2020 October and I kind of forgot about it after a few posts. My new year resolution is that I will blog more often this year.

This blog post is a very short overview about how to learn AWS as a developer based on my personal experience.

You may ask: Why learn AWS if I am just a developer? I am just a developer. I am not a DevOps guy, I am not an infrastructure guy, I am not a cloud architect. I only want to deal with codes.

If you are a developer in a big team, this is probably true, since there would be a DevOps guy or/and cloud engineer/architects who do these jobs. However, when you are in a small team, which may not have the budget to hire another guy to do the DevOps stuff and configure the infrastructure. So you will be the guy to do these things and you have to learn it. More and more companies are hosting their services on the cloud nowadays, whether it’s AWS, Azure or Google. And AWS is the leading cloud provider now. Therefore, if you are a full stack developer on a small team, it's very advantageous to learn AWS. It can definitely increase your value as a full stack developer.

## Where to start? ##

However, just like everything, there’s a learning curve in using the services of AWS. I would suggest the developers creating a new AWS account for themselves to practice. It’s free. AWS also provides free tiers for some of the services, which could be enough for you to learn a lot of AWS already. First of all, you need to be aware that a lot of the resources that you are going to create will live in regions. So if you create something in the Singapore region, it may not appear in the US region. I suggest developers starting from understanding the basic components of IAM first, including IAM policies, roles, groups and users. You need to learn how to create IAM users for yourself and your teammates. You need to learn how to use IAM policies and IAM roles to allow your web services to access the resources on AWS.

After that I would recommend learning about Lambda, API Gateway and Serverless framework. By using Lambda, you don’t need to think too much about the infrastructure and just need to focus on the functions that you want to develop. You can upload your Lambda function codes on the AWS console or you can use Serverless framework to deploy from a command line environment. If you need to deploy a web application that needs to be running all the time, you can learn about Elastic Beanstalk. If you need to deploy a static website, you can deploy to S3 and use Cloudfront as the CDN service. You can register a new domain and manage your subdomains with Route53. DyanmoDB is a No-SQL database service and it’s serverless, so it works very well with Lambda. CloudWatch is a must-learn service as well since it is the place where you can find all the logs of your web applications on AWS.

When you are more comfortable with AWS, you can start to learn about VPC, EC2, Elastic Load Balancer, security groups and ECS so that you know how to manage the networks, security, servers and containers of your web applications. You need to know how to limit the access of your services from the public. You need to know when to use Lambda, ECS or EC2. And if you need a relational database hosted on AWS, you can learn about RDS. If you want to deploy your projects to many environments more easily, you can learn about Cloudformation and CDK. After learning all these things, you can already develop many types of cloud projects.

AWS is a great platform and it’s very beginner-friendly. However, there are still a large amount of things to learn. If you are really interested in learning AWS, I would recommend getting the AWS certifications. AWS provides different certifications and AWS Solutions Architect Associate Certification is the most general one that could apply to different jobs and it can serve as a good starting point before you try to get the other AWS certifications. You can have a more thorough understanding of AWS and the certificate is a great way to prove your skills as well. Currently I am also preparing for it, hopefully I can get it this year.

## Learning resources recommendations ##

- [AWS](https://aws.amazon.com)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS News blog](https://aws.amazon.com/blogs/aws/)
- [Serverless Framework](https://www.serverless.com)
- [Serverless Stack](https://serverless-stack.com/)
- [Serverless Status](https://serverless.email/)
- [Serverless blog](https://www.serverless.com/blog)
- [AWS Certified Solutions Architect – Associate](https://aws.amazon.com/certification/-certified-solutions-architect-associate/)
- [YouTube Video: AWS Certified Solutions Architect - Associate 2020 (PASS THE EXAM!)](https://www.youtube.com/watch?v=Ia-UEYYR44s&t=20s)