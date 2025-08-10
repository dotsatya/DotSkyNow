import type { ForecastData } from "@/api/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ResponsiveContainer,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { format } from "date-fns";

interface HourlyTempretureProps {
  data: ForecastData;
}
const HourlyTempreture = ({ data }: HourlyTempretureProps) => {
  const chartData = data.list.slice(0, 8).map((item) => ({
    time: format(new Date(item.dt * 1000), "ha"),
    temp: Math.round(item.main.temp), //item.main.temp,
    feels_like: Math.round(item.main.feels_like), //item.main.feels_like,
  }));

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>Today's Hourly Tempreture</CardTitle>
      </CardHeader>
      {/* <CardContent> */}

        <div className="h-[160px] w-full pr-8">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart data={chartData}>
              <XAxis
                dataKey="time"
                // stroke="#8884d8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                // stroke="#8884d8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                // tickFormatter={(value) => `${value}°`}
                tick={false} // hides the text labels
              domain={['dataMin - 2', 'dataMax + 1']} 
              />

              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm ">
                        <div className="flex flex-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-[0.7rem] uppercase text-muted-foreground">
                              Temprature{" "}
                            </span>
                            <span className="font-bold">
                              {payload[0].value}°{" "}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.7rem] uppercase text-muted-foreground">
                              {" "}
                              Feels Like{" "}
                            </span>
                            <span className="font-bold">
                              {payload[1].value}°
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#2563eb"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="feels_like"
                stroke="#64748b"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      {/* </CardContent> */}
    </Card>
  );
};

export default HourlyTempreture;
