import { saveIcon } from "@/icons";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
const Perimeter = () => {
  const { register, handleSubmit } = useForm();
  const [videoVisiblePe, setVideoVisiblePe] = useState("");
  const [paragraphVisiblePe, setParagraphVisiblePe] = useState("");
  const [cephalic, setCephalic] = useState("");
  const [neck, setNeck] = useState("");
  const [relaxedMidArm, setRelaxedMidArm] = useState("");
  const [halfArmContracted, sethalfArmContracted] = useState("");
  const [forearm, setForearm] = useState("");
  const [wrist, setWrist] = useState("");
  const [mesosternal, setMesosternal] = useState("");
  const [umbilical, setUmbilical] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [thigh, setThigh] = useState("");
  const [middleThigh, setmiddleThigh] = useState("");
  const [calf, setCalf] = useState("");
  const [ankle, setAnkle] = useState("");
  const videoRefP = useRef(null);
  const handleFieldClickPe = (field) => {
    setVideoVisiblePe(field);
  };
  const handleFieldClickParagraphPe = (field) => {
    setParagraphVisiblePe(field);
  };
  useEffect(() => {
    if (videoVisiblePe) {
      videoRefP.current.play();
      videoRefP.current.loop = true;
    }
  }, [videoVisiblePe]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        {videoVisiblePe && (
          <div className="flex justify-center pt-4">
            <video
              className="h-96 w-72"
              ref={videoRefP}
              src={
                videoVisiblePe === "cefalico"
                  ? "/Video1.mp4"
                  : videoVisiblePe === "cuello"
                  ? "/Video2.mp4"
                  : videoVisiblePe === "mitadDelBrazoRelajado"
                  ? "/Video1.mp4"
                  : videoVisiblePe === "mitadDelBrazoContraido"
                  ? "/Video2.mp4"
                  : videoVisiblePe === "antebrazo"
                  ? "/Video1.mp4"
                  : videoVisiblePe === "muñeca"
                  ? "/Video2.mp4"
                  : videoVisiblePe === "mesoesternal"
                  ? "/Video1.mp4"
                  : videoVisiblePe === "umbilical"
                  ? "/Video2.mp4"
                  : videoVisiblePe === "cintura"
                  ? "/Video1.mp4"
                  : videoVisiblePe === "cadera"
                  ? "/Video2.mp4"
                  : videoVisiblePe === "muslo"
                  ? "/video1.mp4"
                  : videoVisiblePe === "musloMedio"
                  ? "/Video2.mp4"
                  : videoVisiblePe === "pantorrilla"
                  ? "/Video1.mp4"
                  : videoVisiblePe === "tobillo"
                  ? "/Video2.mp4"
                  : videoVisiblePe
              }
              autoPlay
              loop
              muted
            />
          </div>
        )}
        <div className="flex justify-center m-4">
          {paragraphVisiblePe === "cefalico" ? (
            <p>Perímetro de la cabeza</p>
          ) : paragraphVisiblePe === "cuello" ? (
            <p>Perímetro del cuello</p>
          ) : paragraphVisiblePe === "mitadDelBrazoRelajado" ? (
            <p>Es el contorno del brazo relajado con el sujeto de pie.</p>
          ) : paragraphVisiblePe === "mitadDelBrazoContraido" ? (
            <p>
              Es el contorno máximo del brazo contraido con el sujeto de pie. La
              flexión de codo debe ser de 45°
              <br />
              <b>Se usa para cálculo del somatotipo</b>
            </p>
          ) : paragraphVisiblePe === "antebrazo" ? (
            <p>
              Es el máximo contorno del antebrazo, tomado con el codo extendido.
            </p>
          ) : paragraphVisiblePe === "muñeca" ? (
            <p>Es el mínimo contorno del antebrazo.</p>
          ) : paragraphVisiblePe === "mesoesternal" ? (
            <p>
              También llamado torácico o pecho, esta en el cuerpo del esternon a
              nivel de la cuarta articulación condroesternal.
            </p>
          ) : paragraphVisiblePe === "umbilical" ? (
            <p>Perímetro abdominal</p>
          ) : paragraphVisiblePe === "cintura" ? (
            <p>En el punto medio del borde costal y la cresta iliaca.</p>
          ) : paragraphVisiblePe === "cadera" ? (
            <p>Es el contorno máximo de la cadera</p>
          ) : paragraphVisiblePe === "muslo" ? (
            <p>
              El sujeto adopta una posición relajada, de pie, con los brazos
              cruzados sobre el tórax. El sujeto está de pie, con los pies
              levemente separados y la masa del cuerpo distribuido por igual en
              ambos pies.
            </p>
          ) : paragraphVisiblePe === "musloMedio" ? (
            <p>
              El sujeto adopta una posicion relajada, de pie, con los brazos
              cruzados sobre el tórax. El sujeto está de pie, con los pies
              levemente separados y el peso del cuerpo distribuido por igual en
              ambos pies.
            </p>
          ) : paragraphVisiblePe === "pantorrilla" ? (
            <p>
              El contorno máximo de la pantorrilla
              <b>Se usa para cálculo del somatotipo</b>
            </p>
          ) : paragraphVisiblePe === "tobillo" ? (
            <p>
              Es el mínimo contorno de la pierna, por encima del maleolo tibial.
            </p>
          ) : (
            paragraphVisiblePe
          )}
        </div>
      </div>
      <div className="pl-2 pt-8">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="grid grid-cols-2">
            <div className="m-1">
              <div>
                <label htmlFor="cefalico" className="text-D-G">
                  Cefálico
                </label>
              </div>
              <input
                {...register("cefalico", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={cephalic}
                type="text"
                id="cefalico"
                onChange={(e) => setCephalic(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("cefalico");
                  handleFieldClickParagraphPe("cefalico");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="cuello" className="text-D-G">
                  Cuello
                </label>
              </div>
              <input
                {...register("cuello", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={neck}
                type="text"
                id="cuello"
                onChange={(e) => setNeck(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("cuello");
                  handleFieldClickParagraphPe("cuello");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="mitadDelBrazoRelajado" className="text-D-G">
                  Mitad del brazo relajado
                </label>
              </div>
              <input
                {...register("mitadDelBrazoRelajado", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={relaxedMidArm}
                type="text"
                id="mitadDelBrazoRelajado"
                onChange={(e) => setRelaxedMidArm(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("mitadDelBrazoRelajado");
                  handleFieldClickParagraphPe("mitadDelBrazoRelajado");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="mitadDelBrazoContraido" className="text-D-G">
                  Mitad del brazo contraído
                </label>
              </div>
              <input
                {...register("mitadDelBrazoContraido", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={halfArmContracted}
                type="text"
                id="mitadDelBrazoContraido"
                onChange={(e) => sethalfArmContracted(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("mitadDelBrazoContraido");
                  handleFieldClickParagraphPe("mitadDelBrazoContraido");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="antebrazo" className="text-D-G">
                  Antebrazo
                </label>
              </div>
              <input
                {...register("antebrazo", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={forearm}
                type="text"
                id="antebrazo"
                onChange={(e) => setForearm(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("antebrazo");
                  handleFieldClickParagraphPe("antebrazo");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="muñeca" className="text-D-G">
                  Muñeca
                </label>
              </div>
              <input
                {...register("muñeca", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={wrist}
                type="text"
                id="muñeca"
                onChange={(e) => setWrist(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("muñeca");
                  handleFieldClickParagraphPe("muñeca");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="mesoesternal" className="text-D-G">
                  Mesoesternal
                </label>
              </div>
              <input
                {...register("mesoesternal", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={mesosternal}
                type="text"
                id="mesoesternal"
                onChange={(e) => setMesosternal(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("mesoesternal");
                  handleFieldClickParagraphPe("mesoesternal");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="umbilical" className="text-D-G">
                  Umbilical
                </label>
              </div>
              <input
                {...register("umbilical", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={umbilical}
                type="text"
                id="umbilical"
                onChange={(e) => setUmbilical(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("umbilical");
                  handleFieldClickParagraphPe("umbilical");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="cintura" className="text-D-G">
                  Cintura
                </label>
              </div>
              <input
                {...register("cintura", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={waist}
                type="text"
                id="cintura"
                onChange={(e) => setWaist(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("cintura");
                  handleFieldClickParagraphPe("cintura");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="cadera" className="text-D-G">
                  Cadera
                </label>
              </div>
              <input
                {...register("cadera", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={hip}
                type="text"
                id="cadera"
                onChange={(e) => setHip(e.target.value)}
                onClick={() => {
                  handleFieldClickParagraphPe("cadera");
                  handleFieldClickParagraphPe("cadera");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="muslo" className="text-D-G">
                  Muslo
                </label>
              </div>
              <input
                {...register("muslo", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={thigh}
                type="text"
                id="muslo"
                onChange={(e) => setThigh(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("muslo");
                  handleFieldClickParagraphPe("muslo");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="musloMedio" className="text-D-G">
                  Muslo medio
                </label>
              </div>
              <input
                {...register("musloMedio", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={middleThigh}
                type="text"
                id="musloMedio"
                onChange={(e) => setmiddleThigh(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("musloMedio");
                  handleFieldClickParagraphPe("musloMedio");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="pantorrilla" className="text-D-G">
                  Pantorrilla
                </label>
              </div>
              <input
                {...register("pantorrilla", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={calf}
                type="text"
                id="pantorrilla"
                onChange={(e) => setCalf(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("pantorrilla");
                  handleFieldClickParagraphPe("pantorrilla");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="tobillo" className="text-D-G">
                  Tobillo
                </label>
              </div>
              <input
                {...register("tobillo", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={ankle}
                type="text"
                id="tobillo"
                onChange={(e) => setAnkle(e.target.value)}
                onClick={() => {
                  handleFieldClickPe("tobillo");
                  handleFieldClickParagraphPe("tobillo");
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center text-D-G bg-T-G rounded-full w-16 h-10 pt-1 hover:bg-F-G hover:text-white"
          >
            {saveIcon}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Perimeter;
 