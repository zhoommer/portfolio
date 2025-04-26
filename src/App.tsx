import SystemTray from "./components/SystemTray"
import AppBar from "./components/Appbar";
import { ModalProvider } from "./context/ModalProvider";
import Finder from "./components/Finder";
import { ActiveWindowProvider } from "./context/ActiveWindowProvider";
import NeoVim from "./pages/NeoVim";
import X from "./components/X";

function App() {
  return (
    <>
      <SystemTray />
      <ActiveWindowProvider>
        <ModalProvider>
          <main className="h-[90dvh] relative">
            <Finder />
            <NeoVim />
            <X />
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
