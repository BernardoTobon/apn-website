import { backIcon, homeIcon, menuIcon } from "@/icons";
import Link from "next/link";
import { useState } from "react";

const NavDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex">
      {/* Icono para abrir el menú */}
      <button
        className="absolute z-20  w-8 h-8"
        onClick={() => setIsOpen(true)}
      >
        {menuIcon}
      </button>
      {/* Contenedor del menú desplegable */}
      <div
        className={`${isOpen ? "max-w-[500px]" : "max-w-0"}
        overflow-auto transition-all duration-500 ease-in-out h-screen bg-white z-20 fixed`}
      >
        <div className="border-4 border-D-G rounded-lg p-2 w-fit h-full">
          {/* Botón para cerrar el menú */}
          <button
            className="w-fit p-1 w-8 h-8 duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            {backIcon}
          </button>
           {/* Contenido del menú */}
          <div>
            <div className="px-4 pb-4">
              <div className="grid grid-rows-4 gap-4">
                <div>
                  <Link className="flex items-center gap-7 border-2 border-black" href={""}>
                    {homeIcon}
                    Inicio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavDrawer;
