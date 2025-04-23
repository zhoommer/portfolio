import FolderActions from "../components/FolderActions";
import { useModalContext } from "../context/ModalProvider";


export default function NeoVim() {
  const { isNeoVimOpen } = useModalContext();
  return (
    <>
      {isNeoVimOpen && <div className="border">
        <FolderActions />
        NeoVim
      </div>}
    </>
  );
};
