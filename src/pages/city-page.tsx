import CurrentWeather from "@/components/CurrentWeather";
import HourlyTempreture from "@/components/hourly-temprature";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherForecast from "@/components/WeatherForecast";
import { useForecastQuery, useWeatherQuery } from "@/hooks/use-weather";
import { useParams, useSearchParams } from "react-router-dom"


const CityPage = () => {

const [searchParams] = useSearchParams();
const parms =useParams();
const lat =parseFloat(searchParams.get("lat") || "0");
const lon = parseFloat(searchParams.get("lon") || "0");

const coordinates = { lat, lon }; 

const weatherQuery = useWeatherQuery(coordinates);
const forecastQuery = useForecastQuery(coordinates);

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Failed to fetch weather data. Please try again ...</p>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data ||!parms.cityName) {
    return <WeatherSkeleton />;
  }

  return (
    <div className="space-y-4 pt-3">
      {/* favoritecitys? */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
            {parms.cityName}, {weatherQuery.data.sys?.country}
        </h1>
   <div>
    {/* favorite button */}
   </div>
      </div>
      
      <div className="grid gap-6">
        {/* CurrentWeather & HourlyTempreture */}
        <div className="flex flex-col gap-6">
          <CurrentWeather
            data={weatherQuery.data}
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
  
  )
}

export default CityPage
