"use client";
import { useEffect, useRef, useState } from "react";
import { SlideType } from "../types/slide.type";
import { CardDetails } from "./card-details";

const card: SlideType[] = [
  {
    title: "برگـرهای ما",
    image: "/images/f1.jpg",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "پیشنهادات شما",
    image: "/images/f2.jpg",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    title: "چیکن برگـر",
    image: "/images/f3.jpg",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];

export const Card: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    // Create an intersection observer to observe the list element
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Set isVisible to true when the element comes into view
            observer.disconnect(); // Stop observing after the first intersection
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the component is in view
    );

    if (listRef.current) {
      observer.observe(listRef.current);
    }

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  return (
    // without map function
    // <ul
    //   className={`flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-10 w-full transform transition-transform duration-700 ${
    //     isLoaded ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
    //   }`}
    // >
    //   {/* without map function */}
    //   <li className="w-[100%] gap-4 mx-auto p-2 hover:bg-grey-content lg:translate-y-[50px] xl:translate-y-[50px]  rounded-lg transition-all duration-200 flex flex-col justify-center items-center">
    //     <figure>
    //       <Image
    //         src="/images/f1.jpg"
    //         width={1000}
    //         height={557}
    //         alt="feat-pic"
    //         className="rounded-3xl w-[1000px] h-auto"
    //       />
    //     </figure>
    //     <div className="flex flex-col justify-center items-center gap-2">
    //       <h2 className="font-bold text-lg">برگـرهای ما</h2>
    //       <p className="text-grey">
    //         خوشمزه‌ترین طعم برگر را با ما در بایت برگر تجربه کنید، طعمی که هرگز
    //         فراموش نخواهید کرد!
    //       </p>
    //     </div>
    //   </li>

    //   <li className="w-[100%] gap-4 mx-auto p-2 hover:bg-grey-content lg:translate-y-[50px] xl:translate-y-[50px] mt-20 rounded-lg transition-all duration-200 flex flex-col justify-center items-center">
    //     <figure>
    //       <Image
    //         src="/images/f2.jpg"
    //         width={1000}
    //         height={557}
    //         alt="feat-pic"
    //         className="rounded-3xl w-[1000px] h-auto"
    //       />
    //     </figure>
    //     <div className="flex flex-col justify-center items-center gap-2">
    //       <h2 className="font-bold text-lg">آشپـزهای حرفــه‌ای</h2>
    //       <p className="text-grey">
    //         ما بهترین آشپزها با تجربه بین‌المللی را برای شما در نظر گرفته‌ایم تا
    //         تجربه‌ای لذت‌بخش را برای شما به ارمغان بیاوریم!
    //       </p>
    //     </div>
    //   </li>

    //   <li className="w-[100%] gap-4 mx-auto p-2 hover:bg-grey-content lg:translate-y-[50px] xl:translate-y-[50px]  rounded-lg transition-all duration-200 flex flex-col justify-center items-center">
    //     <figure>
    //       <Image
    //         src="/images/f3.jpg"
    //         width={1000}
    //         height={557}
    //         alt="feat-pic"
    //         className="rounded-3xl w-[1000px] h-auto"
    //       />
    //     </figure>
    //     <div className="flex flex-col justify-center items-center gap-2">
    //       <h2 className="font-bold text-lg">انواع برگر</h2>
    //       <p className="text-grey">
    //         کافی‌ست اراده کنید! هر نوع برگر با هر طعمی که بخواهید، ما برای شما
    //         آماده خواهیم کرد!
    //       </p>
    //     </div>
    //   </li>

    //   {/* use map function */}
    //   {/* {card.map((c, i) => (
    //     <li
    //       key={i}
    //       className={`w-full flex justify-center items-center transform transition-transform duration-700 ${
    //         isLoaded ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
    //       }`}
    //     >
    //       <CardDetails title={c.title} image={c.image} desc={c.desc} />
    //     </li>
    //   ))} */}
    // </ul>
    <ul
      ref={listRef}
      className="flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-10 w-full"
    >
      {card.map((c, i) => (
        <li
          key={i}
          className={`w-full flex justify-center items-center transform transition-transform duration-700 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
          style={{ transitionDelay: `${i * 200}ms` }} // Delay for effect
        >
          <CardDetails title={c.title} image={c.image} desc={c.desc} />
        </li>
      ))}
    </ul>
  );
};
