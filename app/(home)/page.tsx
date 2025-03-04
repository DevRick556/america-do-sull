import AreaDeAtucao from "./_components/AreaAtuacao";
import BemVindo from "./_components/bem-vindo";
import Contato from "./_components/contato";
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
      <div>
        <Qualidades />
      </div>
      <div className="p-4 mt-4 flex gap-3 overflow-x-scroll [&&::-webkit-scrollbar]:hidden">
        <Servicos />
        <Servicos />
        <Servicos />
      </div>
      <div>
        <AreaDeAtucao/>
      </div>
      <div>
        <Contato/>
      </div>

    </div>
  );
};

export default HomePage;
