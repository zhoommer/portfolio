import { createContext, useContext, useState } from "react";


interface IModalContext {
  isOpen: { finder: boolean, neovim: boolean };
  openModal: (key: "finder" | "neovim") => void;
  closeModal: (key: "finder" | "neovim") => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<{ finder: boolean, neovim: boolean }>({
    finder: false,
    neovim: false,
  });

  const openModal = (key: "finder" | "neovim") => {
    if (key === "finder") setIsOpen({ ...isOpen, finder: true });
    else if (key === "neovim") setIsOpen({ ...isOpen, neovim: true });
  };

  const closeModal = (key: "finder" | "neovim") => {
    if (key === "finder") setIsOpen({ ...isOpen, finder: false });
    else if (key === "neovim") setIsOpen({ ...isOpen, neovim: false });
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
