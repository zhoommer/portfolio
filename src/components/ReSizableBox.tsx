import { Resizable } from "re-resizable";
import { useModalContext } from "../context/ModalProvider";

const ResizableBox = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useModalContext();
  return (
    <>
      {isOpen && <Resizable
        defaultSize={{ width: 400, height: 400 }
        }
        minWidth={400}
        minHeight={400}
        maxWidth={800}
        maxHeight={800}
        style={{ position: "relative", top: "100px", left: "100px" }}
      >
        {children}
      </Resizable >
      }
    </>
  )
};

export default ResizableBox;

