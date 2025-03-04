


import AreaDeAtucao from "./_components/AreaAtuacao";
import BemVindo from "./_components/bem-vindo";
import Clientes from "./_components/clientes";

import Hero from "./_components/hero";
import Qualidades from "./_components/qualidades";
import Servicos from "./_components/servicos";

const HomePage = () => {

  return (
    <div>
      <Hero />
      {/* sobre */}

        <div className="gap-4">
          <BemVindo />
        </div>
      <div className="p-4">
        <Qualidades/>
      </div>

      <h2 className=" ml-4 font-semibold">Serviços</h2>
      <div className="p-4 mt-4 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        <Servicos/>
        <Servicos/>
        <Servicos/>
      </div>
      {/* area de atuação */}
      <div>
        <AreaDeAtucao/>
      </div>

      <h2 className=" ml-4 font-semibold">Nossos Clientes</h2>
      <div className="py-4">
        <Clientes/>
      </div>
    </div> 
   );

}

export default HomePage

