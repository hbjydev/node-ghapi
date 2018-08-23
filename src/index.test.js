const { expect } = require('chai');
const ghapi = require('./index');

describe('UsersFunction', () => {
  it('should return a user object in JSON', () => {
    let result = ghapi.users.get('haydennyyy');
    expect(result).to.be.an('object');
  });
});