import { createContext } from "react";

export let MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  let passData = "me ek data hu";

  return <MyStore.Provider value={passData}>{children}</MyStore.Provider>;
};
