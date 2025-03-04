
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/_components/ui/accordion";


const AreaDeAtucao = () => {
  const areaAtucao = [
    {
      title: "Óleo & Gás",
      items: [
        "Montagem de clusters;",
        "Montagem/soldagem de dutos;",
        "Montagem/ soldagem de linhas de gás",
        "Instalação de TIE-INS;",
        "Instalação de Vasos de pressão;",
        "Fabricação e montagem de estrutura metálica;",
      ],
    },
    {
      title: "Sistema de prevenção e combate a incêndio",
      items: [
        "Instalação de rede de hidrantes;",
        "Instalação de rede de sprinklers;",
        "Instalação de alarme e detecção;",
        "Manutenção preventiva e corretiva.",
        "Instalação de Vasos de pressão;",
        "Fabricação e montagem de estrutura metálica;",
      ],
    },
    {
      title: "Utilidades",
      items: [
        "Redes de água gelada; água quente;",
        "Redes de vapor/condensado;",
        "Redes de água industrial;",
        "Rede de óleo térmico;",
        "Redes de combate a incêndio /sprinklers;",
        "Redes de gases Industriais e medicinais;",
        "Redes de ar comprimido.",
      ],
    },
    {
      title: "Estrutura Metálica",
      items: [
        "Confecção e Montagem de estruturas metálicas / Mezaninos, suportes em geral;",
      ],
    },
    {
      title: "Rede de Gases Medicinais",
      items: [
        "Rede de oxigênio",
        "Rede de ar comprimido medicinal;",
        "Rede de vácuo;",
        "Rede de óxido nitroso;",
      ],
    },
    {
      title: "Mecânicas / Caldeiraria",
      items: [
        "Instalações de Máquinas e Equipamentos, como compressores (alta e baixa pressão), bombas d’água, bombas de vácuo (a óleo e anel liquido), injetoras, extrusoras, fabricação de spool´s e outros.",
      ],
    },
    {
      title: "Civil / Elétrica",
      items: [
        "Obras e reformas em geral;",
        "Estruturação civil em geral para instalação de máquinas e equipamentos;",
        "Confecção e implantação de projetos e mudanças arquitetônicas;",
        "Rede de óleo térmico;",
        "Construção de infra e supra estruturas;",
        "Instalações e manutenção elétrica de baixa tensão;",
      ],
    },
  ]
  return (
    
    <div className="gap-6 px-6 text-base sm:text-lg md:text-xl lg:text-2x">
      
      {/* area de atução */}
      <div className="mt-5 p-2 text-center text-2xl">
        <h1 className="underline decoration-solid">Área de Atuação / Nossas Soluções</h1>
      </div>

      {/* listas de atuação */}
      <div className="flex justify-center text-xl">
        <div className="w-full max-w-[1200px]">
          <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 p-4 md:p-8">
            {/* Óleo & Gás */}
            {
              areaAtucao.map((area) => {
                return (
                  <Accordion key={area.title} type="single" collapsible className="w-full md:flex md:justify-center sm:text-le">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>
                        {area.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="list-disc text-left">
                          {area.items.map((item) => {
                            return <li key={item}>{item}</li>
                          })}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              })
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDeAtucao;
