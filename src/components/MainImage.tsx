import Image, { StaticImageData } from "next/image"

interface MainImageProps {
  src: StaticImageData;
  animate?: string;
  className?: string;
  containerClassName?: string;
}

const MainImage = ({ src, animate, className, containerClassName }: MainImageProps) => {

  return (
    <div className={`text-center ${animate}`}>
        <div className={`rounded-full flex justify-center items-center bg-[#A8E9F8] shadow-[0_5px_30px_rgba(0,224,255,0.5)] ${containerClassName}`}>
          <Image src={src} width={128} height={128} alt="Profile Picture" className={` rounded-full object-cover ${className}`} />
        </div>
    </div>
  )
}

export default MainImage