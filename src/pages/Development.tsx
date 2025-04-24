import { FaLaptopCode } from "react-icons/fa";
import { PiFileTextFill } from "react-icons/pi";
import { IoShareSocialSharp } from "react-icons/io5";
import { useState } from "react";

export default function Development() {
  const [selectedFile, setSelectedFile] = useState<"about" | "experience" | "socials" | null>(null);

  const handleSetSelectedFile = (file: "about" | "experience" | "socials" | null) => {
    setSelectedFile(file)
  }
  return (
    <div className="text-white px-5 flex">
      <div className="w-[80px] flex flex-col items-center" onClick={() => handleSetSelectedFile("about")}>
        <PiFileTextFill size={50} className={`${selectedFile === "about" ? "bg-zinc-700" : ""} p-1 rounded transition-all`} />
        <p className="text-wrap break-all" style={{ fontSize: "9px" }}>AboutMe.txt</p>
      </div>
      <div className="w-[80px] flex flex-col items-center" onClick={() => handleSetSelectedFile("experience")}>
        <FaLaptopCode size={50} className={`${selectedFile === "experience" ? "bg-zinc-700" : ""} p-1 rounded transition-all`} />
        <p className="text-pretty break-all" style={{ fontSize: "9px" }}>Experience.txt</p>
      </div>
      <div className="w-[80px] flex flex-col items-center" onClick={() => handleSetSelectedFile("socials")}>
        <IoShareSocialSharp size={50} className={`${selectedFile === "socials" ? "bg-zinc-700" : ""} p-1 rounded transition-all`} />
        <p className="text-pretty break-all" style={{ fontSize: "9px" }}>Socials.txt</p>
      </div>
    </div >
  )
}
