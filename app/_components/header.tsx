"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { AlignJustify } from 'lucide-react';

const Header = () => {

  const [menuCLick, setClick] = useState(false);

  const hamburguerClick = () => {
    setClick(!menuCLick)
  }

  return (

    <>
      <nav className="flex items-center justify-between bg-gradient-to-r from-violet-600 to-sky-400 text-white p-4 px-10 relative">
        {/* logo aquir */}
        <div className="ml-4"><Link href="/">
          <Image src="/logo.png" alt="logo" width={42} height={40}/>
        </Link></div>

        {/* icone do menu hamburguer */}
        <div className=" md:hidden absolute right-5">
          <button onClick={() => hamburguerClick()} className="block md:hidden">
            {menuCLick? <X size={30}/> : <AlignJustify size={30}/>}
          </button>
        </div>

        {/* header */}
        <div className="flex items-center cursor-pointer r">
          <ul className=" gap-6 mt-3 md:flex hidden">
            <li><Link href="/">Home</Link></li>
            <li> Área de Atuação</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li><Link href="/obras-e-projetos">Obras e Projetos</Link></li>
            <li>Clientes</li>
            <li><Link href="/fale-conosco">Fale Conosco</Link></li>
          </ul>
          {/* <menuHamburguer /> */}
          {menuCLick &&(
            <ul className="absolute top-full z-50 left-0 w-full bg-[#028fcc] flex flex-col items-center gap-4 py-4 md:hidden">
              <li><Link href="/" onClick={() => setClick(false)}>Home</Link></li>
              <li>Área de Atuação</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li><Link href="/obras-e-projetos" onClick={() => setClick(false)}>Obras e Projetos</Link></li>
              <li><Link href="/fale-conosco" onClick={() => setClick(false)}>Fale Conosco</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
