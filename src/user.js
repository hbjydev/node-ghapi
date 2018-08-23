const fetch = require('node-fetch');

module.exports = {
  /**
   * Gets a User by username.
   * @function
   * @param {string} username The username of the user to find. (`login` parameter on the API)
   * @example
   * await ghapi.users.get('haydennyyy');
   */
  get: username => {
    return fetch('https://api.github.com/users/' + username, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(user => user.json())
  },

  /**
   * Gets a user's repositories by username.
   * @function
   * @param {string} username The username of the user to find repos for. (`login` parameter on the API)
   * @example
   * await ghapi.users.getRepos('haydennyyy');
   */
  getRepos: username => {
    return fetch(`https://api.github.com/users/${username}/repos`, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(repos => repos.json())
  }
}
