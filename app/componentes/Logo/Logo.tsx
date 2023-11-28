import React from "react";
import logo from "../../static/fotos/logo.png";
import Image from "next/image";
import { Croissant_One } from "next/font/google";

const croissantOne = Croissant_One({ weight: "400", subsets: ["latin"] });

const Logo = () => {
  return (
    <div className="flex items-center w-auto">
      <Image className="h-[30px] rounded mr-2 w-auto" src={logo} alt="" />
      <span className={`text-[25px] ${croissantOne.className}`}>
        ENEM Coach
      </span>
    </div>
  );
};

export default Logo;
