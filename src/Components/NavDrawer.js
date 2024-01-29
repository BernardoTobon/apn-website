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
        <div className="border-4 border-D-G rounded-lg p-2 h-full space-y-2">
          {/* Botón para cerrar el menú */}
          <button className="p-1 w-8 h-10" onClick={() => setIsOpen(false)}>
            {backIcon}
          </button>
          {/* Contenido del menú */}

          <div>
            <Link className="flex items-center gap-2 m-4 text-D-G" href={""}>
              {homeIcon}
              Inicio
            </Link>
          </div>
          <div>
            <Link className="flex items-center gap-2 m-4 text-D-G" href={""}>
              {homeIcon}
              calificanos
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
export default NavDrawer;
