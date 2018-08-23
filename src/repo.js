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

/**
 * Gets a list of assignees of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getAssignees('haydennyyy/node-ghapi');
 */
function getAssignees (expression) {
  return fetch(`https://api.github.com/repos/${expression}/assignees`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets am array of blobs of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @param {string} sha The SHA hash of the blob
 * @example
 * await ghapi.repos.getBlobs('haydennyyy/node-ghapi', '09a899b58254f1bf1f215c7cec348bb5b64af57b');
 */
function getBlobs (expression, sha) {
  return fetch(`https://api.github.com/repos/${expression}/git/blobs`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets a list of branches of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getBranches('haydennyyy/node-ghapi');
 */
function getBranches (expression) {
  return fetch(`https://api.github.com/repos/${expression}/branches`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets a list of collaborators of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getCollaborators('haydennyyy/node-ghapi');
 */
function getCollaborators (expression) {
  return fetch(`https://api.github.com/repos/${expression}/collaborators`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets a list of comments of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getComments('haydennyyy/node-ghapi');
 */
function getComments (expression) {
  return fetch(`https://api.github.com/repos/${expression}/comments`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets a list of topics of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getTopics('haydennyyy/node-ghapi');
 */
function getTopics (expression) {
  return fetch(`https://api.github.com/repos/${expression}/topics`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets a list of languages of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getLanguages('haydennyyy/node-ghapi');
 */
function getLanguages (expression) {
  return fetch(`https://api.github.com/repos/${expression}/languages`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets a list of teams of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getTeams('haydennyyy/node-ghapi');
 */
function getTeams (expression) {
  return fetch(`https://api.github.com/repos/${expression}/teams`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets a list of tags of a repository by expression. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getTags('haydennyyy/node-ghapi');
 */
function getTags (expression) {
  return fetch(`https://api.github.com/repos/${expression}/tags`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

module.exports = { get, getForks, getAssignees,
  getBlobs, getBranches, getCollaborators,
  getComments, getTopics, getLanguages,
  getTeams, getTags }