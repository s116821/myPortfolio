#!/bin/bash
# Description:
#   This script is used to quickly install a new backend to and AWS EC2 instance

# Installing dependencies
sudo yum install python3 -y
sudo yum install python3-pip -y
sudo yum install cronie cronie-anacron -y
pip3 install virtualenv

cur_dir="$PWD" # getting current directory path
export PATH="$HOME/.local/bin:$PATH" # adding bin folder to path for the remainder of the installation
virtualenv back-env && back-env/bin/pip install -r requirements.txt # installing python dependencies into virtual environment
back-env/bin/python manage.py migrate # performing first-time setup of django backend

# Setting up crontab to run server on every reboot, drop redundant entries manually if you run this script more than once
cron_line_to_execute="$(cur_dir)/back-env/bin/python $(cur_dir)/manage.py runserver"
(crontab -l; echo "@reboot ${cron_line_to_execute}";) | crontab
