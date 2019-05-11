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
  /*
   * The user's username
   */
  public login: string;

  /*
   * The user's ID
   */
  public id: number;

  /*
   * The user's Node ID
   */
  public nodeId: string;

  /*
   * The user's avatar URL
   */
  public avatarUrl: string;

  /*
   * The user's Gravatar ID
   */
  public gravatarId: string;

  /*
   * The user's API URL
   */
  public url: string;

  /*
  * The user's profile URL
  */
  public htmlUrl: string;

  /*
   * The type of account the user has (org or user)
   */
  public type: string;

  /*
   * Whether or not the user is an admin
   */
  public siteAdmin: boolean;

  /*
   * The user's public name
   */
  public name: string;

  /*
   * The user's listed company
   */
  public company: string;

  /*
   * The user's listed blog
   */
  public blog: string;

  /*
   * The user's listed location
   */
  public location: string;

  /*
   * The user's public email
   */
  public email: string;

  /*
   * Whether or not the user has marked themselves as hireable or not
   */
  public hireable: boolean;

  /*
    * The user's biography
    */
  public bio: string;

  /*
   * The number of public repositories the user has
   */
  public publicRepos: number;

  /*
   * The number of public [Gists](https://gist.github.com) the user has
   */
  public publicGists: number;

  /*
   * The amount of followers the user has
   */
  public followers: number;

  /*
   * The number of people the user is following
   */
  public following: number;

  /*
   * Timestamp for when the user was created
   */
  public createdAt: string;

  /*
   * Timestamp for when the user was last updated
   */
  public updatedAt: string;

  public raw: IUserResponse;
 
  /*
   * The user's followers URL
   */
  private followersUrl: string;

  /*
   * The user's following URL
   */
  private followingUrl: string;

  /*
   * The user's Gists URL
   */
  private gistsUrl: string;

  /*
   * The user's starred URL
   */
  private starredUrl: string;

  /*
   * The user's subscriptions URL
   */
  private subscriptionsUrl: string;

  /*
   * The user's organizations URL
   */
  private organizationsUrl: string;

  /*
   * The user's repositories URL
   */
  private reposUrl: string;

  /*
   * The user's events URL
   */
  private eventsUrl: string;

  /*
   * The user's received events URL
   */
  private receivedEventsUrl: string;


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
    this.htmlUrl = this.raw.html_url;
    this.followersUrl = this.raw.followers_url;
    this.followingUrl = this.raw.following_url;
    this.gistsUrl = this.raw.gists_url;
    this.starredUrl = this.raw.starred_url;
    this.subscriptionsUrl = this.raw.subscriptions_url;
    this.organizationsUrl = this.raw.organizations_url;
    this.reposUrl = this.raw.repos_url;
    this.eventsUrl = this.raw.events_url;
    this.receivedEventsUrl = this.raw.received_events_url;
    this.type = this.raw.type;
    this.siteAdmin = this.raw.site_admin;
    this.name = this.raw.name;
    this.company = this.raw.company;
    this.blog = this.raw.blog;
    this.location = this.raw.location;
    this.email = this.raw.email;
    this.hireable = this.raw.hireable;
    this.bio = this.raw.bio;
    this.publicRepos = this.raw.public_repos;
    this.publicGists = this.raw.public_gists;
    this.followers = this.raw.followers;
    this.following = this.raw.following;
    this.createdAt = this.raw.created_at;
    this.updatedAt = this.raw.updated_at;
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
