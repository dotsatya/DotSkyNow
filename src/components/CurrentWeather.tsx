import type { GeocodingResponse, WeatherData } from "@/api/types";
import { Card, CardContent } from "./ui/card";
import { ArrowDown, ArrowUp, Droplets, Wind } from "lucide-react";

interface CurrentWeatherProps {
  data: WeatherData;
  locationName?: GeocodingResponse;
}

const CurrentWeather = ({ data, locationName }: CurrentWeatherProps) => {
  const {
    weather: [currentWeather],
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    wind: { speed, deg },
  } = data;

  const formateTemp = (temp: number) => {
    return Math.round(temp);
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <h2 className="text-2xl font-bold leading-none tracking-tight">
                  {locationName?.name}
                </h2>
                {locationName?.state && (
                  <span className=" text-muted-foreground">
                    , {locationName.state}
                  </span>
                )}
              </div>
              <p className="text-muted-foreground">{locationName?.country}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-6xl font-bold">{formateTemp(temp)}°</p>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Feels like {formateTemp(feels_like)}°
                </p>
                <div className="flex text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-1 text-blue-500 pl-0 pr-2">
                    <ArrowDown className="w-3 h-3" /> {formateTemp(temp_min)}°
                  </span>
                  <span className="flex items-center gap-1 text-red-500">
                    <ArrowUp className="w-3 h-3" /> {formateTemp(temp_max)}°
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2.5">
                <Droplets className="w-4 h-4 text-blue-500" />
                <div className=" space-y-0.5">
                  <p className="text-sm font-medium ">Humidity :</p>
                  <p className="text-sm font-medium text-muted-foreground ">
                    {humidity}%
                  </p>
                </div>
              </div>

              {/* same thing for wind */}

              <div className="flex items-center gap-2.5">
                <Wind className="w-4 h-4 text-blue-500" />
                <div className=" space-y-0.5">
                  <p className="text-sm font-medium ">Pressure :</p>
                  <p className="text-sm font-medium text-muted-foreground">
                    {pressure} hPa
                  </p>
                </div>
              </div>
            </div>
          </div>

            <div className="flex flex-col items-center justify-center">
          <div className="relative flex aspect-square w-full max-w-[200px] items-center justify-center">
              <img
                src={`https://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`}
                alt={currentWeather.description}
                className="h-full w-full object-contain"
              />
              <div className="absolute bottom-2 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  {currentWeather.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CurrentWeather;
