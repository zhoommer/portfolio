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
        defaultSize={{ width: 800, height: 400 }}
        minWidth={450}
        minHeight={400}
        maxWidth={1080}
        maxHeight={800}
        style={{ position: "absolute", top: `${startX}px`, left: `${startY}px` }}
        className="resizableWindow"
      >
        {children}
      </Resizable >
    </>
  )
};

export default ResizableBox;

