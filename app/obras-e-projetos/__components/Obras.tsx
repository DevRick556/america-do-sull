import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/app/_components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/app/_components/ui/dialog";
import Image from "next/image";

const Obras = () => {
    const slideImages = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
    return (
        <div className="max-w-screen-lg mx-auto"> {/* Contêiner responsivo */}
            <div className="mx-4 mt-6 gap-4">
                <Card>
                    <CardContent className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-4"> {/* Flex responsivo */}
                        <div className="flex flex-col text-center w-full md:w-auto"> {/* Largura responsiva */}
                            <h3 className="m-4">Serviços</h3>
                            <Image
                                src="/3m.jpeg"
                                alt="trabjo"
                                width={380}
                                height={250}
                                className="w-full h-auto" // Imagem responsiva
                            />
                        </div>
                        <div className="mt-4 md:mt-0 w-full md:w-auto"> {/* Margem responsiva */}
                            <div>
                                <div>Cliente: Construtora ABC</div>
                                <div>Local: São Paulo - SP</div>
                                <div>Área: 10.000m²</div>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 w-full md:w-auto">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="bg-gradient-to-r from-violet-600 to-sky-400 text-white">
                                        Ver Galeira
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[90vw] md:w-4/5 "> {/* Dialog responsivo */}
                                    <DialogHeader>
                                        <DialogTitle className="m-4">Obra</DialogTitle>
                                        <DialogDescription  className="text-xl">
                                            <div className="flex-col">
                                                <div>
                                                    Montagem das instalações de prevenção e combate a
                                                    incêndio contemplando: casa de bombas, rede de
                                                    hidrantes, rede de sprinklers, sistema de alarme e
                                                    detecção, instalação de válvulas de governo e
                                                    tubulações de diametros de 2 a 10
                                                </div>
                                            </div>
                                        </DialogDescription>
                                        <Carousel>
                                            <CarouselContent>
                                                {slideImages.map((item) => (
                                                    <Image
                                                        key={item}
                                                        width={2500}
                                                        height={2300}
                                                        alt="slide-image"
                                                        src={item}
                                                    />
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious className="ml-6" />
                                            <CarouselNext className="mr-6" />
                                        </Carousel>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Obras;