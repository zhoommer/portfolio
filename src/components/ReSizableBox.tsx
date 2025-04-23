import { Resizable } from "re-resizable";
import { useModalContext } from "../context/ModalProvider";

const ResizableBox = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useModalContext();

  return (
    <>
      {isOpen && <Resizable
        defaultSize={{ width: 800, height: 400 }
        }
        minWidth={500}
        minHeight={400}
        maxWidth={800}
        maxHeight={800}
        style={{ position: "absolute", top: "100px", left: "100px" }}
        className="Draggable"

      >
        {children}
      </Resizable >
      }
    </>
  )
};

export default ResizableBox;

