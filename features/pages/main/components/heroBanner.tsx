import Image, { StaticImageData }  from "next/image";
import hero from "@/assets/images/hero.jpg"
import Link from "next/link";


interface HeroProps {
    title: string;
    description?: string;
    image: StaticImageData;
};

export default function Hero({title, description, image}: HeroProps){
    return(
    <div className="flex flex-col items-center justify-center relative w-full h-[100vh] mt-[16px]">
            <Image src={image} alt="hero" className="w-full h-full object-cover"></Image>
        <div className="flex flex-col items-center absolute text-white">
             <h1 className="text-[54px] w-[850px] text-center">{title}</h1>
        
            {description && (
                <p className="text-[16px] w-[495px] text-center mt-[33px] mb-[30px] leading-[25px] tracking-[0.5px]">
                    {description}
                </p>
            )}
            <div className="flex mt-[30px] gap-[20px] items-center text-center">
                <Link href="/supplement" className="flex items-center justify-center border border-white min-w-[215px] h-[36px] rounded-none bg-transparent text-[14px] tracking-[2px] hover:bg-white hover:text-black transition-colors">
                SUPPLEMENT
                </Link>
                <Link href="/laser" className="flex items-center justify-center border border-white min-w-[215px] h-[36px] rounded-none bg-transparent text-[14px] tracking-[2px] hover:bg-white hover:text-black transition-colors">
                LASER
                </Link>
            </div>
        </div>
    </div>);
}