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
 * @param {string} [gistID] You can specify an ID to find one gist.
 * @example
 * await ghapi.users.getGists('haydennyyy');
 * @example
 * await ghapi.users.getGists('octocat', 'aa5a315d61ae9438b18d');
 */
function getGists (username, gistID) {
  return fetch(`https://api.github.com/users/${username}/gists${gistID ? '/' + gistID : ''}`, {
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
 * Check if a user is following another user
 * @function
 * @memberof users
 * @param {string} userone The name of one user.
 * @param {string} usertwo The name of the other user.
 * @example
 * await ghapi.users.isFollowing('haydennyyy', 'octocat'); // false
 */
function isFollowing (userone, usertwo) {
  return fetch(`https://api.github.com/users/${userone}/following/${usertwo}`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(r => {
    return (r.status === 204) ? true : false;
  });
}

/**
 * Gets repos someone has starred by username. Must be run asynchronously.
 * @function
 * @memberof users
 * @param {string} username The username of the user to find the starred repos for. (`login` parameter on the API)
 * @param {string} [expression] The Repo expression to find. Can be `:owner` or `:owner/:repo`.
 * @example
 * await ghapi.users.getStarred('haydennyyy');
 * @example
 * await ghapi.users.getStarred('haydennyyy', 'js-org');
 * @example
 * await ghapi.users.getStarred('haydennyyy', 'js-org/js.org');
 */
function getStarred (username, expression) {
  return fetch(`https://api.github.com/users/${username}/starred${expression ? '/' + expression : ''}`, {
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
  isFollowing,
  getStarred,
  getSubscribed,
  getOrgs,
  getEvents,
  getInboundEvents }
