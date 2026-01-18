import Image from "next/image";
import products from "@/assets/images/products.png";
export default function ThreeBanner() {
    return (
        <div className="flex flex-col items-center text-center justify-center w-full h-[729px] bg-black mt-[16px]">
            <h3 className="text-white text-[38px] tracking-[3px]">
                THE QUEST FOR BETTER.
            </h3>

            <Image src={products} alt="products" className="w-[444px] h-[366px]"></Image>

            <p  className="text-white text-[16px] leading-[25px] w-[532px] h-[100px] mt-39px">
                At LYMA, we’re always searching for the perfect balance of science, nature and technology. Every LYMA product has been designed to work together. We know that when we discover the best, you’ll discover yours.
            </p>
        </div>
    );
};