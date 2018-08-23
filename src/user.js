/**
 * User interactivity.
 * @namespace users
 */
const fetch = require('node-fetch');

/**
 * Gets a User by username. Must be run asynchronously.
 * @function
 * @memberof users
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
 * @memberof users
 * @param {string} username The username of the user to find repos for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getRepos('haydennyyy');
 */
function getRepos (username) {
  return fetch(`https://api.github.com/users/${username}/repos`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repos => repos.json())
}

/**
 * Gets a user's gists by username. Must be run asynchronously.
 * @function
 * @memberof users
 * @param {string} username The username of the user to find gists for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getGists('haydennyyy');
 */
function getGists (username) {
  return fetch(`https://api.github.com/users/${username}/gists`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(gists => gists.json())
}

/**
 * Gets a user's followers by username. Must be run asynchronously.
 * @function
 * @memberof users
 * @param {string} username The username of the user to find followers for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getFollowers('haydennyyy');
 */
function getFollowers (username) {
  return fetch(`https://api.github.com/users/${username}/followers`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(followers => followers.json())
}

/**
 * Gets users someone is following by username. Must be run asynchronously.
 * @function
 * @memberof users
 * @param {string} username The username of the user to find the following users for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getFollowing('haydennyyy');
 */
function getFollowing (username) {
  return fetch(`https://api.github.com/users/${username}/following`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(following => following.json())
}

/**
 * Gets repos someone has starred by username. Must be run asynchronously.
 * @function
 * @memberof users
 * @param {string} username The username of the user to find the starred repos for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getStarred('haydennyyy');
 */
function getStarred (username) {
  return fetch(`https://api.github.com/users/${username}/starred`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(starred => starred.json())
}

/**
 * Gets repos someone has subscribed to by username. Must be run asynchronously.
 * @function
 * @memberof users
 * @param {string} username The username of the user to find the subscribed repos for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getSubscribed('haydennyyy');
 */
function getSubscribed (username) {
  return fetch(`https://api.github.com/users/${username}/subscriptions`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(subbed => subbed.json())
}

/**
 * Gets organizations a user is in by username. Must be run asynchronously.
 * @function
 * @memberof users
 * @param {string} username The username of the user to find the orgs for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getOrgs('haydennyyy');
 */
function getOrgs (username) {
  return fetch(`https://api.github.com/users/${username}/orgs`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(orgs => orgs.json())
}

/**
 * Gets events a user has caused by username. Must be run asynchronously.
 * @function
 * @memberof users
 * @param {string} username The username of the user to find the events for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getEvents('haydennyyy');
 */
function getEvents (username) {
  return fetch(`https://api.github.com/users/${username}/events`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(events => events.json())
}

/**
 * Gets events a user has had caused to them by username. Must be run asynchronously.
 * @function
 * @memberof users
 * @param {string} username The username of the user to find the events for. (`login` parameter on the API)
 * @example
 * await ghapi.users.getInboundEvents('haydennyyy');
 */
function getInboundEvents (username) {
  return fetch(`https://api.github.com/users/${username}/received_events`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(events => events.json())
}

module.exports = { get,
  getRepos,
  getGists,
  getFollowers,
  getFollowing,
  getStarred,
  getSubscribed,
  getOrgs,
  getEvents,
  getInboundEvents }
