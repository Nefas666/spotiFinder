import React from "react";
import { Card, Title, AreaChart } from "@tremor/react";
import chartData from "../data/chartData.json";

const chartdata = chartData;

const dataFormatter = (number:number) => {
  return Intl.NumberFormat("us").format(number).toString();
};

const Revenue = () => (
  <Card className="bg-slate-800 mt-8">
    <Title>Listenings over time</Title>
    <AreaChart
      data={chartdata}
      categories={["Web App", "Mobile App"]}
      className="h-72 mt-4"
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
      index={"index"}
    />
  </Card>
);
export default Revenue;