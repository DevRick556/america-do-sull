import Hero from "./_components/hero";
import Qualidades from "./_components/qualidades";
import Servicos from "./_components/servicos";

const  HomePage = () => {
  return ( 
    <div className="w-full items-center justify-center space-y-6">
      <Hero/>
      <div className="p-4">
        <Qualidades/>
      </div>
      <h2 className=" ml-4 font-semibold">Serviços</h2>
      <div className="p-4 mt-4 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        <Servicos />
        <Servicos />
        <Servicos />
      </div>
    </div>
  );
}

export default HomePage
