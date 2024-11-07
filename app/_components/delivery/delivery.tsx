"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BsDoorOpen } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";

export const Delivery: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true when the component mounts
    setIsLoaded(true);
  }, []);

  return (
    <div className="pt-14 pb-7">
      <div className="w-[80%] mx-auto grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        <div className="flex flex-col gap-7 justify-start items-start">
          <h2 className="heading text-error">
            تحویل سریع سفارشات شما در هرکجا که باشید
          </h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته.
          </p>
          <div className="flex items-center gap-3">
            <MdOutlineDeliveryDining className="text-error text-3xl" />
            <p className="text-neutral-content font-medium">
              تحویل سفارشات در 30 دقیقه
            </p>
          </div>
          <div className="flex items-center gap-3">
            <IoFastFood className="text-error text-3xl" />
            <p className="text-neutral-content font-medium">تحویل رایــگان</p>
          </div>
          <div className="flex items-center gap-3">
            <BsDoorOpen className="text-error text-3xl" />
            <p className="text-neutral-content font-medium">تحویل در محل</p>
          </div>
        </div>
        <div>
          <Image
            src="/images/delivery.svg"
            width={1000}
            height={1000}
            className={`w-[1000px] h-auto transform object-cover transition-transform duration-1000 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
            alt="delivery"
          />
        </div>
      </div>
    </div>
  );
};
