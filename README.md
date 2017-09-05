# webpack-sftp-client

## Introduction

A plugin for webpack as an sftp client.

Forked from [sqhtiamo](https://github.com/sqhtiamo/webpack-sftp-client/).  Resolves an issue where you cannot instantiate the plugin twice to upload two different files to two different directories.

## Installation

```
npm install webpack-sftp-client
```

## Usage

```
var WebpackSftpClient = require('webpack-sftp-client');

new WebpackSftpClient({
    port: '22',
    host: 'exmaple.com',
    username: 'root',
    password: 'password',
    path: './build/',
    remotePath: '/data/website/demo/'
})
```