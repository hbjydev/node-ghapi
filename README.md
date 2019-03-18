# node-ghapi [![Build Status](https://haydennyyy.visualstudio.com/node-ghapi/_apis/build/status/Build?branchName=master)](https://haydennyyy.visualstudio.com/node-ghapi/_build/latest?definitionId=3&branchName=master)
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
