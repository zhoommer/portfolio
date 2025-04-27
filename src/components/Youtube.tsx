import { useModalContext } from "../context/ModalProvider";
import FolderActions from "./FolderActions";
import ResizableBox from "./ReSizableBox";
import { IoMenu, IoLogoYoutube, IoSearch, IoMic, IoNotifications, IoAdd } from "react-icons/io5";

export default function Youtube() {
  const { isOpen } = useModalContext();
  return (
    <>
      {
        isOpen.youtube &&
        <ResizableBox startX={0} startY={0}>
          <div className="border rounded">
            <FolderActions folder="youtube" />
            <div className="@container">
              <nav className="flex items-center p-3 bg-neutral-950">
                <div className="flex gap-3">
                  <IoMenu size={30} className="text-zinc-300" />
                  <div className="flex gap-2 items-center">
                    <IoLogoYoutube size={30} className="text-red-500" />
                    <span className="text-zinc-300">Premium</span>
                  </div>
                </div>
                <div className="grow flex justify-center items-center">
                  <div className="flex items-center">
                    <input type="search" placeholder="Search" className="border border-r-0 border-zinc-700 h-[42px] px-4 rounded-l-3xl text-zinc-200 text-sm focus:outline-0" />
                    <div className="border border-zinc-700 rounded-r-3xl h-[42px] px-4 flex items-center bg-zinc-800">
                      <IoSearch color="white" size={20} />
                    </div>
                    <div className="ms-2 border rounded-full p-2 bg-zinc-800">
                      <IoMic size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-sm bg-zinc-800 px-4 py-2 rounded-2xl text-zinc-100">
                    <IoAdd size={18} className="text-zinc-100" />
                    <span>Create</span>
                  </button>
                  <IoNotifications size={20} className="text-white" />
                </div>
              </nav>
            </div>
          </div>
        </ResizableBox>
      }
    </>
  );
};
