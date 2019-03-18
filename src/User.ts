import * as nf from 'node-fetch';
import APIObject from './APIObject';

/**
 * A user from the GitHub API.
 * @class User
 * @public
 * @extends {APIObject}
 */
class User extends APIObject {
  public username: string;

  /**
   * Creates an instance of User.
   * @param {string} username The username to get information for.
   * @param {string} token The token to authenticate on
   * @memberof User
   */
  constructor( username: string, token: string ) {
    super(`https://api.github.com/users`, { path: username, auth: token } );
    this.username = username;
  }

  /**
   * Gets the contents of user.followers_url
   * @readonly
   * @type {Promise<Object>}
   * @memberof User
   */
  get followers(): Promise<object> {
    return this.endpoint('followers');
  }

  /**
   * Gets the contents of user.following_url
   * @readonly
   * @type {Promise<Object>}
   * @memberof User
   */
  get following(): Promise<object> {
    return this.endpoint('following');
  }

}

export default User;
