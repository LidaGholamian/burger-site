"use client";

import React, { useEffect, useState } from "react";
import { FaBurger } from "react-icons/fa6";
import { NavItem } from "./navItem";
import { usePathname } from "next/navigation";
import { Cart } from "./cart";
import { FiMenu } from "react-icons/fi";
import { Button } from "../button";
import { MobileNav } from "./mobileNav";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const Nav: React.FC = () => {
  const [sideMenuOpen, setSideMenu] = useState(false);
  const [animationParent] = useAutoAnimate();

  useEffect(() => {
    if (sideMenuOpen) {
      // Disable background scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable background scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sideMenuOpen]);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }
  return (
    <div className="h-[12vh] bg-white">
      <div
        ref={animationParent}
        className="sm:w-[90%] w-[95%] mx-auto flex h-[100%] items-center justify-between"
      >
        {/*logo*/}
        <div className="flex items-center text-accent">
          <FaBurger className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
          <h1 className="text-[20px] sm:text-[30px] font-semibold mr-2">
            BurgerBite
          </h1>
        </div>
        {sideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        {/* large screen menu */}
        <div>
          <NavItem />
        </div>
        {/* left side button and hamburger menu */}
        <div className="cursor-pointer sm:hidden md:flex lg:flex hidden">
          <Button variant="accent" size="small">
            ورود | ثبت‌نام
          </Button>
        </div>

        <FiMenu
          onClick={openSideMenu}
          className="md:hidden lg:hidden cursor-pointer text-3xl text-accent"
        />
      </div>
    </div>
  );
};
