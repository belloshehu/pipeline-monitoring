import { ReactNode, createContext, useContext, useState } from "react";
import { AppContextType } from "../types";

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <AppContext.Provider
      value={{
        showSidebar,
        setShowSidebar,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
