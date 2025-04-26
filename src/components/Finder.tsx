import { IoIosDesktop, IoIosCode, IoIosDocument, IoIosDownload, IoIosSearch, IoIosShare } from "react-icons/io";
import { useModalContext } from "../context/ModalProvider"
import { RiSignalTowerFill, RiHistoryFill, RiAppStoreLine } from "react-icons/ri";
import { IoCloud, IoShare } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLabelImportant } from "react-icons/md";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Development from "../pages/Development";
import FolderActions from "./FolderActions";
import Recents from "../pages/Recents";
import ResizableBox from "./ReSizableBox";
import Documents from "../pages/Documents";



export default function Finder() {
  const { isOpen } = useModalContext();
  const location = useLocation();
  const { pathname } = location;


  const activeWindow = (window: string): boolean => {
    if (window === pathname) return true;
    return false;
  }

  const windowTitle = () => {
    switch (pathname) {
      case "/airdrop":
        return "AirDrop";
      case "/recents":
        return "Recents";
      case "/applications":
        return "Applications";
      case "/desktop":
        return "Desktop";
      case "/development":
        return "Development";
      case "/documents":
        return "Documents";
      case "/downloads":
        return "Downloads";
      default:
        return "Recents";
    }
  }

  return (
    <>
      {
        isOpen.finder &&
        <ResizableBox startX={100} startY={100}>
          <div className="border rounded w-full h-full flex bg-neutral-900">
            <div className="w-[10rem] bg-neutral-800 text-white p-3 text-xs">
              <FolderActions folder="finder" />
              <div className="mt-4">
                <p className="text-zinc-600 font-semibold">Favorites</p>

                <div className="flex flex-col gap-1 mt-2">
                  <Link to={"/airdrop"} className={`${activeWindow('/airdrop') ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`}>
                    <RiSignalTowerFill className="text-blue-400" size={16} />
                    AirDrop
                  </Link>
                  <Link to={"/recents"} className={`${activeWindow('/recents') ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`}>
                    <RiHistoryFill className="text-blue-400" size={16} />
                    Recents
                  </Link>
                  <Link to={"/applications"} className={`${activeWindow('/applications') ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} >
                    <RiAppStoreLine className="text-blue-400" size={16} />
                    Applications
                  </Link>
                  <Link to={"/desktop"} className={`${activeWindow('/desktop') ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} >
                    <IoIosDesktop className="text-blue-400" size={16} />
                    Desktop
                  </Link>
                  <Link to={"/development"} className={`${activeWindow('/development') ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} >
                    <IoIosCode className="text-blue-400" size={16} />
                    Development
                  </Link>
                  <Link to={"/documents"} className={`${activeWindow('/documents') ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} >
                    <IoIosDocument className="text-blue-400" size={16} />
                    Documents
                  </Link>
                  <Link to={"/downloads"} className={`${activeWindow('/downloads') ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} >
                    <IoIosDownload className="text-blue-400" size={16} />
                    Downloads
                  </Link>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-zinc-600 font-semibold mb-2">iCloud</p>
                <div className="flex flex-col">
                  <button className="flex gap-2 items-center p-1 rounded-md">
                    <IoCloud className="text-sky-200" size={16} />
                    iCloud Drive
                  </button>
                  <button className="flex gap-2 items-center p-1 rounded-md">
                    <IoShare className="text-sky-200" size={16} />
                    Shared
                  </button>
                </div>
              </div>
            </div>
            <div className="grow">
              <div className="flex justify-between items-center p-4">
                <div>
                  <div className="flex items-center gap-2 text-normal">
                    <div className="p-1 hover:bg-zinc-800 transition-all rounded">
                      <MdKeyboardArrowLeft className="text-zinc-400" size={25} />
                    </div>
                    <MdKeyboardArrowRight className="text-zinc-400" size={25} />
                    <h3 className="text-zinc-200">{windowTitle()}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <div className="px-2 py-1 hover:bg-zinc-800 rounded transition-all">
                    <IoIosShare size={20} />
                  </div>
                  <div className="px-2 py-1 hover:bg-zinc-800 rounded transition-all">
                    <MdLabelImportant size={20} className="-rotate-45" />
                  </div>
                  <div className="px-2 py-1 hover:bg-zinc-800 rounded transition-all">
                    <IoIosSearch size={20} />
                  </div>
                </div>
              </div>
              <div>
                <Routes>
                  <Route path="/development" element={<Development />} />
                  <Route path="/recents" element={<Recents />} />
                  <Route path="/documents" element={<Documents />} />
                </Routes>
              </div>
            </div>
          </div >
        </ResizableBox>
      }
    </>
  )
}
