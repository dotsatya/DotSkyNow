import type { ForecastData } from "@/api/types";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowDown, ArrowUp, Droplet, Wind } from "lucide-react";

interface WeatherForecastProps {
  data: ForecastData;
}

interface DailyForecast {
  date: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  wind: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
}

const WeatherForecast = ({ data }: WeatherForecastProps) => {
  const dailyForecasts = data.list.reduce((acc, forecast) => {
    const date = format(new Date(forecast.dt * 1000), "yyyy-MM-dd");
    if (!acc[date]) {
      acc[date] = {
        temp_min: forecast.main.temp_min,
        temp_max: forecast.main.temp_max,
        humidity: forecast.main.humidity,
        wind: forecast.wind.speed,
        weather: forecast.weather[0],
        date: forecast.dt,
      };
    } else {
      acc[date].temp_min = Math.min(acc[date].temp_min, forecast.main.temp_min);
      acc[date].temp_max = Math.max(acc[date].temp_max, forecast.main.temp_max);
      acc[date].humidity = Math.max(acc[date].humidity, forecast.main.humidity);
    }
    return acc;
  }, {} as Record<string, DailyForecast>);
  // console.log(dailyForecasts);
  const nextDays = Object.values(dailyForecasts).slice(0, 6);

  const formateTemp = (temp: number) => Math.round(temp);

  return (
    <Card>
      <CardHeader>
        <CardTitle>5-Day Weather Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {nextDays.map((day) => {
            return (
              <div
                key={day.date}
                className="grid grid-cols-3 items-center gap-4 rounded-lg border p-4"
              >
                <div>
                  <p className="font-medium">
                    {format(new Date(day.date * 1000), "EEE, MMM d")}
                  </p>
                  <p className="text-muted-foreground text-sm capitalize">
                    {day.weather.description}
                  </p>
                </div>

                <div className="flex justify-center gap-4">
                  <span className="flex items-center gap-1 text-blue-500 pl-0 pr-2">
                    <ArrowDown className="w-4 h-4" />{" "}
                    {formateTemp(day.temp_min)}°
                  </span>
                  <span className="flex items-center gap-1 text-red-500">
                    <ArrowUp className="w-4 h-4" /> {formateTemp(day.temp_max)}°
                  </span>
                </div>

                <div className="flex justify-end gap-4">
                  <span className="flex items-center gap-1">
                    <Droplet className="w-4 h-4 text-blue-500" />{" "}
                    {day.humidity}%
                  </span>
                  <span className="flex items-center gap-1 ">
                    <Wind className="w-4 h-4 text-green-500" /> {day.wind} km/h
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;
