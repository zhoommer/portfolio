import { IoFolderOpen } from "react-icons/io5";
import { useState } from "react";

export default function Development() {
  const [selectedFile, setSelectedFile] = useState<"about" | "experience" | "socials" | null>(null);

  const handleSetSelectedFile = (file: "about" | "experience" | "socials" | null) => {
    setSelectedFile(file)
  }
  return (
    <div className="text-white px-5 flex">
      <div className="w-[80px] flex flex-col items-center" onClick={() => handleSetSelectedFile("about")}>
        <IoFolderOpen size={50} className={`${selectedFile === "about" ? "bg-zinc-700" : ""} p-1 rounded transition-all`} />
        <p className="text-wrap break-all" style={{ fontSize: "9px" }}>ckan-project</p>
      </div>
      <div className="w-[80px] flex flex-col items-center" onClick={() => handleSetSelectedFile("experience")}>
        <IoFolderOpen size={50} className={`${selectedFile === "experience" ? "bg-zinc-700" : ""} p-1 rounded transition-all`} />
        <p className="text-pretty break-all" style={{ fontSize: "9px" }}>sentence-ai</p>
      </div>
      <div className="w-[80px] flex flex-col items-center" onClick={() => handleSetSelectedFile("socials")}>
        <IoFolderOpen size={50} className={`${selectedFile === "socials" ? "bg-zinc-700" : ""} p-1 rounded transition-all`} />
        <p className="text-pretty break-all" style={{ fontSize: "9px" }}>expense-tracker</p>
      </div>
    </div >
  )
}
