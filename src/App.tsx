import SystemTray from "./components/SystemTray"
import AppBar from "./components/Appbar";
import { ModalProvider } from "./context/ModalProvider";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Finder from "./components/Finder";
import ResizableBox from "./components/ReSizableBox";

function App() {
  return (
    <>
      <SystemTray />
      <ModalProvider>
        <main className="h-[90dvh] relative">
          <DndProvider backend={HTML5Backend}>
            <ResizableBox>
              <Finder />
            </ResizableBox>
          </DndProvider>
        </main>
        <footer className="flex justify-center items-center">
          <AppBar />
        </footer>
      </ModalProvider>
    </>
  )
}

export default App
