const User = require('./user'),
  Repo = require('./repo');

/**
 * The client connection
 * @class
 */
class GitHubAPIClient { 
  /**
   * @param {string} [token] Your GitHub OAuth API token. If unset, the client will only access public information.
   */
  constructor(token) {
    this.token = token || null;
  }

  /**
   * Performs user-related interactions
   * @function
   * @param {string} username The username of the user to look up.
   * @example
   * await client.users('haydennyyy').raw;
   * @returns {User} A user class
   */
  users(username) {
    return new User(username, this.token);
  }                                                                                                    
  /**
   * Performs repository-related interactions
   * @function
   * @param {string} expression The expression, formatted like owner/repo
   * @example
   * await client.repos('haydennyyy/node-ghapi')
   * @returns {Repo} A repository class
   */
  repos(expression) {
    return new Repo(expression, this.token);
  }
}

module.exports = GitHubAPIClient;