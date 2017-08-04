# Setup

## Install nginx

```
brew install nginx
```

TODO : configure nginx server

```
cp nginx.server.conf.example /usr/local/etc/nginx/servers/wordpress.conf
```

## Install php

...

## Install node

...

## Install mysql

```
brew install mysql

mysql -u root -p
create database [databasename];
UPDATE user SET authentication_string=PASSWORD("god123") WHERE User='root';
FLUSH PRIVILEGES;
quit
```

# Dev

## nginx

```
sudo nginx
sudo nginx -s stop
sudo nginx -s reload
```

## php

```
php-cgi -b 9000
```

## mysql

```
mysql.server start
```

## webpack

```
webpack --watch
```

## node

```
nodemon build/server.js
```

# Research

https://medium.freecodecamp.org/how-to-build-react-apps-on-top-of-the-wordpress-rest-api-bcc632808025

https://developer.wordpress.org/rest-api/

