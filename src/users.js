const fetch = require( 'node-fetch' ).default;
const APIObject = require( './APIObject' );

/**
 * A user from the GitHub API.
 * @class User
 * @public
 * @extends {APIObject}
 */
class User extends APIObject {

  /**
   * Creates an instance of User.
   * @param {String} username The username to get information for.
   * @param {String} token The token to authenticate on
   * @memberof User
   */
  constructor( username, token ) {
    super( `https://api.github.com/users`, { path: username, auth: token } );
    this.username = username;
  }

  /**
   * Gets the contents of user.followers_url
   * @readonly
   * @type {Promise<Object>}
   * @memberof User
   */
  get followers() {
    return fetch( `${this.url}/followers`, this.httpOptions ).then( res => res.json() );
  }

  /**
   * Gets the contents of user.following_url
   * @readonly
   * @type {Promise<Object>}
   * @memberof User
   */
  get following() {
    return fetch( `${this.url}/following`, this.httpOptions ).then( res => res.json() );
  }

}

module.exports = User;