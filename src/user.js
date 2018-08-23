const fetch = require('node-fetch');

/**
 * Gets a User by username. Must be run asynchronously.
 * @function
 * @param {string} username The username of the user to find. (`login` parameter on the API)
 * @example
 * await ghapi.users.get('haydennyyy');
 */
function get (username) {
  return fetch('https://api.github.com/users/' + username, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(user => user.json())
}

/**
 * Gets a user's repositories by username. Must be run asynchronously.
 * @function
 * @param {string} username The username of the user to find repos for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getRepos('haydennyyy');
 */
function getRepos (username) {
  return fetch(`https://api.github.com/users/${username}/repos`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repos => repos.json())
}
module.exports = { get, getRepos }
