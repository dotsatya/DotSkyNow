import CurrentWeather from "@/components/CurrentWeather";
import HourlyTempreture from "@/components/hourly-temprature";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForecast from "@/components/WeatherForecast";
import { useGeolocation } from "@/hooks/use-geolocation";
import {
  useForecastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    isLoading: locationLoading,
    getLocation,
  } = useGeolocation();
  console.log({ coordinates, locationError, locationLoading });

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);

  console.log(weatherQuery.data);

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };

  if (locationLoading) {
    return <WeatherSkeleton />;
  }

  if (locationError) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="w-4 h-4" />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="w-4 h-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please enable location to see your local weather</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="w-4 h-4" />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  const locationName = locationQuery.data?.[0];

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again ...</p>
          <Button onClick={handleRefresh} variant={"outline"} className="w-fit">
            <RefreshCw className="w-4 h-4" />
            Retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="space-y-4 pt-3">
      {/* favoritecitys? */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My location </h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCw
            className={`w-4 h-4 ${
              weatherQuery.isFetching ? "animate-spin" : ""
            }`}
          />
        </Button>
      </div>
      
      <div className="grid gap-6">
        {/* CurrentWeather & HourlyTempreture */}
        <div className="flex flex-col lg:flex-row gap-6">
          <CurrentWeather
            data={weatherQuery.data}
            locationName={locationName}
          />

          <HourlyTempreture data={forecastQuery.data} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* Weather Details */}
          <WeatherDetails data={weatherQuery.data} />
          <WeatherForecast data={forecastQuery.data} />
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
