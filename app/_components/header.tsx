"use client";

import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// import { AlignJustify } from 'lucide-react';

const Header = () => {
  const navBar = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "Sobre", link: "/#sobre" },
    { id: 3, name: "Serviços", link: "/#servicos" },
    { id: 4, name: "Área de Atuação", link: "/#areadeatuacao" },
    { id: 5, name: "Obras e Projetos", link: "/obras-e-projetos" },
    { id: 6, name: "Clientes", link: "/#clientes" },
    { id: 7, name: "Fale Conosco", link: "/fale-conosco" },
  ];

  const [menuCLick, setClick] = useState(false);

  const hamburguerClick = () => {
    setClick(!menuCLick);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-violet-600 to-sky-400 shadow-md">
        {/* logo aquir */}
        <div className="flex items-center justify-between px-6 py-4">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={42} height={40} />
            </Link>

          {/* icone do menu hamburguer */}
          <div className="absolute right-5 md:hidden">
            <button
              onClick={() => hamburguerClick()}
              className="block md:hidden"
            >
              {menuCLick ? <X size={30} /> : <AlignJustify size={30} />}
            </button>
          </div>

          {/* header */}
          <div className="flex cursor-pointer items-center">
            <ul className="mt-3 hidden gap-6 md:flex">
              {navBar.map((item) => {
                return (
                  <Link key={item.id} href={item.link}>
                    <li className="rounded-lg p-3 transition duration-150 hover:backdrop-brightness-90 focus:outline-2">
                      {item.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
            {/* <ul className=" gap-6 mt-3 md:flex hidden">
            <li className=" hover:bg-[#028fcc] focus:outline-2"><Link href="/">Home</Link></li>
            <li><Link href="/#sobre">Sobre</Link></li>
            <li><Link href="/#servicos">Serviços</Link></li>
            <li><Link href="/#areadeatuacao">Área de Atuação</Link></li>
            <li><Link href="/obras-e-projetos">Obras e Projetos</Link></li>
            <li><Link href="/#clientes">Clientes</Link></li>
            <li><Link href="/fale-conosco">Fale Conosco</Link></li>
          </ul> */}
            {/* <menuHamburguer /> */}
            {menuCLick && (
              // <ul className="absolute top-full z-50 left-0 w-full bg-[#028fcc] flex flex-col items-center gap-4 py-4 md:hidden">
              //   {navBar.map((item) => {
              //     return (
              //       <Link key={item.id} href={item.link}>
              //         <li className="rounded-lg p-3 transition duration-150 hover:backdrop-brightness-90 focus:outline-2" onClick={() => setClick(false)}>
              //           {item.name}
              //         </li>
              //       </Link>
              //     );
              //   })}
              // </ul>

              <ul className="absolute left-0 top-full z-50 flex w-full flex-col items-center gap-4 bg-gradient-to-r from-violet-600 to-sky-400 py-4 md:hidden">
                <li>
                  <Link href="/" onClick={() => setClick(false)}>
                    Home
                  </Link>
                </li>
                <li>Sobre</li>
                <li>
                  <Link href="/#servicos" onClick={() => setClick(false)}>
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link href="/#servicos" onClick={() => setClick(false)}>
                    Área de Atuação
                  </Link>
                </li>
                <li>
                  <Link
                    href="/obras-e-projetos"
                    onClick={() => setClick(false)}
                  >
                    Obras e Projetos
                  </Link>
                </li>
                <li>
                  <Link href="/#clientes" onClick={() => setClick(false)}>
                    Clientes
                  </Link>
                </li>
                <li>
                  <Link href="/fale-conosco" onClick={() => setClick(false)}>
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
