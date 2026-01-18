import Image from "next/image";
import laser from "@/assets/images/laser.jpg";
import supplement from "@/assets/images/supplement.jpg";
import Link from "next/link";

export default function SecondBanner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-[16px] gap-5">
      
      <div className="relative flex items-center justify-center w-full h-[500px]">
        <Image src={laser} alt="laser"
          className="absolute w-full h-full object-cover top-0 left-0"
          />

        <div className="relative z-10 flex flex-col items-center text-center text-white gap-4 px-4 mt-[20px]">
          <h2 className="text-3xl font-bold tracking-[1px]">LASER TECHNOLOGY</h2>
          <p className="text-base max-w-[400px] font-medium tracking-[0.5px]">
            Advanced laser treatments to rejuvenate your skin and health.
          </p>
          <div className="flex gap-4 mt-3">
            <Link
              href="/laser"
              className="flex items-center justify-center border-b border-white min-w-[150px] h-[36px] text-white tracking-[2px] hover:bg-white hover:text-black transition-colors"
            >
              LASER
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center border-b border-white min-w-[150px] h-[36px] text-white tracking-[2px] hover:bg-white hover:text-black transition-colors"
            >
              BUY
            </Link>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[500px] flex items-center justify-center">
        <Image
          src={supplement}
          alt="supplement"
          className="absolute w-full h-full object-cover top-0 left-0"
        />
        <div className="relative z-10 flex flex-col items-center text-center text-white gap-4 px-4 mt-[20px]">
          <h2 className="text-3xl font-bold tracking-[1px]">SUPPLEMENT</h2>
          <p className="text-base max-w-[400px] font-medium tracking-[0.5px]">
            Natural supplements to support your overall wellness.
          </p>
          <div className="flex gap-4 mt-">
            <Link
              href="/supplement"
              className="flex items-center justify-center border-b border-white min-w-[150px] h-[36px] text-white tracking-[2px] hover:bg-white hover:text-black transition-colors"
            >
              SUPPLEMENT
            </Link>
              <Link
              href="/info"
              className="flex items-center justify-center border-b border-white min-w-[150px] h-[36px] text-white tracking-[2px] hover:bg-white hover:text-black transition-colors"
            >
              BUY
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
