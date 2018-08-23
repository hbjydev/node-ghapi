const { expect } = require('chai');
const {  user  } = require('./index');

describe('Users', () => {
  it('.raw should return a user object in JSON', async () => {
    let User = new user('haydennyyy').raw;
    expect(await User).to.be.an('object');
  });
  it('.repos should return an array of repositories in JSON', async () => {
    let User = new user('haydennyyy').repos;
    expect(await User).to.be.an('array');
  });
});