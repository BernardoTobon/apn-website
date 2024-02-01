import { infoIcon } from "@/icons";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const AvatarGender = ({ gender }) => {
  return (
    <>
      {gender == "Hombre" ? (
        <img src="/MaleGender.png" />
      ) : (
        <img src="FemaleGender.png" />
      )}
    </>
  );
};

const UserData = () => {
  const { register, handleSubmit, control } = useForm();
  const [gender, setGender] = useState("");
  const handlingToChange = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className="flex items-center flex-col">
      <div className="w-24 h-24 p-1">
        {gender && <AvatarGender gender={gender} />}
      </div>
      <div className="pb-16">
        <h1 className="flex justify-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-L-B to-D-G ">
          Datos de identidad
        </h1>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="grid grid-cols-1 lg:grid-cols-4"
      >
        <div className="flex flex-col border-2 border-F-G rounded-lg h-22 w-60 pt-2 m-2">
          <label htmlFor="nombre" className="flex justify-center text-D-G">
            {infoIcon}
            <span className="text-L-B">Nombre</span>
          </label>
          <input {...register("nombre", {required : true})}
          id="nombre"
            className="text-center text-D-G border-2 border-D-G focus:outline-none rounded-lg m-1"
            type="text"
          />
        </div>
        <input className="border-2 bg-T-G" type="submit"/>
      </form>
    </div>
  );
};
export default UserData;
