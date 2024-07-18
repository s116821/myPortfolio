# myPortfolio
This repository contains the source code and artifacts needed to host my portfolio website.

## Dependencies
The following lists the basic dependencies will need to have in order to support this application (additional dependencies are accounted for in the following sections):
* npm (Node Package Manager)
* python
* virtualenv python package installed in global python instance (`pip install virtualenv`)

## Local Development Setup
This section briefly describes the steps needed to get setup for local development

### Getting Started
1. Clone the repository
2. Copy .env.default to new file named ".env" by running `cp .env.default .env` and modify the environment variable values as needed for your development
3. Run `npm install` to install dependencies
4. Run `npm start` to start the development frontend server
5. Start another terminal
6. Navigate to the "backend" directory (`cd backend`)
7. Create a virtual environment via `python -m virtualenv back-env`
    * NOTE: Make sure "virtualenv" package is installed by running `pip install virtualenv` (Admin prompt needed on Windows)
8. Activate the python virtual environment via:
    * `source back-env/bin/activate  # on Linux/macOS`
    * `back-env\Scripts\activate  # on Windows`
9. Installed the required dependencies in the virtual environment with `pip install -r requirements.txt`
    * While in the virtual environment prompt and in the main "backend" folder, if you want to update the requirements run `pip freeze > requirements.txt`
10. Run the Django Project with `python manage.py runserver`

### Additional Helpful Tool Setup
- If you want to be able to login to the Django Admin Web Portal, while in the already-initialized virtual environment, run:
    * `python manage.py migrate`
    * `python manage.py createsuperuser`

## Production Deployment to AWS
This section briefly describes the steps needed to deploy the website to a production server via AWS

### Frontend Deployment
1. Pull the latest master/main branch of this repository to the machine of your choice
2. Copy .env.default to new file named ".env" by running `cp .env.default .env` and modify the environment variable values as needed for your production build
3. Run `npm run build`
4. Upload the contents of the `build` folder to the S3 bucket with a command like `aws s3 cp build/ s3://steven-portfolio-website/ --recursive --profile your_configured_user`
    * NOTE 1: Make sure you have [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed
    * NOTE 2: Make sure you've configured your authenticated user with `aws configure --profile your_configured_user` where `your_configured_user` is replaced with the actual user you created in AWS IAM with the appropriate credentials by following [an adequate guide](https://learnaws.io/blog/use-aws-cli-in-windows).
    * NOTE 3: If you are uploading via the web browser instead, make sure you individually select the contents of the "build" folder as opposed uploading the folder itself (otherwise you may have difficulties specifying the "index.html" file required later when configuring the S3 bucket).
5. Configure the S3 bucket to serve the website as a static website by:
    * Enabling static website hosting in your S3 bucket settings
    * Specifying the index.html file as the index document
    * Configuring the permissions to allow public access; there are plenty of guides on how to do this, and I will not disclose the details here so as to not make it easier to abuse the security policy I've actually employed

### Backend Deployment
1. Make sure EC2 instance is configured properly to be accessible by S3 static site
2. SSH into the production AWS EC2 instance
3. Pull the latest master/main branch of this repository
4. Copy .env.default to new file named ".env" by running `cp .env.default .env` and modify the environment variable values as needed for your production build (CURRENTLY NOT NEEDED FOR BACKEND)
5. Navigate to the backend directory: `cd backend`
6. Activate the virtual environment: `source back-env/bin/activate`
7. Download dependencies: `pip install -r requirements.txt`
8. Start the Django Project: `python manage.py runserver`
