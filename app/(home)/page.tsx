import Hero from "./_components/hero";
import Qualidades from "./_components/qualidades";

const  HomePage = () => {
  return ( 
    <>
      <h1 className="bg-500">Home</h1> 
      <div className="w-full items-center justify-center space-y-6">
        <Hero/>
        <div >
          <Qualidades/>
        </div>
      </div>
    </>
);
}

export default HomePage
