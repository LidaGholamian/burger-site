import Image from "next/image";
import { SlideType } from "../types/slide.type";

export const CardDetails: React.FC<SlideType> = ({ title, image, desc }) => {
  return (
    <div className="w-[100%] mx-auto p-2 hover:bg-grey-content lg:translate-y-[50px] xl:translate-y-[50px]  rounded-lg transition-all duration-200 flex flex-col justify-center items-center">
      <figure>
        <Image
          src={image}
          width={1000}
          height={557}
          alt="feat-pic"
          className="rounded-3xl w-[1000px] h-auto"
        />
      </figure>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-grey">{desc}</p>
      </div>
    </div>
  );
};
