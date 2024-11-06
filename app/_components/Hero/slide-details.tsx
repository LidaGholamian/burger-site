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
    <div className="flex justify-center items-center mx-auto gap-10 w-[100%] xl:gap-14 md:pl-14 lg:pl-14 xl:pl-14 pb-24">
      <figure>
        <Image
          src={image}
          width={1000}
          height={1000}
          alt="slider-pics"
          className="md:w-[1000px] lg:w-[1000px] xl:w-[1000px] w-[1000px] h-auto pr-5"
        />
      </figure>
      <div className="flex flex-col justify-center items-start gap-5 w-[65%] text-white pr-10">
        <div className="w-[400px] flex flex-col justify-start items-start gap-4">
          <p className=" md:text-5xl lg:text-5xl xl:text-5xl font-bold ">
            {title}
          </p>
          <p className=" md:text-3xl lg:text-3xl xl:text-3xl font-bold">
            {note}
          </p>
        </div>
      </div>
    </div>
  );
};
