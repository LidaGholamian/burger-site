"use client";

import { NavigationMenuItems } from "@/app/types/navigation-menu-items";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

const menuItems: NavigationMenuItems[] = [
  {
    title: "منو",
    href: "/menu",
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

export const NavItem: React.FC = () => {
  const pathName = usePathname();
  return (
    <ul className="hidden md:flex lg:flex items-center gap-5">
      {menuItems.map((items) => {
        const isActive = pathName === items.href;
        return (
          <li key={`navigation-${items.href}`}>
            <Link
              href={items.href}
              className={`group relative flex gap-2 hover:text-primary transition-colors pb-2 ${
                isActive && "border-b-2 text-primary border-primary/20"
              }`}
            >
              {items.title}
              {items.children && (
                <IoIosArrowDown className="mt-1 transition-all rotate-180 group-hover:rotate-0" />
              )}

              {/* dropdoen */}
              {items.children && (
                <div className="text-neutral-base absolute right-0 top-8 hidden w-[150px] flex-col bg-white pt-2 pb-3 px-3 transition-all group-hover:flex group gap-6 ">
                  {items.children.map((ch, i) => (
                    <div key={i} className="flex cursor-pointer items-center ">
                      <p className="flex justify-between items-center cursor-pointer gap-2 w-full text-grey">
                        <span className="hover:text-primary">{ch.title}</span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
