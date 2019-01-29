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
const GitHubError = require( './GitHubError' );

/**
 * An API object
 * @class APIObject
 * @public
 */
class APIObject {

  /**
   * Creates an instance of APIObject.
   * @param {String} baseURL The base URL
   * @param {Object} config The configuration for the API object
   * @param {String} config.path The path for requests. See example for more info.
   * @param {String} config.auth The authentication token to use when sending requests.
   * @memberof APIObject
   * @example
   * new APIObject( 'https://api.github.com/users', { path: 'haydennyyy' } );
   * // https://api.github.com/users/haydennyyy
   */
  constructor( baseURL, config ) {
    /** 
     * The base API URL (with no trailing slash) 
     * @public
     * @type {String}
     */
    this.base        = baseURL;
    
    /**
     * The APIObject configuration object
     * @public
     * @type {String}
     */
    this.conf        = config;

    /**
     * The full url with this.conf.path included.
     * @public
     * @type {String}
     */
    this.url         = `${this.base}/${this.conf.path}`;

    /**
     * The HTTP options forwarded to node-fetch
     * @public
     * @type {Object}
     */
    this.httpOptions = {
      headers: {
        'Authentication': 'Bearer ' + this.conf.auth
      }
    }
  }

  /**
   * Makes a request to the GitHub API
   *
   * @param {*} uri The URI to request on
   * @returns {Promise<Object>}
   * @memberof APIObject
   */
  request( uri ) {
    let res = fetch( uri )
      .then( res => res.json() )
    
    if( res.message ) throw new GitHubError( res.message );

    return res;
  }

  /**
   * Gets the raw JSON from the API.
   * @type {Promise<JSON>}
   */
  get raw() {
    return this.request( this.url );
  }

}

module.exports = APIObject;