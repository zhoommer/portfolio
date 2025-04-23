import { createContext, useContext, useState } from "react";


interface IModalContext {
  isFinderOpen: boolean;
  isNeoVimOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  openNeoVim: () => void;
  closeNeoVim: () => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFinderOpen, setIsFinderOpen] = useState<boolean>(false);
  const [isNeoVimOpen, setIsNeoVimOpen] = useState<boolean>(false);

  const openModal = () => setIsFinderOpen(true);
  const closeModal = () => setIsFinderOpen(false);

  const openNeoVim = () => setIsNeoVimOpen(true);
  const closeNeoVim = () => setIsNeoVimOpen(false);

  return (
    <ModalContext.Provider value={{ isFinderOpen, isNeoVimOpen, openModal, closeModal, openNeoVim, closeNeoVim }}>
      {children}
    </ModalContext.Provider>
  )
}


export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("Conntext not found")
  return context;
}
