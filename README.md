# myPortfolio
This repository contains the source code and artifacts needed to host my portfolio website.

## Local Development Setup
This section briefly describes the steps needed to get setup for local development

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## Production Deployment
This section briefly describes the steps needed to deploy the website to a production server via AWS

1. Run `npm run build`
2. Upload the contents of the `build` folder to the S3 bucket with a command like `aws s3 cp build/ s3://your-bucket-name/ --recursive`
3. Configure the S3 bucket to serve the website as a static website by:
    * Enabling static website hosting in your S3 bucket settings
    * Specifying the index.html file as the index document
    * Configuring the error document (e.g., 404.html)
4. TODO: Finish rest of guide