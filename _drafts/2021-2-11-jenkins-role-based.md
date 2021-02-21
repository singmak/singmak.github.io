---
layout: post
title: Role based permission in Jenkins
---

A very useful way to manage the permissions of the users in Jenkins is with the Role-based Authorization Strategy.
https://plugins.jenkins.io/role-strategy/

By using this strategy we can define different roles for different groups of users and each role could be assigned assigned different permissions in Jenkins. For example, we could have an admin role that is assigned all the permissions to do anything in Jenkins, and a developer role that only allow the users to view jobs and trigger builds.

Installation is straightforward. After installing it, you need to switch to use this strategy.
Then you need to
![My helpful screenshot](/assets/screenshot.jpg)