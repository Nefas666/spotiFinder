import { Card, Title, AreaChart } from "@tremor/react";
import React from "react";

const chartdata = [
  {
    index:"001",
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    index:"002",
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    index:"003",
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    index:"004",
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    index:"005",
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    index:"006",
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];

const dataFormatter = (number:number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const Revenue = () => (
  <Card className="h-80">
    <Title>Listenings over time</Title>
    <AreaChart
      data={chartdata}
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      className="h-72 mt-4"
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
      index={"index"}
    />
  </Card>
);
export default Revenue;