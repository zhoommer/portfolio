import { createContext, useContext, useState } from "react";


interface IActiveWindowContext {
  windowFinder: boolean;
  windowNeoVim: boolean;
  handleSetActiveWindow: () => void;
  handleSetInactiveWindow: () => void;
  handleSetActiveWindowNeoVim: () => void;
  handleSetInactiveWindowNeoVim: () => void;
}


const ActiveWindowContext = createContext<IActiveWindowContext | undefined>(undefined);

export const ActiveWindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [windowFinder, setWindowFinder] = useState<boolean>(false);
  const [windowNeoVim, setWindowNeoVim] = useState<boolean>(false);

  const handleSetActiveWindow = () => setWindowFinder(true);
  const handleSetInactiveWindow = () => setWindowFinder(false);

  const handleSetActiveWindowNeoVim = () => setWindowNeoVim(true);
  const handleSetInactiveWindowNeoVim = () => setWindowNeoVim(false);


  return (
    <ActiveWindowContext.Provider value={{ windowFinder, windowNeoVim, handleSetActiveWindow, handleSetInactiveWindow, handleSetActiveWindowNeoVim, handleSetInactiveWindowNeoVim }}>
      {children}
    </ActiveWindowContext.Provider>
  )
}

export const useActiveWindowContext = () => {
  const context = useContext(ActiveWindowContext);
  if (!context) throw new Error("Context not found");
  return context;
}
