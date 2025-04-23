import SystemTray from "./components/SystemTray"
import AppBar from "./components/Appbar";
import { ModalProvider } from "./context/ModalProvider";
import Finder from "./components/Finder";
import ResizableBox from "./components/ReSizableBox";
import { ActiveWindowProvider } from "./context/ActiveWindowProvider";
import NeoVim from "./pages/NeoVim";

function App() {
  return (
    <>
      <SystemTray />
      <ActiveWindowProvider>
        <ModalProvider>
          <main className="h-[90dvh] relative">
            <ResizableBox>
              <Finder />
              <NeoVim />
            </ResizableBox>
          </main>
          <footer className="flex justify-center items-center">
            <AppBar />
          </footer>
        </ModalProvider>
      </ActiveWindowProvider>
    </>

  )
}

export default App
