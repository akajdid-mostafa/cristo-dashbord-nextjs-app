"use client";
import React from "react";
import dynamic from "next/dynamic";
import { smallChartOptions, smallChartSeries } from "@/data/chartOptions";

// Dynamically import Chart only on the client side
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SmallLineChart = ({
  options = smallChartOptions,
  series = smallChartSeries,
}) => {
  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={28}
      width={"100%"}
    />
  );
};

export default SmallLineChart;
