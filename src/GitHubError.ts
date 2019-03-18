/**
 * A GitHub API Error
 * @class GitHubError
 * @extends {Error}
 * @public
 */
export default class GitHubError extends Error {
  /**
   * Creates an instance of GitHubError.
   * @param {*} args
   * @memberof GitHubError
   */
  constructor(...args: any) {
    super(...args);
  }
}
