import User from './struct/User';

/**
 * Users selector
 * @class
 */
class Users {
  private token: string;

  /**
   * Creates an instance of Users.
   * @param {string} token
   * @memberof Users
   */
  constructor(token: string) {

    /**
     * The GitHub token to authenticate requests with
     * @private
     * @type {string}
     */
    this.token = token;
  }

  public get(username: string): User {
    return new User(username, this.token);
  }
}

export default Users;
