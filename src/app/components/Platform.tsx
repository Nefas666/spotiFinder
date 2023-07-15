import { Card, Title, DonutChart } from "@tremor/react";
import genresData from "../data/genres.json";

import React from "react";

const genres = genresData;

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