import { Resizable } from "re-resizable";

interface ResizableProps {
  children: React.ReactNode;
  startX: number;
  startY: number;
}

const ResizableBox = ({ children, startX, startY }: ResizableProps) => {

  return (
    <>
      <Resizable
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
    </>
  )
};

export default ResizableBox;

