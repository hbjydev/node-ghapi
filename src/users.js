/**
 * Copyright (C) 2019 Hayden Young
 * 
 * This file is part of node-ghapi.
 * 
 * node-ghapi is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * node-ghapi is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with node-ghapi.  If not, see <http://www.gnu.org/licenses/>.
 */

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