# node-ghapi [![Build Status](https://img.shields.io/azure-devops/build/haydennyyy/35075327-9a78-47f1-ad0e-026ef0a91fff/3.svg?style=flat-square)](https://haydennyyy.visualstudio.com/node-ghapi/_build/latest?definitionId=3&branchName=master) [![Discord](https://img.shields.io/discord/574941083155431446.svg?color=7289DA&label=Discord&logo=Discord&style=flat-square)](https://discord.gg/nMmeecb) [![NPM](https://img.shields.io/npm/dt/node-ghapi.svg?style=flat-square)](https://npmjs.com/node-ghapi)

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
