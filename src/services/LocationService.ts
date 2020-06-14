import * as Location from 'expo-location';

/** A service for managing a user. */
export type LocationService = {
  /**
   * gets location of user
   */
  getLocation: () => Promise<{ lat: number; long: number }>;
};

/**
 *  A `Management Service` backed by Auth0
 *  see: https://auth0.com/docs/api/management/v2
 */
export const ExpoLocationService: LocationService = {
  getLocation: async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('Permission to access location was denied');
    }

    const location = await Location.getCurrentPositionAsync({});
    return {
      lat: location.coords.latitude,
      long: location.coords.longitude,
    };
  },
};
