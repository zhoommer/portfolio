import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubeshorts, SiYoutubemusic } from "react-icons/si";
import { MdOutlineSubscriptions, MdOutlineFileDownload } from "react-icons/md";


export const categories: string[] = ["All", "Music", "Game", "Live", "Mix", "Animation", "Guitar", "Comedy"];

export const youtubeMenu: { icon: React.ReactNode; name: string }[] = [
  { icon: <IoHomeSharp size={20} />, name: "Home" },
  { icon: <SiYoutubeshorts size={20} />, name: "Shorts" },
  { icon: <MdOutlineSubscriptions size={20} />, name: "Subscriptions" },
  { icon: <SiYoutubemusic size={20} />, name: "Youtube Music" },
  { icon: <MdOutlineFileDownload size={20} />, name: "Downloads" },
]


export const youtubeContents: { iframe: React.ReactNode; title: string; views: string; uploadedAt: string }[] = [
  { iframe: <iframe loading="lazy" className="rounded-xl" width="100%" height="315" src="https://www.youtube.com/embed/fFHlfbKVi30?si=Ldapl2v5dz5F3iK6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen> </iframe>, title: "Effective Neovim setup for web development towards 2024", views: "995B", uploadedAt: "1 years ago" },
  { iframe: <iframe loading="lazy" className="rounded-xl" width="100%" height="315" src="https://www.youtube.com/embed/4g26x6FzuBU?si=k4h9XkC8NqALc0rO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>, title: "How to build a smoothly animated table of contents (by a bonfire🔥) w/ Bun, Framer Motion, Zustand", views: "103K", uploadedAt: "7 months ago" },
  { iframe: <iframe loading="lazy" className="rounded-xl" width="100%" height="315" src="https://www.youtube.com/embed/hMcE6E8JjXA?si=HBz1DtzE1ijNL8Q6" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>, title: "Learn with me: HTMX and HonoJS", views: "42K", uploadedAt: "8 months ago" }
]
