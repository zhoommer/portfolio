import finder from "../assets/icons/finder/c3ecfb26f38d55a01d571f6c1e101648_Finder_32x32x32.png";
import launchpad from "../assets/icons/launchpad/1a720e5d1231521e0306216a67e508b0_Launchpad_32x32x32.png";
import safari from "../assets/icons/safari/bb3a59761b22713c61c647a79234cbea_Safari_32x32x32.png";
import firefox from "../assets/icons/firefox/ff1ecf3d80942874ab46e437c149a51d_Firefox_32x32x32.png";
import neovim from "../assets/icons/neovim/0f26d91af505feadc35a8b4e53cb3566_Neovim_32x32x32.png";
import intellij from "../assets/icons/intellij/20949d97e09296eb873c2e5c8c248a22_IntelliJ_IDEA__2024__32x32x32.png";
import postman from "../assets//icons/postman/d1253ad4d4c33f32057ba36c1f9fe79c_Postman_32x32x32.png";
import postgresql from "../assets/icons/psql/ed285b498fd773528774f2829272be3f_0qDaLGbmop_32x32x32.png";
import docker from "../assets/icons/docker/e85652aa51632fec98ee14b339d836fd_Docker_32x32x32.png";
import twitter from "../assets/icons/twitter/027ca902824024586d6a2c9106a21643_X__Twitter__32x32x32.png";
import spotify from "../assets/icons/spotify/5ed9551e4845d8d3a4e422cb9558c8ea_Spotify__iOS_18_Dark__32x32x32.png";
import photos from "../assets/icons/photos/2bb4bbe5229f7ade8c8241edfd44f9ea_Photos_32x32x32.png";
import calendar from "../assets/icons/calendar/2d2444e8aa4728fb184fb399f7fc3733_Calendar_32x32x32.png";
import whatsapp from "../assets/icons/whatsapp/096da28269ad9e423dee2bc5e0934fa3_WhatsApp_32x32x32.png";
import youtube from "../assets/icons/youtube/youtube_32x32x32.png";
import appStore from "../assets/icons/appStore/88b5356dd158eba7ce8ae868d38bdec9_App_Store_32x32x32.png";
import notes from "../assets/icons/notes/a7761e81eb0637b0c29977f1a2519d8c_Notes_32x32x32.png";
import AppButton from "./button/AppButton";
import { useModalContext } from "../context/ModalProvider";
import { useActiveWindowContext } from "../context/ActiveWindowProvider";

export default function AppBar() {

  const { openModal } = useModalContext();
  const { activeWindow, handleSetActiveWindow } = useActiveWindowContext();

  const setBounceAnimation = (element: "finderIcon" | "neovimIcon" | "xIcon" | "youtubeIcon" | "notesIcon") => {
    document.getElementById(element)?.classList.add("animate-bounce");
    setTimeout(() => {
      document.getElementById(element)?.classList.remove("animate-bounce");
    }, 3000);
  }

  return (
    <div className="w-max flex gap-3 bg-neutral-800 rounded-lg p-1">
      <div className="flex flex-col items-center" id="finderIcon" onClick={() => setBounceAnimation("finderIcon")}>
        <AppButton src={finder} tooltip="Finder" href="/recents" onClick={() => { openModal("finder"); handleSetActiveWindow("finder") }} />
        {
          activeWindow.finder &&
          <div className="w-1 h-1 rounded-full bg-white"></div>
        }
      </div>
      <AppButton src={launchpad} tooltip="Launchpad" />
      <AppButton src={safari} tooltip="Safari" />
      <AppButton src={firefox} tooltip="Firefox" />
      <div className="flex flex-col items-center" id="neovimIcon" onClick={() => setBounceAnimation("neovimIcon")}>
        <AppButton src={neovim} tooltip="NeoVim" onClick={() => { openModal("neovim"); handleSetActiveWindow("neovim") }} />
        {
          activeWindow.neovim &&
          <div className="w-1 h-1 rounded-full bg-white"></div>
        }
      </div>
      <AppButton src={intellij} tooltip="Intellij IDEA Community Edition" />
      <AppButton src={postman} tooltip="Postman" />
      <AppButton src={postgresql} tooltip="pgAdmin 4" />
      <AppButton src={docker} tooltip="Docker Desktop" />
      <div className="flex flex-col items-center" id="xIcon" onClick={() => setBounceAnimation("xIcon")}>
        <AppButton src={twitter} tooltip="X" onClick={() => { openModal("x"); handleSetActiveWindow("x") }} />
        {
          activeWindow.x &&
          <div className="w-1 h-1 rounded-full bg-white"></div>
        }
      </div>
      <div className="flex flex-col items-center" id="youtubeIcon" onClick={() => setBounceAnimation("youtubeIcon")}>
        <AppButton src={youtube} tooltip="Youtube" onClick={() => { openModal("youtube"); handleSetActiveWindow("youtube") }} />
        {
          activeWindow.youtube &&
          <div className="w-1 h-1 rounded-full bg-white"></div>
        }
      </div>
      <AppButton src={spotify} tooltip="Spotify" />
      <AppButton src={whatsapp} tooltip="Whatsapp" />
      <div className="flex flex-col items-center" id="notesIcon" onClick={() => setBounceAnimation("notesIcon")}>
        <AppButton src={notes} tooltip="Notes" onClick={() => { openModal("notes"); handleSetActiveWindow("notes") }} />
        {
          activeWindow.notes &&
          <div className="w-1 h-1 rounded-full bg-white"></div>
        }
      </div>
      <AppButton src={photos} tooltip="Photos" />
      <AppButton src={calendar} tooltip="Calendar" />
      <AppButton src={appStore} tooltip="App Store" />
    </div>
  )
}
