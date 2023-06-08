import { Card, Title, AreaChart } from "@tremor/react";
import React from "react";

const chartdata = [
  {
    index:"001",
    date: "Jan 22",
    SemiAnalysis: 2890,
    "Mobile App": 2338,
    "Web App": 1886,
  },
  {
    index:"002",
    date: "Feb 22",
    SemiAnalysis: 2756,
    "Mobile App": 2103,
    "Web App": 126,
  },
  {
    index:"003",
    date: "Mar 22",
    SemiAnalysis: 3322,
    "Mobile App": 2194,
    "Web App": 226,
  },
  {
    index:"004",
    date: "Apr 22",
    SemiAnalysis: 3470,
    "Mobile App": 2108,
    "Web App": 716,
  },
  {
    index:"005",
    date: "May 22",
    SemiAnalysis: 3475,
    "Mobile App": 1812,
    "Web App": 1012,
  },
  {
    index:"006",
    date: "Jun 22",
    SemiAnalysis: 3129,
    "Mobile App": 1726,
    "Web App": 1026,
  },
];

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