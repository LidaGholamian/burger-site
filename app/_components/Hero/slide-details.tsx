import Image from "next/image";
import { SlideType } from "../types/slide.type";
import { Button } from "../button";
import { BiCycling } from "react-icons/bi";

export const SlidDetails: React.FC<SlideType> = ({
  image,
  title,
  note,
  desc,
}) => {
  return (
    <div
      dir="ltr"
      className="flex flex-col md:flex-row lg:flex-row xlLflex-row justify-center items-center mx-auto w-[100%] md:gap-10 lg:gap-10 xl:gap-14 md:pl-14 lg:pl-14 xl:pl-14"
    >
      <figure>
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="slider-pics"
          className="md:w-[1000px] lg:w-[1000px] xl:w-[1000px] w-[250px] h-auto"
        />
      </figure>
      <div className="flex flex-col justify-center items-start gap-3 p-4 w-[90%]">
        <div className="w-[400px] flex flex-col justify-start items-start gap-3">
          <p className="text-xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white">
            {title}
          </p>
          <p className="text-24xl md:text-7xl lg:text-7xl xl:text-7xl font-bold text-white uppercase">
            {note}
          </p>
        </div>
        <p className="text-white pr-5 w-[350px] text-[16px]">{desc}</p>
        <Button
          dir="rtl"
          variant="accent"
          size="small"
          className="text-xs lg:text-xs md:text-xs w-[150px]"
        >
          <BiCycling className="text-2xl lg:text-sm md:text-sm" />
          سفارش دهید
        </Button>
      </div>
    </div>
  );
};
