import { AuthenticationService } from './services/AuthenticationService';

type WeatherAppEnvironment = {
  /** A proxy for handling navigation. */
  navigation: {
    /** Navigates to the provided `route`, using the given `params`. */
    navigate: (route: string, params?: { [key: string]: any }) => void;
  };
  /** Currently available services. */
  services: {
    /** A service for authenticating a user. */
    authentication: AuthenticationService;
  };
};

/** This value holds the actual environment object. */
let _currentEnvironment: WeatherAppEnvironment | undefined = undefined;

/** Exposes the current `WeatherAppEnvironment` via `current()`. */
const Environment = {
  /** Returns the current environment. */
  current(): WeatherAppEnvironment {
    return { ..._currentEnvironment! };
  },

  /**
   * Sets the current environment. Call as early as possible during startup, and
   * ONLY call once.
   */
  set(environment: WeatherAppEnvironment) {
    if (_currentEnvironment === undefined) {
      _currentEnvironment = environment;
    }
  },
};

Object.freeze(Environment);
export { Environment };
