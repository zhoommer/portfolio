import FolderActions from "../components/FolderActions";
import ResizableBox from "../components/ReSizableBox";
import { useModalContext } from "../context/ModalProvider";


export default function NeoVim() {
  const { isOpen } = useModalContext();



  return (
    <>
      {isOpen.neovim &&
        <ResizableBox startX={200} startY={200} defaultWidth={600} defaultHeight={400}>
          <div className="border rounded bg-[#073642]">
            <FolderActions folder="neovim" />
            <div className="flex">
              <div className="w-[200px] border">aside</div>
              <div className="grow">content</div>
            </div>
          </div>
        </ResizableBox>
      }
    </>
  );
};
