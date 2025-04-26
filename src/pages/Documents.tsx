import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { useModalContext } from "../context/ModalProvider";

export default function Documents() {
  const [selectedFile, setSelectedFile] = useState<{ resume: boolean }>({
    resume: false,
  });
  const { openModal } = useModalContext();

  return (
    <div className="px-5">
      <div onClick={() => setSelectedFile({ ...selectedFile, resume: true })} className="text-white" onDoubleClick={() => openModal("pdfViewer")}>
        <FaFilePdf size={50} className={`${selectedFile.resume ? 'bg-zinc-700' : ''} rounded p-1 transition-all`} />
        <p className="text-xs" style={{ fontSize: "9px" }}>Resume.pdf</p>
      </div>
    </div>
  );
};
