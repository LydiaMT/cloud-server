# Lab 16 | Cloud Server | JavaScript 401
# Authour: Lydia Minehan-Tubic

## Links & Resources

✨ [Pull Request]()
✨ [Deployed Site](http://cloudserver-env.eba-gy8hpf2t.us-west-2.elasticbeanstalk.com/)
✨ [Code Fellows Assignment](https://github.com/codefellows/seattle-code-javascript-401d41/tree/main/class-16)
✨ [Installing EB](https://github.com/aws/aws-elastic-beanstalk-cli-setup)

## Set Up & Dependencies
- node.js
- AWS
- Elastic Beanstalk
- socket.io

- Create an AWS account. Make a user and an administrative group with admin privilages. Add your new user to that group
- Connect that user and account to your computer via your terminal
- Make a basic express server. Be sure to edit your package.json with the correct start script
- Zip your files to prepare them for AWS. Removes your node_modules & package-lock.json, then use the following command `zip -rp server.zip *`

## Technical Requirments

Deploy a simple Node.js server to EC2, using Elastic Beanstalk. Choose a server you’ve built previously. 

### Task 1:
- Create a new environment, using Elastic Beanstalk from the AWS Control Panel (GUI)
- Manually deploy your application to this environment by uploading a .zip file

### Task 2:
- Using the same server, create a new environment using Elastic Beanstalk from your terminal
- Manually deploy your application to this environment by using `eb deploy`