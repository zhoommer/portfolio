import { useModalContext } from "../context/ModalProvider";
import ResizableBox from "./ReSizableBox";

export default function Youtube() {
  const { isOpen } = useModalContext();
  return (
    <>
      {
        isOpen.youtube &&
        <ResizableBox startX={0} startY={0}>
          <div className="border rounded text-zinc-300">Youtube application is coming soon.</div>
        </ResizableBox>
      }
    </>
  );
};
