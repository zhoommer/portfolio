import { Link } from "react-router-dom";
import { IoIosCloseCircle, IoIosRemoveCircle, IoIosArrowDropdownCircle } from "react-icons/io";
import { useModalContext } from "../context/ModalProvider";
import { useActiveWindowContext } from "../context/ActiveWindowProvider";

interface FolderActionsProps {
  folder: "finder" | "neovim" | "x" | "youtube" | "notes";
}

export default function FolderActions({ folder }: FolderActionsProps) {
  const { closeModal } = useModalContext();
  const { handleSetInActiveWindow } = useActiveWindowContext();

  return (
    <div className="flex gap-1">
      <Link to="/" onClick={() => { closeModal(folder); handleSetInActiveWindow(folder) }}>
        <IoIosCloseCircle color="red" size={15} />
      </Link>
      <button>
        <IoIosRemoveCircle color="orange" size={15} />
      </button>

      <button>
        <IoIosArrowDropdownCircle color="green" size={15} />
      </button>
    </div>
  )
}
