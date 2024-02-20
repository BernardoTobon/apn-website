import Link from "next/link";

const Lobby = () => {
  return (
    <div className="w-full h-screen overflow-auto">
      <div className="flex justify-center">
        <img
          className="drop-shadow-2xl rounded-full h-70 w-[70vw] md:w-96 md:h-80 lg:w-96 lg:h-80 border-2 border-D-G m-6"
          src="/apn.png"
        />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center flex-col grid grid-cols-2 space-x-2 m-2">
          <Link
            className="text-center  border-2 border-D-G w-24 text-D-G rounded-full border-r-0 border-l-0 border-t-0 hover:border-T-G hover:border-t-2"
            href={""}
          >
            Fotos
          </Link>
          <Link
            className="text-center border-2 border-D-G w-24 text-D-G rounded-full border-r-0 border-l-0 border-t-0 hover:border-T-G hover:border-t-2"
            href={""}
          >
            Actividades
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
