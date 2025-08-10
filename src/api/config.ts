export const API_CONFIG = {
  BASE_URL: "https://api.openweathermap.org/data/2.5",
  GEO: "http://api.openweathermap.org/geo/1.0",
  // API_KEY: "e1c7d6f9b3c9e1c7d6f9b3c9e1c7d6f9",
  API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
  DEFAULT_PARAMS: {
    // appid: "e1c7d6f9b3c9e1c7d6f9b3c9e1c7d6f9",
    appid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    units: "metric",
  },
};

