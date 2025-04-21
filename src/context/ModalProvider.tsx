import { createContext, useContext, useState } from "react";


interface IModalContext {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const initialValue = {
  isOpen: false,
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue.isOpen);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

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
