const { expect } = require('chai');
const Client = require('./index');
let ghapi = new Client(process.env.GITHUB_API_KEY);

describe('Users', () => {
  it('.raw should return a user object in JSON', async () => {
    let raw = ghapi.users('haydennyyy').raw;
    expect(await raw).to.be.an('object');
  });
  it('.repos should return an array of repositories in JSON', async () => {
    let repos = ghapi.users('haydennyyy').repos;
    expect(await repos).to.be.an('array');
  });
});

describe('Repositories', () => {
  it('.raw should return a repo object in JSON', async () => {
    let raw = ghapi.repos('haydennyyy/node-ghapi').raw;
    expect(await raw).to.be.an('object');
  });
});