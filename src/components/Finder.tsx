import { IoIosCloseCircle, IoIosRemoveCircle, IoIosArrowDropdownCircle, IoIosDesktop, IoIosCode, IoIosDocument, IoIosDownload } from "react-icons/io";
import { useModalContext } from "../context/ModalProvider"
import { RiSignalTowerFill, RiHistoryFill, RiAppStoreLine } from "react-icons/ri";


export default function Finder() {
  const { isOpen } = useModalContext();
  return (
    <>
      {
        isOpen &&
        <div className="border rounded w-[50rem] flex absolute top-5 left-10">
          <div className="w-[10rem] bg-neutral-900 text-white p-3 text-xs">
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

              <div className="flex flex-col gap-2 mt-2">
                <button className="flex gap-2 items-center">
                  <RiSignalTowerFill className="text-blue-400" size={16} />
                  AirDrop
                </button>
                <button className="flex gap-2 items-center">
                  <RiHistoryFill className="text-blue-400" size={16} />
                  Recents
                </button>
                <button className="flex gap-2 items-center">
                  <RiAppStoreLine className="text-blue-400" size={16} />
                  Applications
                </button>
                <button className="flex gap-2 items-center">
                  <IoIosDesktop className="text-blue-400" size={16} />
                  Desktop
                </button>
                <button className="flex gap-2 items-center">
                  <IoIosCode className="text-blue-400" size={16} />
                  Development
                </button>
                <button className="flex gap-2 items-center">
                  <IoIosDocument className="text-blue-400" size={16} />
                  Documents
                </button>
                <button className="flex gap-2 items-center">
                  <IoIosDownload className="text-blue-400" size={16} />
                  Downloads
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
