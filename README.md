# myPortfolio
This repository contains the source code and artifacts needed to host my portfolio website.

## Local Development Setup
This section briefly describes the steps needed to get setup for local development

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development frontend server

## Production Deployment
This section briefly describes the steps needed to deploy the website to a production server via AWS

### Frontend Deployment
1. Run `npm run build`
2. Upload the contents of the `build` folder to the S3 bucket with a command like `aws s3 cp build/ s3://steven-portfolio-website/ --recursive --profile your_configured_user`
    * NOTE 1: Make sure you have [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed
    * NOTE 2: Make sure you've configured your authenticated user with `aws configure --profile your_configured_user` where `your_configured_user` is replaced with the actual user you created in AWS IAM with the appropriate credentials by following [an adequate guide](https://learnaws.io/blog/use-aws-cli-in-windows).
    * NOTE 3: If you are uploading via the web browser instead, make sure you individually select the contents of the "build" folder as opposed uploading the folder itself (otherwise you may have difficulties specifying the "index.html" file required later when configuring the S3 bucket).
3. Configure the S3 bucket to serve the website as a static website by:
    * Enabling static website hosting in your S3 bucket settings
    * Specifying the index.html file as the index document
    * Configuring the permissions to allow public access; there are plenty of guides on how to do this, and I will not disclose the details here so as to not make it easier to abuse the security policy I've actually employed
4. TODO: Finish rest of guide

### Backend Deployment
