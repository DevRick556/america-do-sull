import Image from "next/image";

const BemVindo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 p-4 md:p-8 lg:p-12 items-center">
        {/* texto de boas vindas */}
      <div className="max-w-full lg:max-w-[900px] text-center lg:text-left">
        <h2 className="text-[22px] md:text-[28px] lg:text-[36px] font-bold p-2 md:p-4 lg:p-6">Bem-vindos a América do Sul</h2>
        <p className="mt-3 md:mt-5 lg:mt-6 text-sm md:text-[18px] lg:text-[22px] leading-5 md:leading-7 lg:leading-9 font-sans">
          A América do Sul é uma empresa especializada em projetos, manutenções
          e montagens industriais, comprometida em entregar soluções inovadoras
          e de alta performance. Nosso objetivo é superar as expectativas dos
          clientes por meio da responsabilidade, eficiência e resultados
          positivos, sempre priorizando a segurança, a preservação do meio
          ambiente e a competitividade de preços. Contamos com um rigoroso
          sistema de qualidade e somos uma empresa certificada, garantindo
          excelência em cada etapa dos nossos serviços.
        </p>
      </div>
      {/* imagem empresa */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[450px] lg:w-[500px] xl:w-[600px]">
        <Image src="/fabrica.jpg" alt="image-empresa" fill />
      </div>
    </div>
  );
};

export default BemVindo;
