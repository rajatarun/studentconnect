#!/bin/bash
cd /home/ec2-user/application
npm run build
sudo cp -r build/ /var/www/html
