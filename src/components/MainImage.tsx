import Image from "next/image"
import fghjfg from "@/assets/img/fghjfg.png"

interface MainImageProps {
  animate?: string;
  className?: string;
  containerClassName?: string;
}

const MainImage = ({ animate, className, containerClassName }: MainImageProps) => {

  return (
    <div className={`text-center ${animate}`}>
        <div className={`rounded-full flex justify-center items-center bg-[#00e0ff] shadow-[0_5px_30px_rgba(0,224,255,0.5)] ${containerClassName}`}>
          <Image src={fghjfg} width={280} height={280} alt="Profile Picture" className={` rounded-full object-cover ${className}`} />
        </div>
    </div>
  )
}

export default MainImage