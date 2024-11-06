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
    title: "برگــرهای خوشمزه",
    image: "/images/b1.png",
    note: "بهترین برگرها",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه",
  },
  {
    title: "کیفیت بالا",
    image: "/images/b2.png",
    note: "طعم لذیذ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه",
  },
];

export const Slider: React.FC = () => {
  return (
    <Swiper
      className="container flex justify-center items-center bg-coffee h-[100vh] w-[400px] md:w-[100%] lg:w-[100%] sm:w-[100%] md:clip_path lg:clip_path xl:clip_path pb-10"
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
      <div className="flex justify-center items-center">
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
