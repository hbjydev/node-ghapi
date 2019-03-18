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
  public raw: object;

  /**
   * Creates an instance of APIObject.
   * @param {string} baseURL The base URL
   * @param {object} config The configuration for the API object
   * @param {string} config.path The path for requests. See example for more info.
   * @param {string} config.auth The authentication token to use when sending requests.
   * @memberof APIObject
   * @example
   * new APIObject( 'https://api.github.com/users', { path: 'haydennyyy' } );
   * // https://api.github.com/users/haydennyyy
   */
  constructor( baseURL: string, config: IGitHubAPIConfig ) {
    /**
     * The base API URL (with no trailing slash)
     * @public
     * @type {string}
     */
    this.base        = baseURL;

    /**
     * The APIObject configuration object
     * @public
     * @type {string}
     */
    this.conf        = config;

    /**
     * The full url with this.conf.path included.
     * @public
     * @type {string}
     */
    this.url         = `${this.base}/${this.conf.path}`;

    /**
     * The HTTP options forwarded to node-fetch
     * @public
     * @type {object}
     */
    this.httpOptions = {
      headers: {
        Authentication: 'Bearer ' + this.conf.auth,
      },
    };

    /**
     * The raw JSON returned from GitHub
     * @public
     * @type {object}
     */
    this.raw = {};
  }

  /**
   * Makes a request to the GitHub API
   *
   * @param {string} path The URI to request on
   * @returns {Promise<Object>}
   * @memberof APIObject
   */
  public async endpoint(path: string) {
    const res = await fetch(`${this.url}/${path}`, this.httpOptions)
      .then((result: any) => result.json());

    if (res.message) { throw new GitHubError(res.message); }

    return res;
  }

  /**
   * Gets the raw JSON from the API.
   * @type {Promise<JSON>}
   */
  public init() {
    fetch(this.url, this.httpOptions)
      .then((res) => res.json())
      .then((data) => this.raw = data)
      .catch((err) => {
        throw new GitHubError(err);
      });
  }

}

export default APIObject;
