import type { Coordinates } from "@/api/types";
import { weatherAPI } from "@/api/weather";
import { useQuery } from "@tanstack/react-query";

export const WEATHER_KEYS = {
  weather: (Coords: Coordinates) => ["weather", Coords] as const,
  forecast: (Coords: Coordinates) => ["forecast", Coords] as const,
  location: (Coords: Coordinates) => ["location", Coords] as const,
} as const;

export function useWeatherQuery(Coordinates: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.weather(Coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () =>
      Coordinates ? weatherAPI.getCurrentWeather(Coordinates) : null,
    enabled: !!Coordinates,
  });
}

export function useForecastQuery(Coordinates: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.forecast(Coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () =>
      Coordinates ? weatherAPI.getForecast(Coordinates) : null,
    enabled: !!Coordinates,
  });
}

export function useReverseGeocodeQuery(Coordinates: Coordinates | null) {
  return useQuery({
    queryKey: WEATHER_KEYS.location(Coordinates ?? { lat: 0, lon: 0 }),
    queryFn: () =>
      Coordinates ? weatherAPI.reverseGeocode(Coordinates) : null,
    enabled: !!Coordinates,
  });
}

