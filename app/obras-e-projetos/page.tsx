import Obras from "./__components/Obras";

const ObrasEProjetosPage = () => {
    return ( 
        <div>
            <h1 className="m-4 text-center ">Obras e Projetos</h1>
            <div className="grid grid-cols-2 gap-4 mt-6 mx-4">
                <Obras/>
                <Obras/>
                <Obras/>
                <Obras/>
            </div>
        </div>
     );
}
 
export default ObrasEProjetosPage;