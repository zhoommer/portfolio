import { useModalContext } from "../context/ModalProvider";
import FolderActions from "./FolderActions";
import ResizableBox from "./ReSizableBox";

export default function Notes() {
  const { isOpen } = useModalContext();

  return (
    <>
      {
        isOpen.notes &&
        <ResizableBox startX={100} startY={100}>
          <div className="bg-neutral-950 rounded">
            <FolderActions folder="notes" />
          </div>
        </ResizableBox>
      }
    </>
  );
};
