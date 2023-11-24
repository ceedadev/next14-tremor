"use client";
import {
  Card,
  Grid,
  Text,
  Title,
  Metric,
  Subtitle,
  LineChart,
} from "@tremor/react";
import React from "react";

const dummy_chart_data = [
  { day: "Monday", "Line 1": 200, "Line 2": 10, "Line 3": 150 },
  { day: "Tuesday", "Line 1": 220, "Line 2": 30, "Line 3": 160 },
  { day: "Wednesday", "Line 1": 240, "Line 2": 50, "Line 3": 155 },
  { day: "Thursday", "Line 1": 200, "Line 2": 80, "Line 3": 150 },
  { day: "Friday", "Line 1": 220, "Line 2": 100, "Line 3": 145 },
  { day: "Saturday", "Line 1": 230, "Line 2": 150, "Line 3": 140 },
  { day: "Sunday", "Line 1": 190, "Line 2": 170, "Line 3": 130 },
  { day: "Monday", "Line 1": 220, "Line 2": 200, "Line 3": 150 },
  { day: "Tuesday", "Line 1": 260, "Line 2": 190, "Line 3": 160 },
  { day: "Wednesday", "Line 1": 240, "Line 2": 210, "Line 3": 155 },
  { day: "Thursday", "Line 1": 255, "Line 2": 205, "Line 3": 150 },
  { day: "Friday", "Line 1": 245, "Line 2": 50, "Line 3": 80 },
  { day: "Saturday", "Line 1": 230, "Line 2": 50, "Line 3": 0 },
  { day: "Sunday", "Line 1": 250, "Line 2": 50, "Line 3": 0 },
];

export default function Overview() {
  return (
    <div>
      <Grid numItemsMd={2} numItemsLg={3} className="gap-6 mt-6">
        <Card decoration={"left"} decorationColor="green">
          <div className="">
            <Text className="mb-2">Line 1</Text>
            <Metric>
              250 <span className="text-sm">Unit/H</span>
            </Metric>
            <Subtitle>Operational</Subtitle>
          </div>
        </Card>
        <Card decoration={"left"} decorationColor="orange">
          <Text className="mb-2">Line 2</Text>
          <Metric>Idle</Metric>
          <Subtitle>Awaiting Raw Material</Subtitle>
        </Card>
        <Card decoration="left" decorationColor="red">
          <Text className="mb-2">Line 3</Text>
          <Metric>Off</Metric>
          <Subtitle>Maintenance</Subtitle>
        </Card>
      </Grid>
      <Card className="mt-6">
        <Title>Overall Production Chart</Title>
        <LineChart
          className="mt-6"
          data={dummy_chart_data}
          index="day"
          categories={["Line 1", "Line 2", "Line 3"]}
          colors={["amber", "emerald", "fuchsia"]}
          yAxisWidth={40}
        />
      </Card>
    </div>
  );
}
