"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "../button";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const HeroSection: React.FC = () => {
  return (
    <Carousel
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={false}
      infinite
      responsive={responsive}
      itemClass="item"
      showDots={true}
      transitionDuration={500}
      className="container "
    >
      {/* 1st hero slide */}
      <div className="w-[100%] h-[80vh] flex items-center justify-center bg-warning md:clip_path lg:clip_path sm:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 justify-center items-center gap-5 mx-auto">
          <figure className="w-full">
            <Image
              src="/images/b1.png"
              width={1000}
              height={1000}
              alt="slider-pics"
              className="w-[1000px] h-auto"
            />
          </figure>
          <div className="flex flex-col justify-start gap-4">
            <div className="w-[250px] flex flex-col justify-start gap-4">
              <p className="text-5xl font-bold text-white sm:text-3xl">
                Tasty Burger
              </p>
              <p className="text-7xl font-bold text-accent uppercase sm:text-5xl">
                Top Burgers
              </p>
            </div>
            <p className="text-white">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available
            </p>
            <Button
              dir="rtl"
              variant="accent"
              size="small"
              className="text-xs lg:text-xs md:text-xs w-[120px]"
            >
              <BiCycling className="text-2xl lg:text-sm md:text-sm" />
              سفارش دهید
            </Button>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[80vh] flex items-center justify-center bg-error md:clip_path lg:clip_path sm:clip_path">
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 justify-center items-center gap-5 mx-auto">
          <figure className="w-full">
            <Image
              src="/images/b2.png"
              width={1000}
              height={1000}
              alt="slider-pics"
              className="w-[1000px] h-auto"
            />
          </figure>
          <div className="flex flex-col justify-start gap-4">
            <div className="w-[250px] flex flex-col justify-start gap-4">
              <p className="text-5xl font-bold text-white sm:text-3xl">
                Fast Food Burger
              </p>
              <p className="text-7xl font-bold text-warning uppercase sm:text-5xl">
                Best Burgers
              </p>
            </div>
            <p className="text-white">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available
            </p>
            <Button
              dir="rtl"
              variant="warning"
              size="small"
              className="text-xs lg:text-xs md:text-xs w-[120px]"
            >
              <BiCycling className="text-2xl lg:text-sm md:text-sm" />
              سفارش دهید
            </Button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
