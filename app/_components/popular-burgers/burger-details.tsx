"use client";
import Image from "next/image";
import { BurgerType } from "../types/burger.type";
import { StarRating } from "../star-rating/star-rating";
import { Button } from "../button";
import { FaShoppingBag } from "react-icons/fa";

export const BurgerDetails: React.FC<BurgerType> = ({
  image,
  title,
  desc,
  price,
}) => {
  return (
    <div className="mx-auto p-2 m-4 bg-white rounded-2xl shadow-xl flex flex-col justify-center items-center">
      <figure>
        <Image
          src={image}
          width={250}
          height={300}
          alt="pop-pic"
          className="rounded-3xl w-[250px] h-auto"
        />
      </figure>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="font-bold md:text-lg lg:text-lg xl:text-lg">{title}</p>
        <StarRating totalStars={5} />
        <p className="text-grey text-sm pr-3 pl-2">{desc}</p>
        <div className="flex justify-between w-full md:pr-3 md:pl-3 md:pb-3 items-center">
          <Button variant="accent" size="tiny">
            <FaShoppingBag className="text-sm" />
          </Button>
          <p className="text-warning text-sm font-semibold">{price} تومان</p>
        </div>
      </div>
    </div>
  );
};
