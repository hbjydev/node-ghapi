import * as nf from 'node-fetch';
import GitHubError from './GitHubError';

const fetch = nf.default;

interface IGitHubAPIConfig {
  path: string;
  auth: string;
}

/**
 * An API object
 * @class APIObject
 * @public
 */
class APIObject {
  public base: string;
  public conf: IGitHubAPIConfig;
  public url: string;
  public httpOptions: object;

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
  constructor( baseURL: string, config: IGitHubAPIConfig ) {
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
        Authentication: 'Bearer ' + this.conf.auth,
      },
    };
  }

  /**
   * Makes a request to the GitHub API
   *
   * @param {*} uri The URI to request on
   * @returns {Promise<Object>}
   * @memberof APIObject
   */
  public async endpoint(path: string) {
    const res = await fetch(`${this.url}/${path}`, this.httpOptions)
      .then((result) => result.json());

    if (res.message) { throw new GitHubError(res.message); }

    return res;
  }

  /**
   * Gets the raw JSON from the API.
   * @type {Promise<JSON>}
   */
  get raw() {
    return fetch(this.url, this.httpOptions)
      .then((result) => result.json());
  }

}

export default APIObject;
