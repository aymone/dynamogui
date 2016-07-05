#Dynamo GUI

*Under construction :D*

DynamoDB GUI as chrome extension.

##Checkpoints:
    Implements services with aws sdk for javascript :white_check_mark:
    Implement tests
    Dockerize dev with dynamo container :white_check_mark:
    Show tables :white_check_mark:
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

##Requirements

Node ~4.4

Npm ~2.15

Gulp

Docker

##Development todo

Install deps
```console
$ npm install
```

Up local dynamoDB with [docker container](https://github.com/daime/docker-dynamodb)
```console
$ gulp dynamoUp
```

Build app (Browserify Pack)
```console
$ gulp build
```

###Development mode
Import "public" folder as google extension throught developer tools, the app will be available on your chrome browser.


##Tools

Connect server on localhost:4000, watch for changes to auto build main.js
```console
$ gulp
```

Build main.js
```console
$ gulp build
```

Connect server on localhost:4000
```console
$ gulp connect
```
