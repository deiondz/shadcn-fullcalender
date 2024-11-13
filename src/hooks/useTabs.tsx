// hooks/useTabs.ts

import { useState } from "react";
import { TabTypes } from "../types/tabs"; // Adjust path as needed

export const useTabs = (initialTab: TabTypes) => {
  const [activeTab, setActiveTab] = useState<TabTypes>(initialTab);

  const toggleTab = (tab: TabTypes) => {
    setActiveTab(tab);
  };

  return { activeTab, setActiveTab: toggleTab };
};
