import { createContext, useContext, useState } from "react";


interface IActiveWindowContext {
  activeWindow: { finder: boolean; neovim: boolean; };
  handleSetActiveWindow: (window: "finder" | "neovim") => void;
  handleSetInActiveWindow: (window: "finder" | "neovim") => void;
}


const ActiveWindowContext = createContext<IActiveWindowContext | undefined>(undefined);

export const ActiveWindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeWindow, setActiveWindow] = useState<{ finder: boolean; neovim: boolean }>({
    finder: false,
    neovim: false,
  });

  const handleSetActiveWindow = (window: "finder" | "neovim") => {
    if (window === "finder") setActiveWindow({ ...activeWindow, finder: true });
    else if (window === "neovim") setActiveWindow({ ...activeWindow, neovim: true });
  }

  const handleSetInActiveWindow = (window: "finder" | "neovim") => {
    if (window === "finder") setActiveWindow({ ...activeWindow, finder: false });
    else if (window === "neovim") setActiveWindow({ ...activeWindow, neovim: false });
  }


  return (
    <ActiveWindowContext.Provider value={{ activeWindow, handleSetActiveWindow, handleSetInActiveWindow }}>
      {children}
    </ActiveWindowContext.Provider>
  )
}

export const useActiveWindowContext = () => {
  const context = useContext(ActiveWindowContext);
  if (!context) throw new Error("Context not found");
  return context;
}
