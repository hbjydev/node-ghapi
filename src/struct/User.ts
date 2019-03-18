import APIObject from './APIObject';

interface IUserResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

/**
 * A user from the GitHub API.
 * @class User
 * @public
 * @extends {APIObject}
 */
class User extends APIObject {
  public username: string;
  public raw: IUserResponse;

  /**
   * Creates an instance of User.
   * @param {string} username The username to get information for.
   * @param {string} token The token to authenticate on
   * @memberof User
   */
  constructor(username: string, token: string) {
    super(`https://api.github.com/users`, { path: username, auth: token } );

    /**
     * The user's username
     * @public
     * @type {string}
     */
    this.username = username;
  }

  /**
   * Gets the contents of user.followers_url
   * @readonly
   * @type {Promise<Object>}
   * @memberof User
   */
  public getFollowers(): Promise<object> {
    return this.endpoint('followers');
  }

  /**
   * Gets the contents of user.following_url
   * @readonly
   * @type {Promise<Object>}
   * @memberof User
   */
  public getFollowing(): Promise<object> {
    return this.endpoint('following');
  }

}

export default User;
