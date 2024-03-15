import { GENDER } from "@/constants";
import {
  addressIcon,
  ageIcon,
  birthdayIcon,
  cellphoneIcon,
  cityIcon,
  educationIcon,
  emailIcon,
  genderIcon,
  icIcon,
  infoIcon,
  phoneIcon,
  saveIcon,
} from "@/icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { v4 as uuidv4 } from "uuid";


const UserData = () => {
  const { register, handleSubmit, control } = useForm();
  const [loading, setLoading] = useState(false);
  const setData = (data) => {
    if (loading) return alert("Guardando");
    setLoading(true);
    setDoc(doc(db, "datos_de_identidad", uuidv4()), data)
      .then((res) => console.log("res", res))
      .catch((er) => console.log("er", er))
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-1 flex items-center flex-col">
      <div className="pb-6">
        <h1 className="flex justify-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-L-B to-D-G ">
          Datos de identidad
        </h1>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          setData(data)
        })}
        className="grid grid-cols-1 lg:grid-cols-4"
      >
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="nombre" className="flex justify-center text-D-G">
            {infoIcon}
            <span className="text-L-B">Nombre</span>
          </label>
          <input
            {...register("nombre", { required: true })}
            id="nombre"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label
            htmlFor="primerApellido"
            className="flex justify-center text-D-G"
          >
            {infoIcon}
            <span className="text-L-B">Primer apellido</span>
          </label>
          <input
            {...register("primerApellido", { required: true })}
            id="primerApellido"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label
            htmlFor="segundoApellido"
            className="flex justify-center text-D-G"
          >
            {infoIcon}
            <span className="text-L-B">Segundo apellido</span>
          </label>
          <input
            {...register("segundoApellido", { required: true })}
            id="segundoApellido"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="cedula" className="flex justify-center text-D-G">
            {icIcon}
            <span className="text-L-B">Cédula</span>
          </label>
          <input
            {...register("cedula", { required: true })}
            id="cedula"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label
            htmlFor="fechaDeNacimiento"
            className="flex justify-center text-D-G"
          >
            {birthdayIcon}
            <span className="text-L-B">Fecha de nacimiento</span>
          </label>
          <input
            {...register("fechaDeNacimiento", { required: true })}
            id="fechaDeNacimiento"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="date"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="edad" className="flex justify-center text-D-G">
            {ageIcon}
            <span className="text-L-B">Edad</span>
          </label>
          <input
            {...register("edad", { required: true })}
            id="edad"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="genero" className="flex justify-center text-D-G">
            {genderIcon}
            <span className="text-L-B">Género</span>
          </label>

          <select
            {...register("genero", { required: true })}
            id="genero"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
          >
            {GENDER.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="escolaridad" className="flex justify-center text-D-G">
            {educationIcon}
            <span className="text-L-B">Escolaridad</span>
          </label>
          <input
            {...register("escolaridad", { required: true })}
            id="escolaridad"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
          />
        </div>
        <h1 className="m-3 flex justify-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-t from-L-B to-D-G col-span-full">
          Datos de contacto
        </h1>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="celular" className="flex justify-center text-D-G">
            {cellphoneIcon}
            <span className="text-L-B">Celular</span>
          </label>
          <input
            {...register("celular", { required: true })}
            id="celular"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label
            htmlFor="telefonoFijo"
            className="flex justify-center text-D-G"
          >
            {phoneIcon}
            <span className="text-L-B">Teléfono fijo</span>
          </label>
          <input
            {...register("telefonoFijo", { required: true })}
            id="telefonoFijo"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="e-mail" className="flex justify-center text-D-G">
            {emailIcon}
            <span className="text-L-B">E-mail</span>
          </label>
          <input
            {...register("e-mail", { required: true })}
            id="e-mail"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="email"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="direccion" className="flex justify-center text-D-G">
            {addressIcon}
            <span className="text-L-B">Dirección</span>
          </label>
          <input
            {...register("direccion", { required: true })}
            id="direccion"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="ciudad" className="flex justify-center text-D-G">
            {cityIcon}
            <span className="text-L-B">Ciudad</span>
          </label>
          <input
            {...register("ciudad", { required: true })}
            id="ciudad"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label
            htmlFor="departamento"
            className="flex justify-center text-D-G"
          >
            {cityIcon}
            <span className="text-L-B">Departamento</span>
          </label>
          <input
            {...register("departamento", { required: true })}
            id="departamento"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        
        <button
          type="submit"
          className="flex justify-center text-D-G bg-T-G rounded-full w-16 h-10 pt-1 mt-10
           hover:bg-F-G hover:text-white"
        >
          {saveIcon}
        </button>
      </form>
    </div>
  );
};
export default UserData;
