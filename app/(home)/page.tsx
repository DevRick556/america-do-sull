


import AreaDeAtucao from "./_components/AreaAtuacao";
import BemVindo from "./_components/bem-vindo";
import Clientes from "./_components/clientes";
import Contato from "./_components/contato";

import Hero from "./_components/hero";
import Qualidades from "./_components/qualidades";
import Servicos from "./_components/servicos";

const HomePage = () => {

  return (
    <div>
      <Hero />
      {/* sobre */}

        <div className="gap-4" id="sobre">
          <BemVindo />
        </div>
      <div className="p-4">
        <Qualidades/>
      </div>

      <div id="servicos" className="p-4 mt-5 flex gap-5 py-5 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      <h2 className="items-center ml-4 font-semibold">Serviços</h2>
        <Servicos/>
        <Servicos/>
        <Servicos/>
      </div>
      {/* area de atuação */}
      <div id="areadeatuacao">
        <AreaDeAtucao/>
      </div>

      <div className="mt-4" id="clientes">
        <h2 className=" ml-4 font-semibold text-2xl text-center">Nossos Clientes</h2>
      </div>
      <div className="py-4">
        <Clientes/>
      </div>
      <div>
      <Contato/>
      </div>
    </div> 
   );

}

export default HomePage

