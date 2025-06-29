import Image from "next/image"
import fghjfg from "@/assets/img/fghjfg.png"

interface MainImageProps {
  className?: string;
}

const MainImage = ({ className }: MainImageProps) => {

  return (
    <div className={`text-center ${className}`}>
      <div className="image-container">
        <div className="image-circle w-75 h-75 rounded-full flex justify-center items-center bg-[#00e0ff] shadow-[0_5px_30px_rgba(0,224,255,0.5)]">
          <Image src={fghjfg} width={280} height={280} alt="Profile Picture" className="profile-img w-70 h-70 rounded-full object-cover" />
        </div>
        </div>
    </div>
  )
}

export default MainImage