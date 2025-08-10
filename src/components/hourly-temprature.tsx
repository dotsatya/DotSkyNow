import type { ForecastData } from "@/api/types";
import React from "react";

interface HourlyTempretureProps {
  data: ForecastData;
}
const HourlyTempreture = ({ data }: HourlyTempretureProps) => {
  return <div>HourlyTemp</div>;
};

export default HourlyTempreture;
