import { useModalContext } from "../context/ModalProvider";


export default function NeoVim() {
  const { isNeoVimOpen } = useModalContext();
  return (
    <>
      {isNeoVimOpen && <div>NeoVim</div>}
    </>
  );
};
