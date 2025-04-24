import FolderActions from "../components/FolderActions";
import ResizableBox from "../components/ReSizableBox";
import { useModalContext } from "../context/ModalProvider";


export default function NeoVim() {
  const { isOpen } = useModalContext();
  return (
    <>
      {isOpen.neovim &&
        <ResizableBox startX={200} startY={200}>
          <div className="border">
            <FolderActions folder="neovim" />
            NeoVim
          </div>
        </ResizableBox>
      }
    </>
  );
};
