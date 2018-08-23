const { expect } = require('chai');
const ghapi = require('./index');

describe('users', () => {
  it('get should return a user object in JSON', async () => {
    let result = await ghapi.users.get('haydennyyy');
    expect(result).to.be.an('object');
  });
  it('getRepos should retern an array of repositories', async () => {
    let result = await ghapi.users.getRepos('haydennyyy');
    expect(result).to.be.an('array');
  });
});

// TODO: Add repo unit tests