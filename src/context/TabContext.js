import { createContext, useState } from "react";
import { logEvent } from "../ga";

export const TabContext = createContext();

export const TabContextProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState("browse");

  const handleTabChange = (tab) => {
    logEvent("User", "Clicked Side Nav Bar", tab);
    setSelectedTab(tab);
  };

  return (
    <TabContext.Provider value={{ selectedTab, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
};
