import { AiFillApple } from "react-icons/ai";
import { FiSearch, FiWifi } from "react-icons/fi";
import { LiaKeyboard } from "react-icons/lia";
import { VscSettings } from "react-icons/vsc";
import { DateTime } from "./DateTime";

export default function SystemTray() {
  return (
    <div className="flex justify-between items-center px-5 py-1 bg-neutral-800">
      <div>
        <AiFillApple color="white" size={20} />
      </div>
      <div className="flex gap-3">
        <LiaKeyboard color="white" size={20} />
        <FiWifi color="white" size={18} />
        <FiSearch color="white" size={18} />
        <VscSettings color="white" size={18} />
        <DateTime />
      </div>
    </div>
  )
}
