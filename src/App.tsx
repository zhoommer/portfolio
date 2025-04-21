import SystemTray from "./components/SystemTray"
import AppBar from "./components/Appbar";
import { ModalProvider } from "./context/ModalProvider";
import Finder from "./components/Finder";

function App() {
  return (
    <>
      <SystemTray />
      <ModalProvider>
        <main className="h-[90dvh] relative">
          <Finder />
        </main>
        <footer className="flex justify-center items-center">
          <AppBar />
        </footer>
      </ModalProvider>
    </>
  )
}

export default App
