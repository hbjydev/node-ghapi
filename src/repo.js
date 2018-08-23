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
 * @returns {repository} The repository found
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

/**
 * Gets archive of a repository by repo, format and branch. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} repo The repository, formatted like 'owner/repoName'
 * @param {Object} [options] The options for the request.
 * @param {String} [options.format='tarball'] The format for the request. Can be 'tarball' or 'zipball'.
 * @param {String} [options.branch='master'] The branch to get the archive from.
 * @example
 * await ghapi.repos.getArchive('haydennyyy/node-ghapi')
 * @example
 * await ghapi.repos.getArchive('haydennyyy/node-ghapi',{format: 'zipball'})
 * @example
 * await ghapi.repos.getArchive('haydennyyy/node-ghapi',{format: 'zipball', branch: 'somebranch'})
 * @example
 * await ghapi.repos.getArchive('haydennyyy/node-ghapi',{branch: 'somebranch'})
 * @returns {Promise} The promise from the request. It will be either a stream or an object, depending on whether or not the archive is found.
 */
function getArchive (repo, options){
  //Apply defaults if option not specified
  format = (options.format || `tarball`).toLowerCase();
  branch = (options.branch || `master`).toLowerCase();

  if (format!=`tarball` && format!=`zipball`){
    throw new Error('Specified format must be "tarball" or "zipball".');
  }
  return fetch(`https://api.github.com/repos/${repo}/${format}/${branch}`, {
    headers: { 'User-Agent': 'node-ghapi' },
    redirect: 'follow'
  });
}

/**
 * Gets a list of commits on a repository, based on sha/branch, file path, author, after a date, or before a date. Must be run asynchronously.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @param {Object} [options] The options for the request
 * @param {String} [options.sha='master'] SHA or branch to list commits from.
 * @param {String} [options.path] Optional path to get commits from. Only commits containing this path will be returned.
 * @param {String} [options.author] Only commits by this author will be returned. Either email address or login
 * @param {String} [options.since] Get commits from after this date. ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @param {String} [options.until] Get commits from before this date. ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @example
 * await ghapi.repos.getCommits('haydennyyy/node-ghapi');
 * @example
 * await ghapi.repos.getCommits('haydennyyy/node-ghapi',{sha: "Some-file-sha", author: 'some-user',since: "2017-02-23T12:33:12Z"});
 * @example
 * await ghapi.repos.getCommits('haydennyyy/node-ghapi',{author: "some-user"});
 */
function getCommits (expression, options) {
  let sha = options.sha || 'master';
  let params = [
    (options.path ? `path=${options.path}` : ''),
    (options.author ? `author=${options.author}` : ''), 
    (options.since ? `sha=${options.since}` : ''),
    (options.until ? `sha=${options.until}` : '')
  ]
  let paramString = '?';  
  params.forEach(param => {
    if(paramString === '?') { paramString += param }
    else { paramString += (param !== '') ? `&${param}` : '' }
  });
  let parameters = (paramString == '?') ? '' : paramString;
  return fetch(`https://api.github.com/repos/${expression}/commits/${sha}${parameters}`, {
    headers: { 'User-Agent': 'node-ghapi' }
  }).then(repo => repo.json());
}

/**
 * Gets the contents of the repository's README.
 * @function
 * @memberof repos
 * @param {string} expression The expression, formatted like `owner/repoName`.
 * @example
 * await ghapi.repos.getReadme('haydennyyy/node-ghapi');
 */
function getReadme (expression) {
  return fetch(`https://api.github.com/repos/${expression}/readme`, {
    header: { 'User-Agent': 'node-ghapi' }
  }).then(readme => readme.json());
}

module.exports = { get, getForks, getAssignees,
  getBlobs, getBranches, getComments,
  getTopics, getLanguages, getTeams, 
  getTags, getArchive, getReadme }