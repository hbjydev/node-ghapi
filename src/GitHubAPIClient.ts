import Users from './Users';

/**
 * A GitHub API client
 * @class GitHubAPIClient
 */
class GitHubAPIClient {
  public users: Users;

  /**
   * Creates an instance of GitHubAPIClient.
   * @param {string} token
   * @memberof GitHubAPIClient
   */
  constructor(token?: string) {
    /**
     * An instance of the Users selector that allows you to find, get and create users.
     * @public
     * @type {Users}
     */
    this.users = new Users(token);
  }
}

export default GitHubAPIClient;
