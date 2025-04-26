import { useModalContext } from "../context/ModalProvider";
import { FaXTwitter, FaRegUser } from "react-icons/fa6";
import FolderActions from "./FolderActions";
import ResizableBox from "./ReSizableBox";
import { FaHashtag, FaHome } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMailOutline, IoBookmarkOutline } from "react-icons/io5";
import { GiFeather } from "react-icons/gi";
import { CiSettings } from "react-icons/ci";

export default function X() {
  const { isOpen } = useModalContext();
  return (
    <>
      {
        isOpen.x &&
        <ResizableBox startX={100} startY={100}>
          <div className="border rounded bg-zinc-900">
            <FolderActions folder="x" />
            <div className="@container bg-black rounded-lg">
              <div className="flex">
                <div className="flex flex-col justify-between gap-20 w-[50px] bg-black text-zinc-300 border border-zinc-700 pt-2 pb-5">
                  {/* aside area */}
                  <div className="flex flex-col items-center gap-5 border-b border-b-zinc-700 pb-3">
                    <FaXTwitter size={25} />
                    <FaHome size={20} />
                    <FaHashtag size={20} />
                    <HiOutlineUsers size={20} />
                    <IoMdNotificationsOutline size={20} />
                    <IoMailOutline size={20} />
                    <IoBookmarkOutline size={20} />
                    <div className="border rounded-full p-1">
                      <FaRegUser size={18} />
                    </div>
                  </div>

                  <div className="text-center">
                    <button className="bg-blue-400 p-2 rounded-full">
                      <GiFeather className="text-white" size={20} />
                    </button>
                  </div>
                </div>
                {/* main area */}
                <div className="grow">
                  <div className="border-b border-zinc-700">
                    <div className="flex p-2">
                      <div className="flex-grow flex justify-center">
                        <FaXTwitter size={20} className="text-zinc-300" />
                      </div>
                      <div className="flex justify-end">
                        <button className="text-zinc-200 text-xs border border-zinc-700 px-2 py-1 rounded-lg">Get Premium</button>
                      </div>
                    </div>
                    <div className="flex justify-between text-zinc-300 text-xs mb-3">
                      <div className="flex-1 flex justify-center">
                        <button className="underline underline-offset-8 decoration-blue-400 decoration-2">For you</button>
                      </div>
                      <div className="flex-1 flex justify-center">
                        <button>Following</button>
                      </div>
                    </div>
                  </div>
                  {/* main TODO:  */}
                  <div>main</div>
                </div>
                {/* right area */}
                <div className="hidden @lg:block border-l border-zinc-700 text-zinc-300 p-2">
                  <div className="flex gap-2">
                    <input type="search" placeholder="Search" className="grow text-xs border border-zinc-700 rounded px-2 focus:outline-0" />
                    <CiSettings size={20} />
                  </div>
                  <div className="mt-2">
                    <h3 className="font-bold text-sm">What's happening</h3>
                  </div>

                  <div className="text-xs py-3 border-b border-t border-zinc-700 mt-3">
                    <h3 className="font-semibold">Coding</h3>
                    <p className="text-zinc-600 text-xs">8,255 posts</p>
                    <p className="text-zinc-600 text-xs font-bold font-serif">Trending in Turkey</p>
                  </div>
                  <div className="text-xs py-3 border-b  border-zinc-700 mt-3">
                    <h3 className="font-semibold">Coding</h3>
                    <p className="text-zinc-600 text-xs">8,255 posts</p>
                    <p className="text-zinc-600 text-xs font-bold font-serif">Trending in Turkey</p>
                  </div><div className="text-xs py-3 border-b  border-zinc-700 mt-3">
                    <h3 className="font-semibold">Coding</h3>
                    <p className="text-zinc-600 text-xs">8,255 posts</p>
                    <p className="text-zinc-600 text-xs font-bold font-serif">Trending in Turkey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ResizableBox>
      }
    </>
  )
}
