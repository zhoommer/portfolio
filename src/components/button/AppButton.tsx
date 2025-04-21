import { useState } from "react";

interface AppButtonProps {
  src: string;
  tooltip: string;
  onClick?: () => void;
}


export default function AppButton({ src, tooltip, onClick }: AppButtonProps) {
  const [isHover, setIsHover] = useState<boolean>(false);


  return (
    <div className="relative">
      <button className="bg-transparent transition-all hover:scale-120" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} onClick={onClick}>
        <img src={src} alt="Finder" />
      </button>
      {isHover && (
        <div className="absolute bottom-full mb-2 px-2 py-1 w-max text-sm text-white bg-zinc-800 rounded shadow-lg transition-opacity duration-500 ease-in-out">
          {tooltip}
          <div className="absolute top-full left-1/12 -translate-x-1/2 w-2 h-2 bg-zinc-800 transform rotate-45" />
        </div>
      )}
    </div>
  )
}
