"use client";

import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Text,
  Title,
} from "@tremor/react";

import Overview from "@/components/panels/overview";
import Line1 from "@/components/panels/line-1";
import Line2 from "@/components/panels/line-2";
import Line3 from "@/components/panels/line-3";

export default function DashboardExample() {
  return (
    <main className="p-4 lg:p-12">
      <Title>Production Dashboard</Title>
      <Text>Realtime factory status</Text>

      <TabGroup className="mt-6">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Line 1</Tab>
          <Tab>Line 2</Tab>
          <Tab>Line 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel key={"Overview"}>
            <Overview />
          </TabPanel>
          <TabPanel key={"Line 1"}>
            <Line1 />
          </TabPanel>
          <TabPanel key={"Line 2"}>
            <Line2 />
          </TabPanel>
          <TabPanel key={"Line 3"}>
            <Line3 />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </main>
  );
}
