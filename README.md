# Dynamo GUI [![Build Status](https://travis-ci.org/aymone/dynamogui.svg?branch=master)](https://travis-ci.org/aymone/dynamogui)

*Under construction :D*

DynamoDB GUI as chrome extension.

## Checkpoints:

    Implements services with aws sdk for javascript
    Implement tests
    Dockerize dev with dynamo container
    Show tables
    Alter tables
    Lista dynamo data
    Query dynamo data
    Edit dynamo data
    Save conf on browser localstorage
    Export conf as json
    Import conf as Json
    Sync conf on cloud storages
    Create cool png icons (16/48/128)
    Export as other browsers extensions
    Publish on chrome store

## Requirements

[Node](https://nodejs.org/en/) ~4.4 with npm ~2.15

[Gulp](http://gulpjs.com/)

[Docker](www.docker.com)


## Development todo

Install deps
```console
$ npm install
```

Create local dynamoDB with [this docker container.](https://github.com/daime/docker-dynamodb)
```console
$ gulp db-create
```

Up local dynamoDB
```console
$ gulp db-up
```

Build app (Browserify Pack)
```console
$ gulp build
```

Run app on localhost:4000 and watch for changes and rebuild
```console
$ gulp
```

### Development mode
Import "public" folder as google extension throught developer tools, the app will be available on your chrome browser.


## Tools

Connect server on localhost:4000
```console
$ gulp connect
```

Update less
```console
$ gulp less
```

Stop docker container
```console
$ gulp db-down
```

Remove docker container
```console
$ gulp db-delete
```

### Tools and libraries used

[Browserify](http://browserify.org/)

[Angular](https://angularjs.org/) ~1.5x

[Angular material](https://material.angularjs.org/latest/)

[AWS SDK](https://aws.amazon.com/pt/sdk-for-node-js/)

[Less](http://lesscss.org/)
