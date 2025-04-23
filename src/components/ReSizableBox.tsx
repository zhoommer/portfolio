import { Resizable } from "re-resizable";
import { useModalContext } from "../context/ModalProvider";

const ResizableBox = ({ children }: { children: React.ReactNode }) => {
  const { isFinderOpen, isNeoVimOpen } = useModalContext();

  return (
    <>
      {isFinderOpen && <Resizable
        defaultSize={{ width: 800, height: 400 }
        }
        minWidth={400}
        minHeight={400}
        maxWidth={800}
        maxHeight={800}
        style={{ position: "absolute", top: "100px", left: "100px" }}
      >
        {children}
      </Resizable >
      }

      {isNeoVimOpen && <Resizable
        defaultSize={{ width: 800, height: 400 }
        }
        minWidth={400}
        minHeight={400}
        maxWidth={800}
        maxHeight={800}
        style={{ position: "absolute", top: "100px", left: "100px" }}
      >
        {children}
      </Resizable >
      }
    </>
  )
};

export default ResizableBox;

