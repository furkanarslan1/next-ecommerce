import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative h-[100px] md:h-[400px] ">
      <Image
        src="/hero-3.webp"
        alt="home-hero-image"
        fill
        className="object-contain object-center "
      />
    </div>
  );
}
