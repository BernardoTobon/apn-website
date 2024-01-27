import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 relative">
      <div className="md:bg-cover lg:bg-cover h-screen bg-left bg-[url('/apn.png')] h-[250px] lg:h-screen">
        <h1 className="flex justify-center text-D-G m-8 font-bold text-2xl lg:hidden">
          Andres Power Nutrition
        </h1>
      </div>
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
      >
        <div className="flex flex-col items-center justify-center absolute h-screen w-full lg:relative top-0">
          <div className="rounded-lg overflow-hidden bg-white lg:w-full w-[90%] h-[60%] flex flex-col items-center border sm:border-1 md:border-none lg:border-none">
            <h1 className="text-[18px] lg:text-[25.5px] text-D-G font-semibold lg:pt-20 m-4">
              Log In
            </h1>
            <div className="flex flex-col w-full lg:w-[70%] px-4 gap-2">
              <h4 className="text-sm text-D-G font-bold ">
                Correo Electronico
              </h4>
              <input
                {...register("correoElectronico", { required: true })}
                type="email"
                id="correoElectronico"
                className="border border-2 rounded-full text-center text-D-G h-9 hover:border-F-G border-T-G focus:outline-none"
              />
            </div>
            <div className="flex flex-col w-full lg:w-[70%] px-4 gap-2">
              <h4 className="text-sm text-D-G font-bold">Contraseña</h4>
              <input
                {...register("contraseña", { required: true })}
                type="password"
                id="contraseña"
                className="border border-2 rounded-full text-center text-D-G h-9 hover:border-F-G border-T-G focus:outline-none"
              />
            </div>
            <a
              href=""
              className="text-xs text-D-G text-link m-2 pl-40 lg:pl-60 font-bold"
            >
              olvidaste tu contraseña?
            </a>
            <input type="submit"
            className="text-D-G bg-T-G rounded-full w-28 h-10 mt-4 hover:bg-F-G hover:text-white"
            placeholder="Iniciar sesión"/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
