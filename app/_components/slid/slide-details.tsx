import Image from "next/image";
import { SlideType } from "../types/slide.type";

export const SlidDetails: React.FC<SlideType> = ({
  image,
  title,
  note,
  desc,
}) => {
  return (
    <div className="flex">
      <figure className="w-full">
        <Image
          src={image}
          width={3000}
          height={1000}
          alt="slider-pics"
          className="w-[1000px] h-auto"
        />
      </figure>
      <div className="flex flex-col justify-start gap-2">
        <div className="w-[250px] flex flex-col justify-start gap-2">
          <p className="text-5xl font-bold text-white">{title}</p>
          <p className="text-7xl font-bold text-warning uppercase">{note}</p>
        </div>
        <p className="text-white">{desc}</p>
      </div>
    </div>
  );
};
