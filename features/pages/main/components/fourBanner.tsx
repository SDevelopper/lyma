import Image from "next/image";
import banner from "@/assets/images/banner.jpg"

export default function FourBanner(){
    return (
        <div className="relative justify-center items-center mt-[16px] w-full h-[430px] overflow-hidden">
            <Image src={banner} alt="banner"  fill className="object-cover object-center"></Image>
            <div className="absolute top-[136px] left-[768px] z-20 tracking-[1px] font-normal">
                <h3 className="text-[35px]">Meet our founder.</h3>
                <p className="text-[16px] text-[#666666] leading-[25px] w-[349px] mt-[33px]">Lucy’s story is one you really need to read; it changed an industry forever.</p>
                <button className="mt-[12px] tracking-[2px] leading-[20px] cursor-pointer">READ MORE</button>
            </div>
        </div>
    )
}