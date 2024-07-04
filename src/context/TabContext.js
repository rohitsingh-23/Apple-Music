import { createContext, useState } from "react";

export const TabContext = createContext();


export const TabContextProvider = ({ children }) => {
    const [selectedTab, setSelectedTab] = useState("browse");

    const handleTabChange = (tab) => {
        setSelectedTab(tab)
    }

  return (
    <TabContext.Provider value={{ selectedTab, handleTabChange }}>
      {children}
    </TabContext.Provider>
  );
};