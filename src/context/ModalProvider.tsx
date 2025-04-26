import { createContext, useContext, useState } from "react";


interface IModalContext {
  isOpen: { finder: boolean, neovim: boolean, x: boolean };
  openModal: (key: "finder" | "neovim" | "x") => void;
  closeModal: (key: "finder" | "neovim" | "x") => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<{ finder: boolean, neovim: boolean, x: boolean }>({
    finder: false,
    neovim: false,
    x: false,
  });

  const openModal = (key: "finder" | "neovim" | "x") => {
    if (key === "finder") setIsOpen({ ...isOpen, finder: true });
    else if (key === "neovim") setIsOpen({ ...isOpen, neovim: true });
    else if (key === "x") setIsOpen({ ...isOpen, x: true });
  };

  const closeModal = (key: "finder" | "neovim" | "x") => {
    if (key === "finder") setIsOpen({ ...isOpen, finder: false });
    else if (key === "neovim") setIsOpen({ ...isOpen, neovim: false });
    else if (key === "x") setIsOpen({ ...isOpen, x: false });
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}


export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Conntext not found")
  return context;
}
