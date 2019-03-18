# Getting Started

## Users
```typescript
import { User } from 'node-ghapi';

// Get the user with the username 'haydennyyy'
const user = new User('haydennyyy');

// Get the raw JSON back from GitHub
let rawJSON = user.raw;

// Get the user's avatar
let avatar = rawJSON.avatar_url;

console.log(rawJSON);
```