"use client";

import Image from "next/image";
import { useState } from "react";
import Forbes from "@/assets/images/scrollBanner/Forbes.png"
import Ebene from "@/assets/images/scrollBanner/Ebene.png"
import FTimes from "@/assets/images/scrollBanner/FTimes.png"
import type { StaticImageData } from "next/image";

interface Item {
  quote: string;
  logo: StaticImageData;
  fontSize?: string;
}
const items: Item[] = [
  {
    quote: "\"Your one stop solution to feeling energised and focused.",
    logo: Forbes,
    fontSize: "text-[22px]",
  },
  {
    quote: "\"A revelation. Not just about looking better and feeling better. LYMA is about real health benefits.",
    logo: Ebene,
    fontSize: "text-[25px]",
  },
  {
    quote: "\"Experts are queuing up to praise LYMA.",
    logo: Ebene,
    fontSize: "text-[25px]",
  },
    {
    quote: "\"Experts are queuing up to praise LYMA.",
    logo: Ebene,
    fontSize: "text-[25px]",
  },
  { quote: "\"The A-list secret health hack.", logo: FTimes, fontSize: "text-[21px]" },
];

const cardWidth = 423;
const visibleCards = 3;

export default function ScrollBanner() {
  const [startIndex, setStartIndex] = useState(0);

  const maxIndex = items.length - visibleCards;

  const handleCardClick = (idx: number) => {
    const centerIndex = startIndex + Math.floor(visibleCards / 2);

    if (idx < centerIndex && startIndex > 0) {
      setStartIndex((prev) => Math.max(prev - 1, 0));
    } else if (idx > centerIndex && startIndex < maxIndex) {
      setStartIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  return (
    <div className="mb-[90px] mt-[104px] flex flex-col items-center overflow-hidden">
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * cardWidth}px)`,
            width: `${items.length * cardWidth}px`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(idx)}
              className="w-[395px] h-[222px] flex-shrink-0 mr-[28px] flex flex-col justify-between items-center bg-white text-center cursor-pointer">
              <p className={`text-gray-800 max-w-[329px] font-medium leading-[30px] tracking-[0.8px] ${
              item.fontSize ?? "text-base"}`}> {item.quote}"</p>
             <Image src={item.logo} alt="Logo" className="mt-[24px] object-contain"/>
            </div>
          ))}
        </div>
      </div>


      <div className="flex gap-[10px] mt-[25px]">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <div
            key={idx}
            className={`w-[10px] h-[10px] transition-colors duration-300 ${
              startIndex === idx ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
