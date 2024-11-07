import Image from "next/image";
import { SlideType } from "../types/slide.type";

export const ChefDetails: React.FC<SlideType> = ({ image, title, desc }) => {
  return (
    <div className="w-[100%] mx-auto p-2 hover:bg-grey-content lg:translate-y-[50px] xl:translate-y-[50px]  rounded-lg transition-all duration-200 flex flex-col justify-center items-center gap-4 shadow-lg">
      <figure>
        <Image
          src={image}
          width={390}
          height={460}
          alt="feat-pic"
          className="rounded-3xl w-[390px] h-auto"
        />
      </figure>
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-grey">{desc}</p>
      </div>
    </div>
  );
};
