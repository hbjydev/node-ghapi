import User from './struct/User';

enum ExpressionTypes {
  'SSH' = 'ssh',
  'URL' = 'url',
}

/**
 * A GitHub API client
 * @class GitHubAPIClient
 */
export class Client {
  /**
   * Creates an instance of GitHubAPIClient.
   * @param {string} token
   * @memberof GitHubAPIClient
   */
  constructor(private token?: string) {}

  public getUser(username: string): User {
    return new User(username, this.token);
  }
}

export function formatExpression(expression: string, type: ExpressionTypes): string {
  if (type === ExpressionTypes.SSH) {
    return `git@github.com:${expression}`;
  } else if (type === ExpressionTypes.URL) {
    return `https://github.com/${expression}`;
  } else {
    return expression;
  }
}
