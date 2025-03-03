"use client"

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/app/_components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import React from "react";

const slideImages = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

const Hero = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
      )

  return (
    <Carousel 
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}
    >
      <CarouselContent>
        {slideImages.map((item) => (
            <Image key={item} width={1920} height={800} alt="slide-image" src={item} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-16" />
      <CarouselNext className="mr-16" />
    </Carousel>
  );
};

export default Hero;
