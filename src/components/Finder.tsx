import { useState } from "react";
import { IoIosCloseCircle, IoIosRemoveCircle, IoIosArrowDropdownCircle, IoIosDesktop, IoIosCode, IoIosDocument, IoIosDownload, IoIosSearch, IoIosShare } from "react-icons/io";
import { useModalContext } from "../context/ModalProvider"
import { RiSignalTowerFill, RiHistoryFill, RiAppStoreLine } from "react-icons/ri";
import { IoCloud, IoShare } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLabelImportant } from "react-icons/md";
import { useActiveWindowContext } from "../context/ActiveWindowProvider";



export default function Finder() {
  const { isOpen, closeModal } = useModalContext();
  const { handleSetInactiveWindow } = useActiveWindowContext();
  const [selectedTab, setSelectedTab] = useState<"AirDrop" | "Recents" | "Applications" | "Desktop" | "Development" | "Documents" | "Downloads">("Recents")

  function handleChangeSelectedTab(selected: "AirDrop" | "Recents" | "Applications" | "Desktop" | "Development" | "Documents" | "Downloads") {
    setSelectedTab(selected);
  };

  return (
    <>
      {
        isOpen &&
        <div className="border rounded w-full h-full flex bg-neutral-900">
          <div className="w-[10rem] bg-neutral-800 text-white p-3 text-xs">
            <div className="flex gap-1">
              <button onClick={() => { closeModal(); handleSetInactiveWindow() }}>
                <IoIosCloseCircle color="red" size={15} />
              </button>
              <button>
                <IoIosRemoveCircle color="orange" size={15} />
              </button>

              <button>
                <IoIosArrowDropdownCircle color="green" size={15} />
              </button>
            </div>

            <div className="mt-4">
              <p className="text-zinc-600 font-semibold">Favorites</p>

              <div className="flex flex-col gap-1 mt-2">
                <button className={`${selectedTab === 'AirDrop' ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} onClick={() => handleChangeSelectedTab("AirDrop")}>
                  <RiSignalTowerFill className="text-blue-400" size={16} />
                  AirDrop
                </button>
                <button className={`${selectedTab === 'Recents' ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} onClick={() => handleChangeSelectedTab("Recents")}>
                  <RiHistoryFill className="text-blue-400" size={16} />
                  Recents
                </button>
                <button className={`${selectedTab === 'Applications' ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} onClick={() => handleChangeSelectedTab("Applications")}>
                  <RiAppStoreLine className="text-blue-400" size={16} />
                  Applications
                </button>
                <button className={`${selectedTab === 'Desktop' ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} onClick={() => handleChangeSelectedTab("Desktop")}>
                  <IoIosDesktop className="text-blue-400" size={16} />
                  Desktop
                </button>
                <button className={`${selectedTab === 'Development' ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} onClick={() => handleChangeSelectedTab("Development")}>
                  <IoIosCode className="text-blue-400" size={16} />
                  Development
                </button>
                <button className={`${selectedTab === 'Documents' ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} onClick={() => handleChangeSelectedTab("Documents")}>
                  <IoIosDocument className="text-blue-400" size={16} />
                  Documents
                </button>
                <button className={`${selectedTab === 'Downloads' ? 'bg-neutral-900' : ''} flex gap-2 items-center p-1 rounded-md transition-all`} onClick={() => handleChangeSelectedTab("Downloads")}>
                  <IoIosDownload className="text-blue-400" size={16} />
                  Downloads
                </button>
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
                  <h3 className="text-zinc-200">Development</h3>
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
            <div>main</div>
          </div>
        </div >
      }
    </>
  )
}
