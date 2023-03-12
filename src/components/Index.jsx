import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Projects from "./Projects";
import Skills from "./Skills";
export default function Index() {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <Tabs
      selectedIndex={tabIndex}
      onSelect={tabIndex => setTabIndex(tabIndex)}
    >
      <TabList>
        <Tab>Projects</Tab>
        <Tab>Techs</Tab>
      </TabList>
      <TabPanel><Projects/></TabPanel>
      <TabPanel><Skills/></TabPanel>
    </Tabs>

  );
}