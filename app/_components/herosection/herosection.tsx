"use client";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export const HeroSection: React.FC = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      additionalTransfrom={0}
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
      <div className="w-[100%] h-[80vh] flex items-center justify-center bg-accent md:clip_path lg:clip_path sm:clip_path">
        <Image
          src="/images/b1.png"
          width={200}
          height={96}
          alt="slide"
          className="w-[900px] h-auto"
        />
        <Image
          src="/images/b2.png"
          width={200}
          height={96}
          alt="slide"
          className="w-[900px] h-auto"
        />
        <Image
          src="/images/b1.png"
          width={200}
          height={96}
          alt="slide"
          className="w-[900px] h-auto"
        />
        <Image
          src="/images/b2.png"
          width={200}
          height={96}
          alt="slide"
          className="w-[900px] h-auto"
        />
      </div>
      <div className="w-[100%] h-[80vh] flex items-center justify-center bg-accent md:clip_path lg:clip_path sm:clip_path">
        <Image
          src="/images/b1.png"
          width={200}
          height={96}
          alt="slide"
          className="w-[900px] h-auto"
        />
        <Image
          src="/images/b2.png"
          width={200}
          height={96}
          alt="slide"
          className="w-[900px] h-auto"
        />
      </div>
    </Carousel>
  );
};
