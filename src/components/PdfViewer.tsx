import resume from "../assets/resume.pdf";
import { useModalContext } from '../context/ModalProvider';




export default function PdfViewer() {
  const { isOpen } = useModalContext();

  return (
    <>
      {
        isOpen.pdfViewer && <iframe
          src={resume}
          width={"100%"}
          height={"100%"}
          title="Resume"
          className="absolute z-50"
        />
      }
    </>
  )
}
