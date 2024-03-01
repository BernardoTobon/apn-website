import { saveIcon } from "@/icons";
import { useForm } from "react-hook-form";

const Bioimpedance = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex justify-center">
      <form
        className="grid grid-cols-1"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div>
          <div>
            <label htmlFor="grasaTotal" className="text-D-G mr-14">
              Grasa total
            </label>
          </div>
          <input
            {...register("grasaTotal", { required: true })}
            className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
            type="text"
            id="grasaTotal"
          />
          <label htmlFor="grasaTotal" className="text-D-G">
            %
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="grasaEnSeccionSuperior" className="text-D-G">
              Grasa en sección superior
            </label>
          </div>
          <input
            {...register("grasaEnSeccionSuperior", { required: true })}
            className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
            type="text"
            id="grasaEnSeccionSuperior"
          />
          <label htmlFor="grasaEnSeccionSuperior" className="text-D-G">
            %
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="grasaEnSeccionInferior" className="text-D-G ">
              Grasa en sección inferior
            </label>
          </div>
          <input
            {...register("grasaEnSeccionInferior", { required: true })}
            className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
            type="text"
            id="grasaEnSeccionInferior"
          />
          <label htmlFor="grasaEnSeccionInferior" className="text-D-G">
            %
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="grasaVisceral" className="text-D-G">
              Grasa visceral
            </label>
          </div>
          <input
            {...register("grasaVisceral", { required: true })}
            className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
            type="text"
            id="grasaVisceral"
          />
          <label htmlFor="grasaVisceral" className="text-D-G">
            rating
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="masaLibreDeGrasa" className="text-D-G">
              Masa libre de grasa
            </label>
          </div>
          <input
            {...register("masaLibreDeGrasa", { required: true })}
            className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
            type="text"
            id="masaLibreDeGrasa"
          />
          <label htmlFor="masaLibreDeGrasa" className="text-D-G">
            kg
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="masaMuscular" className="text-D-G">
              Masa muscular
            </label>
          </div>
          <input
            {...register("masaMuscular", { required: true })}
            className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
            type="text"
            id="masaMuscular"
          />
          <label htmlFor="masaMuscular" className="text-D-G">
            kg
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="pesoOseo" className="text-D-G">
              Peso óseo
            </label>
          </div>
          <input
            {...register("pesoOseo", { required: true })}
            className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
            type="text"
            id="pesoOseo"
          />
          <label htmlFor="pesoOseo" className="text-D-G">
            kg
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="aguaCorporal" className="text-D-G">
              Agua corporal
            </label>
          </div>
          <input
            {...register("aguaCorporal", { required: true })}
            className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
            type="text"
            id="aguaCorporal"
          />
          <label htmlFor="aguaCorporal" className="text-D-G">
            %
          </label>
        </div>
        <div>
          <div>
            <label htmlFor="edadMetabolica" className="text-D-G">
              Edad metabólica
            </label>
          </div>
          <input
            {...register("edadMetabolica", { required: true })}
            className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
            type="text"
            id="edadMetabolica"
          />
          <label htmlFor="edadMetabolica" className="text-D-G">
            años
          </label>
        </div>
        <button
          type="submit"
          className="flex justify-center text-D-G bg-T-G rounded-full w-16 h-10 pt-1 mt-3
           hover:bg-F-G hover:text-white"
        >
          {saveIcon}
        </button>
      </form>
    </div>
  );
};
export default Bioimpedance;
