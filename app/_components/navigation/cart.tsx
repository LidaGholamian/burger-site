"use client";

import { BiCycling } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { Button } from "../button";

export const Cart: React.FC = () => {
  return (
    <div className="hidden md:flex md:gap-2 lg:flex lg:gap-4">
      <Button
        variant="accent"
        size="tiny"
        className="text-xs lg:text-xs md:text-xs"
      >
        <BiCycling className="text-2xl lg:text-sm md:text-sm" />
        سفارش دهید
      </Button>
      <Button
        variant="accent"
        size="tiny"
        className="text-xs lg:text-xs md:text-xs"
      >
        <FaShoppingBag className="text-xl lg:text-sm md:text-sm" />
        سبد خرید
      </Button>
    </div>
  );
};
