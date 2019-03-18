# node-ghapi [![Build Status](https://haydennyyy.visualstudio.com/node-ghapi/_apis/build/status/Build?branchName=master)](https://haydennyyy.visualstudio.com/node-ghapi/_build/latest?definitionId=3&branchName=master) ![Discord](https://img.shields.io/discord/544110653078634506.svg?color=7289DA&label=Discord&logo=Discord&style=flat-square)
A GitHub API wrapper written in TypeScript

## Usage
```js
// JavaScript
const { User } = require( 'node-ghapi' );

let user = new User('username', 'authentication-token');
```
```ts
// TypeScript
import { User } from 'node-ghapi';

let user = new User('username', 'authentication-token');
```
> NOTE: This is a rewrite of the original version of this API wrapper.
> It is not yet on feature parity.
