import { Environment } from '../Environment';

const baseUrl = 'https://dev-cb7dowmt.auth0.com';

/** A service for managing a user. */
export type ManagementService = {
  /**
   * gets authenticated user info
   */
  getUserInfo: <T>() => Promise<T>;
};

/**
 *  A `Management Service` backed by Auth0
 *  see: https://auth0.com/docs/api/management/v2
 */
export const Auth0ManagementService: ManagementService = {
  getUserInfo: async () => {
    const { services } = Environment.current();
    const { storage } = services;

    const token = await storage.getItem('access-token');
    const response = await fetch(`${baseUrl}/userinfo`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return result;
  },
};
