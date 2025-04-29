import { createContext, useContext, useState } from "react";


interface IActiveWindowContext {
  activeWindow: { finder: boolean; neovim: boolean; x: boolean; youtube: boolean; notes: boolean };
  handleSetActiveWindow: (window: "finder" | "neovim" | "x" | "youtube" | "notes") => void;
  handleSetInActiveWindow: (window: "finder" | "neovim" | "x" | "youtube" | "notes") => void;
}


const ActiveWindowContext = createContext<IActiveWindowContext | undefined>(undefined);

export const ActiveWindowProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeWindow, setActiveWindow] = useState<{ finder: boolean; neovim: boolean; x: boolean; youtube: boolean; notes: boolean }>({
    finder: false,
    neovim: false,
    x: false,
    youtube: false,
    notes: false,
  });

  const handleSetActiveWindow = (window: "finder" | "neovim" | "x" | "youtube" | "notes") => {
    if (window === "finder") setActiveWindow({ ...activeWindow, finder: true });
    else if (window === "neovim") setActiveWindow({ ...activeWindow, neovim: true });
    else if (window === "x") setActiveWindow({ ...activeWindow, x: true });
    else if (window === "youtube") setActiveWindow({ ...activeWindow, youtube: true });
    else if (window === "notes") setActiveWindow({ ...activeWindow, notes: true });
  }

  const handleSetInActiveWindow = (window: "finder" | "neovim" | "x" | "youtube" | "notes") => {
    if (window === "finder") setActiveWindow({ ...activeWindow, finder: false });
    else if (window === "neovim") setActiveWindow({ ...activeWindow, neovim: false });
    else if (window === "x") setActiveWindow({ ...activeWindow, x: false });
    else if (window === "youtube") setActiveWindow({ ...activeWindow, youtube: false });
    else if (window === "notes") setActiveWindow({ ...activeWindow, notes: false });
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
