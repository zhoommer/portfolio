import { IoIosCloseCircle, IoIosRemoveCircle, IoIosArrowDropdownCircle, IoIosDesktop, IoIosCode, IoIosDocument, IoIosDownload } from "react-icons/io";
import { useModalContext } from "../context/ModalProvider"
import { RiSignalTowerFill, RiHistoryFill, RiAppStoreLine } from "react-icons/ri";
import { IoCloud, IoShare } from "react-icons/io5";



export default function Finder() {
  const { isOpen } = useModalContext();

  return (
    <>
      {
        isOpen &&
        <div className="border rounded w-full h-full flex bg-neutral-900">
          <div className="w-[10rem] bg-neutral-800 text-white p-3 text-xs">
            <div className="flex gap-1">
              <button>
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
                <button className="flex gap-2 items-center p-1 rounded-md ">
                  <RiSignalTowerFill className="text-blue-400" size={16} />
                  AirDrop
                </button>
                <button className="flex gap-2 items-center p-1 rounded-md">
                  <RiHistoryFill className="text-blue-400" size={16} />
                  Recents
                </button>
                <button className="flex gap-2 items-center p-1 rounded-md">
                  <RiAppStoreLine className="text-blue-400" size={16} />
                  Applications
                </button>
                <button className="flex gap-2 items-center p-1 rounded-md">
                  <IoIosDesktop className="text-blue-400" size={16} />
                  Desktop
                </button>
                <button className="flex gap-2 items-center bg-neutral-900 p-1 rounded-md">
                  <IoIosCode className="text-blue-400" size={16} />
                  Development
                </button>
                <button className="flex gap-2 items-center p-1 rounded-md">
                  <IoIosDocument className="text-blue-400" size={16} />
                  Documents
                </button>
                <button className="flex gap-2 items-center p-1 rounded-md">
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
            <div>header</div>
            <div>main</div>
          </div>
        </div>
      }
    </>
  )
}
