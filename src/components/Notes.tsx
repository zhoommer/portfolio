import { IoApps, IoFolderOpenOutline, IoList, IoSearch } from "react-icons/io5";
import { useModalContext } from "../context/ModalProvider";
import FolderActions from "./FolderActions";
import ResizableBox from "./ReSizableBox";
import { HiMiniUserCircle } from "react-icons/hi2";
import { MdOutlineDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { LiaStickyNoteSolid } from "react-icons/lia";
import { AiOutlineTable } from "react-icons/ai";

export default function Notes() {
  const { isOpen } = useModalContext();

  return (
    <>
      {
        isOpen.notes &&
        <ResizableBox startX={0} startY={0}>
          <div className="bg-neutral-950 rounded h-full">
            <FolderActions folder="notes" />

            <div className="text-zinc-200 flex h-full bg-neutral-950 @container">
              <div className="w-[200px] flex flex-col justify-between gap-3 p-3">
                <div>
                  <div className="flex items-center gap-2">
                    <HiMiniUserCircle size={22} />
                    <span className="font-bold">Shared</span>
                  </div>
                  {/* ICLOUD */}
                  <div className="flex flex-col gap-3">
                    <div className="font-medium text-zinc-400 mt-3">iCloud</div>
                    <Link to={"#"} className="flex items-center gap-2 px-2 py-1 rounded-lg truncate hover:bg-zinc-600/30">
                      <IoFolderOpenOutline className="text-orange-400" size={22} />
                      <span className="text-sm">All iCloud</span>
                    </Link>
                    <Link to={"#"} className="flex items-center justify-between px-2 py-1 rounded-lg bg-zinc-600">
                      <div className="flex items-center gap-1">
                        <IoFolderOpenOutline className="text-orange-400" size={22} />
                        <span className="text-sm">Notes</span>
                      </div>
                      <div className="h-[20px] w-[20px] flex justify-center items-center text-xs rounded-full bg-orange-400">1</div>
                    </Link>
                    <Link to={"#"} className="flex items-center gap-2 px-2 py-1 rounded-lg truncate hover:bg-zinc-600/30">
                      <IoFolderOpenOutline className="text-orange-400" size={22} />
                      <span className="text-sm">Imported Notes</span>
                    </Link>
                    <Link to={"#"} className="flex items-center gap-2 px-2 py-1 rounded-lg truncate hover:bg-zinc-600/30">
                      <MdOutlineDelete className="text-orange-400" size={22} />
                      <span className="text-sm">Recently Deleted</span>
                    </Link>
                  </div>
                  {/* TAGS */}
                  <div className="font-medium text-zinc-400 mt-3">Tags</div>
                </div>

                {/* ADD FOLDER */}
                <div>
                  <button className="flex items-center gap-2 hover:text-orange-400 transition-all">
                    <IoMdAddCircle size={20} />
                    <span className="text-sm">New Folder</span>
                  </button>
                </div>
              </div>

              <div className="grow bg-zinc-900 rounded-tl-lg">
                <div className="flex h-full rounded-tl-lg">
                  <div className="flex-1 bg-zinc-800 rounded-tl-lg">
                    <div className="flex justify-between border-b-2 border-zinc-600">
                      <div className="flex-1 flex items-center gap-2 p-2">
                        <button className="bg-zinc-600 p-1 rounded-md">
                          <IoList size={20} />
                        </button>
                        <button className="bg-zinc-600 p-1 rounded-md">
                          <IoApps size={20} />
                        </button>
                      </div>
                      <div className="flex-1 flex justify-end items-center p-2">
                        <button className="bg-zinc-600 p-1 rounded-md hover:text-red-400 transition-all">
                          <MdOutlineDelete size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 p-3">
                      <Link to={"#"}>
                        <div className="shadow-lg bg-zinc-600/20 p-5 rounded-md flex flex-col gap-1">
                          <h3 className="font-bold">Note Title</h3>
                          <div className="text-xs truncate">Note Content...</div>
                          <div className="flex items-center gap-2">
                            <IoFolderOpenOutline />
                            <span className="text-xs">Notes</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="border-b-2 border-zinc-600 border-l-2 p-2 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <button className="bg-zinc-600 p-1 rounded-md">
                          <LiaStickyNoteSolid size={20} />
                        </button>
                        <button className="bg-zinc-600 p-1 rounded-md">
                          <IoList size={20} />
                        </button>
                        <button className="bg-zinc-600 p-1 rounded-md">
                          <AiOutlineTable size={20} />
                        </button>
                      </div>

                      <div>
                        <button className="bg-zinc-600 p-1 rounded-md">
                          <IoSearch size={20} />
                        </button>
                      </div>
                    </div>
                    <div>
                      <div>
                        <input type="text" placeholder="Type title here..." className="w-full p-2 focus:outline-0" />
                      </div>
                      <div className="h-full">
                        <textarea className="w-full h-full p-2 focus:outline-0" placeholder="Type content here..."></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ResizableBox>
      }
    </>
  );
};
