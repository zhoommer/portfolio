import { Link } from "react-router-dom";
import { IoIosCloseCircle, IoIosRemoveCircle, IoIosArrowDropdownCircle } from "react-icons/io";
import { useModalContext } from "../context/ModalProvider";
import { useActiveWindowContext } from "../context/ActiveWindowProvider";

export default function FolderActions() {
  const { closeModal, closeNeoVim } = useModalContext();
  const { handleSetInactiveWindow, handleSetInactiveWindowNeoVim } = useActiveWindowContext();

  return (
    <div className="flex gap-1">
      <Link to="/" onClick={() => { closeModal(); closeNeoVim(); handleSetInactiveWindow(); handleSetInactiveWindowNeoVim(); }}>
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
