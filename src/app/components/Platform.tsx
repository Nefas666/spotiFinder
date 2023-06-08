import { Card, Title, DonutChart } from "@tremor/react";
import React from "react";

const genres = [
  {
    index:"001",
    name: "Blues",
    sales: 9800,
  },
  {
    index:"001",
    name: "Jazz",
    sales: 4567,
  },
  {
    index:"001",
    name: "Country",
    sales: 3908,
  },
  {
    index:"001",
    name: "Metal",
    sales: 2400,
  },
  {
    index:"001",
    name: "Rock",
    sales: 1908,
  },
  {
    index:"001",
    name: "Indie",
    sales: 1398,
  },
];

function Platform() {
  return (
    <div className="">
      <Card className="max-w-s mt-6 bg-slate-800">
        <Title>Favorite Genres overall</Title>
        <DonutChart
          data={genres}
          category="sales"
          key={"index"}
          variant="donut"
          colors={["blue", "rose", "violet", "indigo", "cyan", "emerald"]}
        />
      </Card>
    </div>
  );
}
export default Platform;