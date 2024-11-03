"use client";

import { NavigationMenuItems } from "@/app/types/navigation-menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const menuItems: NavigationMenuItems[] = [
  {
    title: "منو",
    href: "/",
    children: [
      { title: "همبرگر", href: "/burger" },
      { title: "چیزبرگر", href: "/cheesburger" },
      { title: "ماشروم‌برگر", href: "/mashroomburger" },
    ],
  },
  { title: "وبلاگ", href: "/blog" },
  { title: "تماس با ما", href: "/contact-us" },
  { title: "درباره ما", href: "/about-us" },
];

export function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  const pathName = usePathname();
  return (
    <div className="fixed justify-start right-0 top-0 h-full w-full min-h-screen bg-grey/80 md:hidden lg:hidden">
      {/* nav div */}
      <div className="h-full w-[70%] bg-white px-4 py-4 rounded-l-lg">
        {/* nav links */}
        <section className="flex justify-end mb-4">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="text-neutral_content cursor-pointer text-2xl"
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          <ul className="flex flex-col items-start gap-5">
            {menuItems.map((items, i) => (
              <SingleNavItem key={i} title={items.title} href={items.href}>
                {items.children}
              </SingleNavItem>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function SingleNavItem(d: NavigationMenuItems) {
  const [isItemOpen, setIsItemOpen] = useState(false);

  const [animationParent] = useAutoAnimate();

  function toggleItem() {
    return setIsItemOpen(!isItemOpen);
  }
  return (
    <Link
      ref={animationParent}
      className="text-accent font-bold px-2 py-3 transition-all relative group"
      href={d.href ?? "#"}
    >
      <p
        onClick={toggleItem}
        className="text-accent flex items-center cursor-pointer gap-2 group-hover:text-neutral"
      >
        <span>{d.title}</span>
        {d.children && (
          <IoIosArrowDown
            className={`mt-1 transition-all ${
              isItemOpen && "group-hover:rotate-180"
            }`}
          />
        )}
      </p>

      {isItemOpen && d.children && (
        <div className="text-neutral-base w-[150px] flex-col bg-white pt-4 pb-3 px-3 transition-all flex group gap-6 ">
          {d.children.map((ch, i) => (
            <div key={i} className="flex cursor-pointer items-center ">
              <p className="flex justify-between items-center cursor-pointer gap-2 w-full hover:text-neutral-content">
                <span>{ch.title}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </Link>
  );
}
