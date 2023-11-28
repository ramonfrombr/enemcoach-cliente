import React from "react";
import Link from "next/link";
import image1 from "../../static/fotos/image1.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[calc(100vh-250px)]">
      <Link
        className="bg-cyan-600 self-center text-white p-4 font-bold z-20 -mt-36"
        href="/simulado"
        data-testid="button-iniciar-simulado"
      >
        Iniciar Simulado
      </Link>
      <Image
        src={image1}
        className="absolute right-0 bottom-0 h-[250px] w-[250px] self-end"
        alt=""
      />
    </div>
  );
};

export default Hero;
