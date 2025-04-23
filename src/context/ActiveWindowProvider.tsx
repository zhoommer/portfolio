import { createContext, useContext, useState } from "react";


interface IActiveWindowContext {
  window: boolean;
  handleSetActiveWindow: () => void;
  handleSetInactiveWindow: () => void;
}


const ActiveWindowContext = createContext<IActiveWindowContext | undefined>(undefined);

export const ActiveWindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [window, setWindow] = useState<boolean>(false);

  const handleSetActiveWindow = () => setWindow(true);


  const handleSetInactiveWindow = () => setWindow(false);


  return (
    <ActiveWindowContext.Provider value={{ window, handleSetActiveWindow, handleSetInactiveWindow }}>
      {children}
    </ActiveWindowContext.Provider>
  )
}

export const useActiveWindowContext = () => {
  const context = useContext(ActiveWindowContext);
  if (!context) throw new Error("Context not found");
  return context;
}
