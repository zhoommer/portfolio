import { Resizable } from "re-resizable";

interface ResizableProps {
  children: React.ReactNode;
  startX: number;
  startY: number;
  defaultWidth?: number;
  defaultHeight?: number;
}

const ResizableBox = ({ children, startX, startY, defaultWidth, defaultHeight }: ResizableProps) => {
  return (
    <>
      <Resizable
        defaultSize={{ width: defaultWidth ? defaultWidth : 800, height: defaultHeight ? defaultWidth : 400 }}
        minWidth={450}
        minHeight={400}
        maxWidth={1080}
        maxHeight={800}
        style={{ position: "absolute", top: `${startX}px`, left: `${startY}px` }}
        className="z-50"
      >
        {children}
      </Resizable >
    </>
  )
};

export default ResizableBox;

