"use client";
import {
  Col,
  Card,
  Text,
  Flex,
  Grid,
  Bold,
  Title,
  Tracker,
  BarList,
  LineChart,
  ProgressBar,
  type Color,
} from "@tremor/react";
import React from "react";

interface Tracker {
  color: Color;
  tooltip: string;
}

const tracker_data: Tracker[] = [
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "rose", tooltip: "Downtime" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "gray", tooltip: "Maintenance" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "emerald", tooltip: "Operational" },
  { color: "yellow", tooltip: "Degraded" },
  { color: "emerald", tooltip: "Operational" },
];

const barlist_data = [
  {
    name: "Iron",
    value: 456,
  },
  {
    name: "Copper",
    value: 351,
  },
  {
    name: "Aluminium",
    value: 271,
  },
  {
    name: "ABS Plastic",
    value: 191,
  },
  {
    name: "Gold",
    value: 91,
  },
];

const chart_data = [
  { day: "Monday", "Line 1": 220, "Line 2": 200, "Line 3": 150 },
  { day: "Tuesday", "Line 1": 260, "Line 2": 190, "Line 3": 160 },
  { day: "Wednesday", "Line 1": 240, "Line 2": 210, "Line 3": 155 },
  { day: "Thursday", "Line 1": 255, "Line 2": 205, "Line 3": 150 },
  { day: "Friday", "Line 1": 245, "Line 2": 50, "Line 3": 80 },
  { day: "Saturday", "Line 1": 230, "Line 2": 50, "Line 3": 0 },
  { day: "Sunday", "Line 1": 250, "Line 2": 50, "Line 3": 0 },
];

export default function Line3() {
  return (
    <div className="mt-6 space-y-6">
      <Grid numItemsLg={2} className="gap-6">
        <Card className="flex flex-col ">
          <Title className="mb-auto">Production Target</Title>
          <Flex>
            <Text>$ 9,012 &bull; 45%</Text>
            <Text>$ 20,000</Text>
          </Flex>
          <ProgressBar value={45} color="teal" className="mt-3" />
        </Card>
        <Card>
          <div className="">
            <Title>Status</Title>
            <Text>Line 3 &bull; Live Update</Text>
            <Flex justifyContent="end" className="mt-4">
              <Text>Uptime 92%</Text>
            </Flex>
            <Tracker data={tracker_data} className="mt-2" />
          </div>
        </Card>
      </Grid>
      <Grid numItemsMd={1} numItemsLg={3} className="gap-6">
        <Col numColSpanLg={2} numColSpanMd={1}>
          <Card>
            <Title>Production History</Title>
            <LineChart
              className="mt-6"
              data={chart_data}
              index="day"
              categories={["Line 3"]}
              colors={["emerald", "gray"]}
              yAxisWidth={40}
            />
          </Card>
        </Col>
        <Card>
          <Title>Raw Materials</Title>
          <Flex className="mt-4">
            <Text>
              <Bold>Materials</Bold>
            </Text>
            <Text>
              <Bold>Volume (T)</Bold>
            </Text>
          </Flex>
          <BarList data={barlist_data} className="mt-2" />
        </Card>
      </Grid>
    </div>
  );
}
