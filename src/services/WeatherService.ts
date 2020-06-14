import { Weather } from '../slices/users-slice';

/** A service for getting weather forcast. */
export type WeatherService = {
  /**
   * gets authenticated user info
   */
  getWeather: (lat: number, long: number) => Promise<Weather>;
};

const baseUrl = 'http://api.openweathermap.org';
const appId = '550b592b45ec753d4c9ab10d34790e23'; // supposed to be in .env

/**
 *  A `Weather Service` backed by open-weather
 */
export const OpenWeatherService: WeatherService = {
  getWeather: async (lat, long) => {
    if (!lat || !long) {
      throw new Error('Get location first!');
    }

    const url = `${baseUrl}/data/2.5/weather?appid=${appId}&lat=${lat}&lon=${long}&cnt=1`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    return {
      temp: result.main.temp,
      desc: result.weather[0].description,
      main: result.weather[0].main,
      pressure: result.main.pressure,
      humidity: result.main.humidity,
    };
  },
};
