const Login = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative">
      <div className="bg-T-G h-[250px] lg:h-screen">
        <h1 className="flex justify-center text-L-B m-8">
          Andres Power Nutrition
        </h1>
      </div>
      <form>
        <div className="flex flex-col items-center justify-center absolute h-screen w-full lg:relative top-0">
          <div className="rounded-lg overflow-hidden bg-white lg:w-full w-[90%] h-[60%] flex flex-col items-center border sm:border-1 md:border-none lg:border-none">
            <h1 className="text-[18px] lg:text-[25.5px] font-semibold lg:pt-20 m-4">
              Log In
            </h1>
            <div className="flex flex-col w-full lg:w-[70%] px-4 gap-2">
              <h4 className="text-sm font-bold ">Correo Electronico</h4>
              <input
                type="email"
                className="border border-1 rounded-full text-center h-9 hover:border-F-G focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-full lg:w-[70%] px-4 gap-2">
              <h4 className="text-sm font-bold">Contraseña</h4>
              <input
                type="password"
                className="border border-2 rounded-full text-center h-9 hover:border-F-G focus:outline-none"
              />
            </div>
            <a
              href=""
              className="text-xs text-link m-2 pl-40 lg:pl-60 font-bold"
            >
              olvidaste tu contraseña?
            </a>
            <button className="bg-D-G rounded-full w-28 h-10 mt-4 hover:bg-T-G">
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
