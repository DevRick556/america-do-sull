import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/app/_components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/app/_components/ui/dialog";

import Image from "next/image";

const slideImages = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

const Servicos = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="flex justify-between items-center">
          <div className="mt-4 h-[100px] w-[100px] bg-white text-black">
            serviço 1
          </div>
          <div className="w-32 space-y-6">
            <h4>Serviço 1</h4>
            <Dialog>
              <DialogTrigger >
                
                <Button className="bg-gradient-to-r from-violet-600 to-sky-400">
                  Ver Galeira
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Serviço</DialogTitle>
                <DialogDescription>Descrição do Serviço</DialogDescription>
                <Carousel className="w-full">
                  <CarouselContent>
                    {slideImages.map((item) => (
                      <Image
                        key={item}
                        width={1920}
                        height={1000}
                        alt="slide-image"
                        src={slideImages[0]}
                      />
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="ml-16" />
                  <CarouselNext className="mr-16" />
                </Carousel>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Servicos;
