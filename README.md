# accessLevel [![npm version](https://img.shields.io/npm/v/accesslevel.svg?style=flat)](https://www.npmjs.com/package/accesslevel)

NPM package to set different access level in application depending user's role

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save accesslevel
```

## Usage

Provide permission object with set permission to set values.

Sample of permission object:

    const permissionObject = {
      accountManager: false,
      serviceManager: false,
      supervisor: false,
    };
