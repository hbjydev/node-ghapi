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
 * A user from the GitHub API. See [[IUserResponse]] for `.raw` fields.
 */
export class User extends APIObject {
  public login: string;
  public id: number;
  public nodeId: string;
  public avatarUrl: string;
  public gravatarId: string;
  public url: string;
  public htmlUrl: string;
  public followersUrl: string;
  public followingUrl: string;
  public gistsUrl: string;
  public starredUrl: string;
  public subscriptionsUrl: string;
  public organizationsUrl: string;
  public reposUrl: string;
  public eventsUrl: string;
  public receivedEventsUrl: string;
  public type: string;
  public siteAdmin: boolean;
  public name: string;
  public company: string;
  public blog: string;
  public location: string;
  public email: string;
  public hireable: boolean;
  public bio: string;
  public publicRepos: number;
  public publicGists: number;
  public followers: number;
  public following: number;
  public createdAt: string;
  public updatedAt: string;

  public raw: IUserResponse;

  /**
   * Creates an instance of User.
   * @param {string} username The username to get information for.
   * @param {string} token The token to authenticate on
   * @memberof User
   */
  constructor(username: string, token: string) {
    super(`https://api.github.com/users`, { path: username, auth: token } );

    this.login = this.raw.login;
    this.id = this.raw.id;
    this.nodeId = this.raw.node_id;
    this.avatarUrl = this.raw.avatar_url;
    this.gravatarId = this.raw.gravatar_id;
    this.url = this.raw.url;
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
