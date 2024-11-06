"use client";

import { Autoplay, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { BurgerType } from "../types/burger.type";
import { BurgerDetails } from "./burger-details";

const burgers: BurgerType[] = [
  {
    image: "/images/b1.png",
    title: "چیکن برگر",
    rate: 6,
    price: 350.0,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
  {
    image: "/images/b2.png",
    title: "همبرگر",
    rate: 6,
    price: 350.0,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
  {
    image: "/images/b3.png",
    title: "ماشروم برگر",
    rate: 6,
    price: 350.0,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
  {
    image: "/images/b6.png",
    title: "رویال برگر",
    rate: 6,
    price: 350.0,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
  {
    image: "/images/b5.png",
    title: "ماشروم برگر",
    rate: 6,
    price: 350.0,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
  {
    image: "/images/b6.png",
    title: "برگر ذغالی",
    rate: 6,
    price: 350.0,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
  {
    image: "/images/b7.png",
    title: "چیزبرگر",
    rate: 6,
    price: 350.0,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
  {
    image: "/images/b5.png",
    title: "برگر ترکی",
    rate: 6,
    price: 350.0,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
  {
    image: "/images/b5.png",
    title: "برگر مخصوص",
    rate: 6,
    price: 350.0,
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است",
  },
];

export const PopularBurgers: React.FC = () => {
  return (
    <>
      <h2 className="heading text-neutral-content mt-14">
        برگــرهای محبــوب ما
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={false}
        className="w-[400px] rounded-2xl gap-5 p-2 mx-auto mt-8 mb-14 flex justify-center items-center md:w-[80%] lg:w-[80%] sm:w-[90%]"
        autoplay={{
          delay: 4000, // Delay between transitions in milliseconds (default: 3000)
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions (default: true)
        }}
        breakpoints={{
          640: {
            autoplay: {
              delay: 4000, // Faster autoplay on mobile
            },
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        <div className="flex justify-center items-center gap-5 w-full ">
          {burgers.map((burger, i) => (
            <SwiperSlide key={i}>
              <BurgerDetails
                image={burger.image}
                title={burger.title}
                rate={burger.rate}
                desc={burger.desc}
                price={burger.price}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
