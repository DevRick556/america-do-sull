import Hero from "./_components/hero";
import Qualidades from "./_components/qualidades";
import Servicos from "./_components/servicos";

const  HomePage = () => {
  return ( 
    <div className="w-full items-center justify-center space-y-6">
      <Hero/>
      <div>
        <Qualidades/>
      </div>
      <div className="p-4 space-y-3">
      <h2>Serviços</h2>
        <Servicos />
      </div>
    </div>
  );
}

export default HomePage
