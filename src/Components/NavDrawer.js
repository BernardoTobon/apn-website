import {
  backIcon,
  calendarIcon,
  hashtagsIcon,
  homeIcon,
  menuIcon,
  newUserIcon,
  recipeIcon,
  userIcon,
} from "@/icons";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const NavDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isLoginPage = router.pathname === '/login/login';
  if(isLoginPage) {
    return children
  }
  return (
    <div className="flex">
      {/* Icono para abrir el menú */}
      <button
        className="absolute w-8 h-8"
        onClick={() => setIsOpen(true)}
      >
        {menuIcon}
      </button>
      {/* Contenedor del menú desplegable */}
      <div
        className={`${isOpen ? "max-w-[500px]" : "max-w-0"}
        overflow-auto transition-all duration-500 ease-in-out h-screen bg-white fixed`}
      >
        <div className="border-4 border-D-G rounded-lg p-2 h-full space-y-2">
          {/* Botón para cerrar el menú */}
          <button className="p-1 w-8 h-10" onClick={() => setIsOpen(false)}>
            {backIcon}
          </button>
          {/* Contenido del menú */}
          <div className="pt-12 space-y-8 m-2">
            <div>
              <Link className="flex items-center gap-2 m-4 text-D-G" href={""}>
                {homeIcon}
                Inicio
              </Link>
            </div>
            <div>
              <Link className="flex items-center gap-2 m-4 text-D-G" href={""}>
                {newUserIcon}
                Nuevo usuario
              </Link>
            </div>
            <div>
              <Link className="flex items-center gap-2 m-4 text-D-G" href={""}>
                {userIcon}
                Usuarios
              </Link>
            </div>
            <div>
              <Link className="flex items-center gap-2 m-4 text-D-G" href={""}>
                {recipeIcon}
                Mis Recetas
              </Link>
            </div>
            <div>
              <Link className="flex items-center gap-2 m-4 text-D-G" href={""}>
                {calendarIcon}
                Calendario
              </Link>
            </div>
            <div>
              <Link className="flex items-center gap-2 m-4 text-D-G" href={""}>
                {hashtagsIcon}
                Hashtags
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};
export default NavDrawer;
