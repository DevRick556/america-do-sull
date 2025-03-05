"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/_components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import React from "react";


const clientesImages = [
  "/logo-amazonas-shopping.png",
  "/logo-bic.png",
  "/logo-grupo-chibatao.png",
  "/logo-lg.png",
  "/logo-marinha-do-brasil.png",
  "/logo-petroleo-sabba.png",
  "/logo-sodecia.png",
  "/logo-taboca.png",
  "/logo-teikon.png",
  "/logo-vivante.png",
  "/logo-weg.png",
  "/logo-yamaha.png"
];
const Clientes = () => {

        const plugin = React.useRef(
            Autoplay({ delay: 2000, stopOnInteraction: true })
          )
    
  return (
    <Carousel className="p-2"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent>
        {clientesImages.map((cliente, index) => (
          <CarouselItem
            key={index}
            className="basis-1/4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="relative h-16 bg-white w-full rounded-lg">
              <Image
                fill
                alt="cliente-image"
                src={cliente}
                className="object-contain rounded-lg"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Clientes;
