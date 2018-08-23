/**
 * Repository interactivity.
 * @namespace repos
 */
const fetch = require('node-fetch');
 
/**
 * Gets a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.get('haydennyyy/node-ghapi');
 */
function get (expression) {
  return fetch('https://api.github.com/repos/' + expression, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets a list of forks of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getForks('haydennyyy/node-ghapi');
 */
function getForks (expression) {
  return fetch(`https://api.github.com/repos/${expression}/forks`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

module.exports = { get, getForks }