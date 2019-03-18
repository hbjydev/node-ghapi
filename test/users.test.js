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

const { expect } = require( 'chai' );
const GitHubAPIClient = require('../dist').GitHubAPIClient;

const client = new GitHubAPIClient(process.env.GITHUB_API_TOKEN);

describe('Users', () => {
  let user = client.users.get('haydennyyy');
  user.init();
  
  it('.raw should return JSON from the API.', async () => {
    let raw = await user.raw;
    expect(raw).to.be.an('object');
  });
  
  it('.followers should return an array from the API.', async () => {
    let followers = await user.getFollowers();
    expect(followers).to.be.an('array');
  });
});