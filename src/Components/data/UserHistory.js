import { BLOOD_TYPE } from "@/constants";
import { allergyIcon, bloodTypeIcon, clinicalHistoryIcon, consultationIcon, diagnosisIcon, saveIcon, surgeryIcon, therapyIcon } from "@/icons";
import { useForm } from "react-hook-form";

const UserHistory = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="flex items-center flex-col">
      <h1 className="flex justify-center m-3 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-L-B to-D-G">
        Historia clínica
      </h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col m-2 border-2 border-F-G rounded-lg h-24 w-60 pt-4">
            <label
              htmlFor="motivoDeConsulta"
              className="flex justify-center text-D-G"
            >
              {consultationIcon}
              <span className="text-L-B"> Motivo de consulta</span>
            </label>
            <input
              {...register("motivoDeConsulta", { required: true })}
              className="text-center border-2 border-F-G focus:outline-none rounded-lg m-1"
              type="text"
              id="motivoDeConsulta"
            />
          </div>
          <div className="flex flex-col m-2 border-2 border-F-G rounded-lg h-24 w-60 pt-4">
            <label
              htmlFor="tipoDeSangre"
              className="flex justify-center text-D-G"
            >
              {bloodTypeIcon}
              <span className="text-L-B">Tipo de sangre</span>
            </label>
            <select
              {...register("tipoDeSangre", { required: true })}
              className="text-center border-2 border-F-G focus:outline-none rounded-lg m-1"
              id="tipoDeSangre"
            >
              {BLOOD_TYPE.map((item, index) => (
                <option className="text-D-G" key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col m-2 border-2 border-F-G rounded-lg h-24 w-60 pt-4">
            <label
              htmlFor="cirugiasRealizadas"
              className="flex justify-center text-D-G"
            >
              {surgeryIcon}
              <span className="text-L-B"> Cirugías realizadas</span>
            </label>
            <input
              {...register("cirugiasRealizadas")}
              className="text-center border-2 border-F-G focus:outline-none rounded-lg m-1"
              type="text"
              id="cirugiasRealizadas"
            />
          </div>
          <div className="flex flex-col m-2 border-2 border-F-G rounded-lg h-24 w-60 pt-4">
            <label
            htmlFor="alergias"
            className="flex justify-center text-D-G">
                {allergyIcon}
                <span className="text-L-B">Alergias</span>
            </label>
            <input
            {...register("alergias")}
            className="text-center border-2 border-F-G focus:outline-none rounded-lg m-1"
            type="text"
            id="alergias"
            />
          </div>
          <div className="flex flex-col m-2 border-2 border-F-G rounded-lg h-24 w-60 pt-4">
            <label
            htmlFor="diagnosticoPrevio"
            className="flex justify-center text-D-G">
                {diagnosisIcon}
                <span className="text-L-B"> Diagnostico previo</span>
            </label>
            <input
             {...register("diagnosticoPrevio")}
            className="text-center border-2 border-F-G focus:outline-none rounded-lg m-1"
            type="text"
            id="diagnosticoPrevio"
            />
          </div>
          <div className="flex flex-col m-2 border-2 border-F-G rounded-lg h-24 w-60 pt-4">
            <label
            htmlFor="terapeuticaPrevia"
            className="flex justify-center text-D-G"
            >
            {therapyIcon}
            <span className="text-L-B"> Terapéutica previa</span>
            </label>
            <input
            {...register("terapeuticaPrevia")}
            className="text-center border-2 border-F-G focus:outline-none rounded-lg m-1"
            type="text"
            id="terapeuticaPrevia"
            />
          </div>
          <div className="flex flex-col m-2 border-2 border-F-G rounded-lg h-24 w-60 pt-4">
            <label
            htmlFor="antecedentesHeredoFamiliares"
            className="flex justify-center text-D-G"
            >
            {clinicalHistoryIcon}
            <span className="text-L-B"> Antecedentes familiares</span>
            </label>
            <input
            {...register("antecedentesHeredoFamiliares")}
            className="text-center border-2 border-F-G focus:outline-none rounded-lg m-1"
            type="text"
            id="antecedentesHeredoFamiliares"
            />
          </div>
          <button
          type="submit"
          className="flex justify-center text-D-G bg-T-G rounded-full w-16 h-10 pt-1 mt-10
           hover:bg-F-G hover:text-white"
        >
          {saveIcon}
        </button>
        </div>
      </form>
    </div>
  );
};

export default UserHistory;
