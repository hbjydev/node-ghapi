/**
 * A GitHub API Error
 * @class GitHubError
 * @extends {Error}
 * @public
 */
class GitHubError extends Error {
  /**
   * Creates an instance of GitHubError.
   * @param {*} args
   * @memberof GitHubError
   */
  constructor( ...args ) {
    super( ...args );
  }
}

module.exports = GitHubError;