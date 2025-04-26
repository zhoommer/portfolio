import { createContext, useContext, useState } from "react";


interface IModalContext {
  isOpen: { finder: boolean, neovim: boolean, x: boolean, pdfViewer: boolean, };
  openModal: (key: "finder" | "neovim" | "x" | "pdfViewer") => void;
  closeModal: (key: "finder" | "neovim" | "x" | "pdfViewer") => void;
}

const ModalContext = createContext<IModalContext | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<{ finder: boolean, neovim: boolean, x: boolean, pdfViewer: boolean }>({
    finder: false,
    neovim: false,
    x: false,
    pdfViewer: false,
  });

  const openModal = (key: "finder" | "neovim" | "x" | "pdfViewer") => {
    if (key === "finder") setIsOpen({ ...isOpen, finder: true });
    else if (key === "neovim") setIsOpen({ ...isOpen, neovim: true });
    else if (key === "x") setIsOpen({ ...isOpen, x: true });
    else if (key === "pdfViewer") setIsOpen({ ...isOpen, pdfViewer: true });
  };

  const closeModal = (key: "finder" | "neovim" | "x" | "pdfViewer") => {
    if (key === "finder") setIsOpen({ ...isOpen, finder: false });
    else if (key === "neovim") setIsOpen({ ...isOpen, neovim: false });
    else if (key === "x") setIsOpen({ ...isOpen, x: false });
    else if (key === "pdfViewer") setIsOpen({ ...isOpen, pdfViewer: false });
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
