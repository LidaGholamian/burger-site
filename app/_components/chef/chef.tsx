"use client";

import { useEffect, useRef, useState } from "react";
import { SlideType } from "../types/slide.type";
import { ChefDetails } from "./chef-details";

const chef: SlideType[] = [
  {
    image: "/images/t1.jpg",
    title: "سرآشــپز",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
  },
  {
    image: "/images/t2.jpg",
    title: "آشــپز ارشد",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
  },
  {
    image: "/images/t3.jpg",
    title: "دستیار ارشد",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ",
  },
];

export const Chef: React.FC = () => {
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
    <ul
      ref={listRef}
      className="flex flex-col mx-auto md:flex-row lg:flex-row xl:flex-row justify-center items-center gap-10 rounded-xl mb-32 mt-5 w-[80%]"
    >
      {chef.map((ch, i) => (
        <li
          key={i}
          className={`w-full flex justify-center items-center transform transition-transform duration-700 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-40 opacity-0"
          }`}
          style={{ transitionDelay: `${i * 200}ms` }} // Delay for effect
        >
          <ChefDetails title={ch.title} image={ch.image} desc={ch.desc} />
        </li>
      ))}
    </ul>
  );
};
