const fetch = require('node-fetch');

/**
 * User interactivity.
 * @class
 */
class User {
  /**
   * @param {string} username The username of the user to get information for.
   */
  constructor(username) {
    this.baseURL = 'https://api.github.com/users/' + username;
  }

  /**
   * Returns the raw JSON from the GitHub API query. Must be run asynchronously.
   */
  get raw() {
    return fetch(this.baseURL, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(user => user.json());
  }
  
  /**
   * Gets a user's repositories. Must be run asynchronously.
   */
  get repos() {
    return fetch(this.baseURL + '/repos', {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(repos => repos.json())
  }
  
  /**
   * Gets a user's gists. Must be run asynchronously.
   */
  get gists() {
    return fetch(`${this.baseURL}/gists`, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(gists => gists.json())
  }
  
  /**
   * Gets a user's followers by username. Must be run asynchronously.
   */
  get followers() {
    return fetch(`https://api.github.com/users/${username}/followers`, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(followers => followers.json())
  }
  
  /**
   * Check if a user is following another user
   * @param {string} user The name of the user to check.
   */
  isFollowing(user) {
    return fetch(`${this.baseURL}/following/${user}`, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(r => {
      return (r.status === 204) ? true : false;
    });
  }
  
  /**
   * Gets repos someone has starred. Must be run asynchronously.
   */
  get starred () {
    return fetch(`${this.baseURL}/starred`, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(starred => starred.json())
  }
  
  /**
   * Gets repos someone has subscribed to. Must be run asynchronously.
   */
  get subscribed () {
    return fetch(`${this.baseURL}/subscriptions`, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(subbed => subbed.json())
  }
  
  /**
   * Gets organizations a user is in by username. Must be run asynchronously.
   */
  get orgs () {
    return fetch(`${this.baseURL}/orgs`, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(orgs => orgs.json())
  }
  
  /**
   * Gets events a user has caused. Must be run asynchronously.
   */
  get events () {
    return fetch(`${this.baseURL}/events`, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(events => events.json())
  }
  
  /**
   * Gets events a user has had caused to them. Must be run asynchronously.
   */
  get inboundEvents () {
    return fetch(`${this.baseURL}/received_events`, {
      headers: { 'User-Agent': 'node-ghapi' }
    }).then(events => events.json())
  }
}


module.exports = User;
