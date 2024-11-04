"use client";

import { SlideType } from "../types/slide.type";
import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { SlidDetails } from "./slide-details";

const data: SlideType[] = [
  {
    title: "Tasty Burger",
    image: "/images/b1.png",
    note: "Top Burgers",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
  },
  {
    title: "Fast Food Burger",
    image: "/images/b2.png",
    note: "Best Burgers",
    desc: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available",
  },
];

export const Slider: React.FC = () => {
  return (
    <Swiper
      className="container flex justify-center items-center bg-error w-[400px] md:w-[100%] lg:w-[100%] sm:w-[100%] md:clip_path lg:clip_path xl:clip_path"
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
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
      modules={[Autoplay, Pagination]}
    >
      <div className="flex justify-center items-center gap-5 ">
        {data.map((d, i) => (
          <SwiperSlide key={i}>
            <SlidDetails
              image={d.image}
              title={d.title}
              note={d.note}
              desc={d.desc}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};
