import Auth0 from 'react-native-auth0';

// should be stored inside .env
const auth0 = new Auth0({
  domain: 'dev-cb7dowmt.auth0.com',
  clientId: 'baD9C2tqf6HgvXnvUn4C2PYWNWRrS4Mz',
});

/** A service for authenticating a user. */
export type AuthenticationService = {
  /**
   * logs in the user with github credentials
   * opens an auth0 web page
   */
  loginWithGithub: () => Promise<string>;

  /**
   * logs out the user from github
   * opens an auth0 web page
   */
  logoutFromGithub: () => Promise<void>;
};

/** An `AuthenticationService` backed by Auth0. */
export const Auth0AuthenticationService: AuthenticationService = {
  loginWithGithub: async () => {
    const credentials = await auth0.webAuth.authorize({
      scope: 'openid profile email',
    });
    return credentials.accessToken;
  },
  logoutFromGithub: async () => {
    await auth0.webAuth.clearSession({ federated: false });
  },
};
