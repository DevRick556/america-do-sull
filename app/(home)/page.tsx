

import AreaDeAtucao from "./_components/AreaAtuacao";
import BemVindo from "./_components/bem-vindo";
import Hero from "./_components/hero";
import Qualidades from "./_components/qualidades";
import Servicos from "./_components/servicos";

const  HomePage = () => {
  return (
    <div>
      <Hero />
      {/* sobre */}
        <div className="gap-4">
          <BemVindo />
        </div>
      <div>
        <Qualidades/>
      </div>
      <div>
        <Servicos/>
      </div>
      {/* area de atuação */}
      <div>
        <AreaDeAtucao/>
      </div>
    </div> 
   );

}

export default HomePage
