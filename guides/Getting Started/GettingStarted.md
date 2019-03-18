# Getting Started

## Users
```typescript
import { GitHubAPIClient } from 'node-ghapi';

// Initialise a client
const client = new GitHubAPIClient('api-key');

// Get the user
const user = client.users.get('haydennyyy');

// Initialize the user before accessing any of its data
user.init();

// Get the raw JSON back from GitHub
let rawJSON = user.raw;

// Get the user's avatar
let avatar = rawJSON.avatar_url;

// Get the user's list of followers
let followers = user.getFollowers();

console.log(rawJSON);
```