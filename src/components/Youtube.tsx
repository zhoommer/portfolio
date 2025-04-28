import { useModalContext } from "../context/ModalProvider";
import FolderActions from "./FolderActions";
import ResizableBox from "./ReSizableBox";
import { IoMenu, IoLogoYoutube, IoSearch, IoMic, IoNotifications, IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";
import { categories, youtubeContents, youtubeMenu } from "../contents/youtubeContents";
import devaslife from "../assets/takuya.jpg";

export default function Youtube() {
  const { isOpen } = useModalContext();
  return (
    <>
      {
        isOpen.youtube &&
        <ResizableBox startX={0} startY={0} minWidth={700}>
          <div className="@container border rounded">
            <FolderActions folder="youtube" />
            <div className="@container bg-neutral-950 h-max">
              <nav className="flex items-center p-3">
                <div className="flex gap-3">
                  <IoMenu size={30} className="text-zinc-300" />
                  <div className="flex gap-2 items-center">
                    <IoLogoYoutube size={30} className="text-red-500" />
                    <span className="text-zinc-300">Premium</span>
                  </div>
                </div>
                <div className="grow flex justify-center items-center">
                  <div className="flex items-center">
                    <input type="search" placeholder="Search" className="border border-r-0 border-zinc-700 h-[42px] px-4 rounded-l-3xl text-zinc-200 text-sm focus:outline-0" />
                    <div className="border border-zinc-700 rounded-r-3xl h-[42px] px-4 flex items-center bg-zinc-800">
                      <IoSearch color="white" size={20} />
                    </div>
                    <div className="ms-2 border rounded-full p-2 bg-zinc-800">
                      <IoMic size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-sm bg-zinc-800 px-4 py-2 rounded-2xl text-zinc-100">
                    <IoAdd size={18} className="text-zinc-100" />
                    <span>Create</span>
                  </button>
                  <IoNotifications size={20} className="text-white" />
                </div>
              </nav>
              <main className="flex gap-3">
                <aside className="min-w-[80px] text-white flex flex-col items-center gap-5">
                  {
                    youtubeMenu.map((menu, index) => (
                      <Link key={index} to={"#"} className="hover:bg-zinc-800 py-2 px-3 rounded">
                        <div className="flex flex-col justify-center items-center">
                          {menu.icon}
                          <p className="content__p">{menu.name}</p>
                        </div>
                      </Link>
                    ))
                  }

                </aside>
                <section className="grow overflow-y-scroll">
                  <div className="text-white text-xs flex items-center gap-3">
                    {
                      categories.map((category, index) => (
                        <Link to={"#"} key={index} className="bg-zinc-800 px-4 py-2 rounded-lg">
                          {category}
                        </Link>
                      ))
                    }
                  </div>
                  <div className="flex @sm:flex-wrap @sm:justify-center gap-3 mt-3 text-white pt-2">
                    {
                      youtubeContents.map((content, index) => (
                        <div className="rounded-xl max-h-[420px]" key={index}>
                          {content.iframe}
                          <div className="flex items-center gap-2 mt-2">
                            <img src={devaslife} alt="Devaslife" className="rounded-full" width={40} height={40} />
                            <div className="font-bold text-sm w-85">{content.title}</div>
                          </div>
                          <div className="flex items-center gap-2 text-xs mt-2 mx-12"><span>{content.views} views</span> <span>{content.uploadedAt}</span></div>
                        </div>
                      ))
                    }
                  </div>
                </section>
              </main>
            </div>
          </div>
        </ResizableBox>
      }
    </>
  );
};
