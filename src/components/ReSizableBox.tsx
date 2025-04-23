import { Resizable } from "re-resizable";
import { useModalContext } from "../context/ModalProvider";

const ResizableBox = ({ children }: { children: React.ReactNode }) => {
  const startX = 100; const startY = 100;
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
        style={{ position: "absolute", top: `${startX}px`, left: `${startY}px` }}
        bounds={"window"}
        className="resizableComponent"
      >
        {children}
      </Resizable >
      }

      {
        isNeoVimOpen && <Resizable
          defaultSize={{ width: 800, height: 400 }
          }
          minWidth={400}
          minHeight={400}
          maxWidth={800}
          maxHeight={800}
          style={{ position: "absolute", top: `${startX}px`, left: `${startY}px` }}
        >
          {children}
        </Resizable >
      }
    </>
  )
};

export default ResizableBox;

