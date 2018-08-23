const fetch = require('node-fetch');

/**
 * Repository interactivity.
 * @class
 */
class Repo {
  /**
   * @param {string} expression The expression, formatted like owner/name
   * @param {string} token The authentication token
   */
  constructor(expression, token) {
    this.token = token;
    this.baseURL = 'https://api.github.com/repos/' + expression;
  }
  /**
   * Gets the raw JSON from the GitHub API Query. Must be run asynchronously.
   */
  get raw () {
    return fetch(this.baseURL, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets a list of forks of the repository. Must be run asynchronously.
   */
  get forks () {
    return fetch(`${this.baseURL}/forks`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets a list of assignees of the repository. Must be run asynchronously.
   */
  get assignees () {
    return fetch(`${this.baseURL}/assignees`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets a blob from the repository. Must be run asynchronously.
   * @function
   * @param {string} sha The SHA hash of the blob
   * @example
   * await client.repos('haydennyyy/node-ghapi').getBlob('09a899b58254f1bf1f215c7cec348bb5b64af57b');
   */
  getBlob (sha) {
    return fetch(`${this.baseURL}/git/blobs/${sha}`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(blob => blob.json());
  }

  /**
   * Gets a list of branches of the repository. Must be run asynchronously.
   */
  get branches () {
    return fetch(`${this.baseURL}/branches`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets a list of comments of the repository. Must be run asynchronously.
   */
  get comments () {
    return fetch(`${this.baseURL}/comments`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets a list of topics of the repository. Must be run asynchronously.
   */
  get topics () {
    return fetch(`${this.baseURL}/topics`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets a list of languages of the repository. Must be run asynchronously.
   */
  get languages () {
    return fetch(`${this.baseURL}/languages`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets a list of teams of the repository. Must be run asynchronously.
   */
  get teams () {
    return fetch(`${this.baseURL}/teams`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets a list of tags of the repository. Must be run asynchronously.
   */
  get tags () {
    return fetch(`${this.baseURL}/tags`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets archive of the repository , format and branch. Must be run asynchronously.
   * @function
   * @param {Object} [options] The options for the request.
   * @param {String} [options.format='tarball'] The format for the request. Can be 'tarball' or 'zipball'.
   * @param {String} [options.branch='master'] The branch to get the archive from.
   * @example
   * await client.repos('haydennyyy/node-ghapi').getArchive();
   * @example
   * await client.repos('haydennyyy/node-ghapi').getArchive({format: 'zipball'});
   * @example
   * await client.repos('haydennyyy/node-ghapi').getArchive({format: 'zipball', branch: 'somebranch'});
   * @example
   * await client.repos('haydennyyy/node-ghapi').getArchive({branch: 'somebranch'});
   * @returns {Promise} The promise from the request. It will be either a stream or an object, depending on whether or not the archive is found.
   */
  getArchive (options){
    //Apply defaults if option not specified
    format = (options.format || `tarball`).toLowerCase();
    branch = (options.branch || `master`).toLowerCase();

    if (format!=`tarball` && format!=`zipball`){
      throw new Error('Specified format must be "tarball" or "zipball".');
    }
    return fetch(`${this.baseURL}/archive/${format}/${branch}`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` },
      redirect: 'follow'
    });
  }

  /**
   * Gets a list of commits on the repository, based on sha/branch, file path, author, after a date, or before a date. Must be run asynchronously.
   * @function
   * @param {Object} [options] The options for the request
   * @param {String} [options.sha='master'] SHA or branch to list commits from.
   * @param {String} [options.path] Optional path to get commits from. Only commits containing this path will be returned.
   * @param {String} [options.author] Only commits by this author will be returned. Either email address or login
   * @param {String} [options.since] Get commits from after this date. ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
   * @param {String} [options.until] Get commits from before this date. ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
   * @example
   * await client.repos('haydennyyy/node-ghapi').getCommits();
   * @example
   * await client.repos('haydennyyy/node-ghapi').getCommits({sha: "Some-file-sha", author: 'some-user',since: "2017-02-23T12:33:12Z"});
   * @example
   * await client.repos('haydennyyy/node-ghapi').getCommits({author: "some-user"});
   */
  getCommits (options) {
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
    return fetch(`${this.baseURL}/commits/${sha}${parameters}`, {
      headers: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(repo => repo.json());
  }

  /**
   * Gets the contents of the repository's README.
   */
  get readme () {
    return fetch(`${this.baseURL}/readme`, {
      header: { 'User-Agent': 'node-ghapi',
        'Authentication': (this.token == null) ? '' : `token ${this.token}` }
    }).then(readme => readme.json());
  }
}

module.exports = Repo;