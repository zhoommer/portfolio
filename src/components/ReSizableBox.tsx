import { Resizable } from "re-resizable";

interface ResizableProps {
  children: React.ReactNode;
  startX: number;
  startY: number;
  defaultWidth?: number;
  defaultHeight?: number;
  minHeight?: number;
  minWidth?: number;
}

const ResizableBox = ({ children, startX, startY, defaultWidth, defaultHeight, minHeight, minWidth }: ResizableProps) => {
  return (
    <>
      <Resizable
        bounds={"window"}
        defaultSize={{ width: defaultWidth ? defaultWidth : 800, height: defaultHeight ? defaultWidth : 400 }}
        minWidth={minWidth ? minWidth : 450}
        minHeight={minHeight ? minHeight : 400}
        maxWidth={1920}
        maxHeight={1080}
        style={{ position: "absolute", top: `${startX}px`, left: `${startY}px`, height: "100%" }}
      >
        {children}
      </Resizable >
    </>
  )
};

export default ResizableBox;

