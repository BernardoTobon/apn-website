import { saveIcon } from "@/icons";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

const Folds = () => {
  const { register, handleSubmit } = useForm();
  const [videoVisibleF, setVideoVisiblef] = useState("");
  const [paragraphVisiblef, setParagraphVisiblef] = useState("");
  const [subscapularis, setSubscapularis] = useState("");
  const [triceps, setTriceps] = useState("");
  const [biceps, setBiceps] = useState("");
  const [iliacCrest, setIliacCrest] = useState("");
  const [supraspinal, setSupraspinal] = useState("");
  const [abdominal, setabdominal] = useState("");
  const [frontThigh, setFrontThigh] = useState("");
  const [medialCalf, setMedialCalf] = useState("");
  const [medialAxillary, setMedialAxillary] = useState("");
  const [pectoral, setPectoral] = useState("");
  const videoRefFo = useRef(null);
  const handleFieldClickFo = (field) => {
    setVideoVisiblef(field);
  };
  const handleFieldClickParagraphFo = (field) => {
    setParagraphVisiblef(field);
  };

  useEffect(() => {
    if (videoVisibleF) {
      videoRefFo.current.play();
      videoRefFo.current.loop = true;
    }
  }, [videoVisibleF]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        {videoVisibleF && (
          <div className="flex justify-center pt-4">
            <video
              className="h-96 w-72"
              ref={videoRefFo}
              src={
                videoVisibleF === "subescapular"
                  ? "/Video1.mp4"
                  : videoVisibleF === "triceps"
                  ? "/Video2.mp4"
                  : videoVisibleF === "biceps"
                  ? "/Video1.mp4"
                  : videoVisibleF === "crestailiaca"
                  ? "/Video2.mp4"
                  : videoVisibleF === "supraespinal"
                  ? "/Video1.mp4"
                  : videoVisibleF === "abdominal"
                  ? "/Video2.mp4"
                  : videoVisibleF === "musloFrontal"
                  ? "/Video1.mp4"
                  : videoVisibleF === "pantorrillaMedial"
                  ? "/Video2.mp4"
                  : videoVisibleF === "axilarMedial"
                  ? "/Video1.mp4"
                  : videoVisibleF === "pectoral"
                  ? "/Video2.mp4"
                  : videoVisibleF
              }
              autoPlay
              muted
              loop
            />
          </div>
        )}
        <div className="m-4 flex justify-center">
          {paragraphVisiblef === "subescapular" ? (
            <p>
              Está situado a dos centímetros del ángulo inferior de la escápula,
              en dirección oblicua abajo y hacia afuera formando un ángulo de
              45°
              <b>
                Se usa en Fórmulas de: Siri, Brozek, Faulkner, Ledesma y cálculo
                del somatotipo
              </b>
            </p>
          ) : paragraphVisiblef === "triceps" ? (
            <p>
              Está situado en el punto medio acromio-radial en la parte
              posterior del brazo.
              <b>
                Se usa en Fórmulas de: Siri, Brozek, Faulkner, Ledesma y cálculo
                del somatotipo
              </b>
            </p>
          ) : paragraphVisiblef === "biceps" ? (
            <p>
              Está situado en el punto medio acromio-radial en la parte anterior
              del brazo.
              <br />
              <b>Se usa en Fórmulas de: Siri, Brozek y Ledesma.</b>
            </p>
          ) : paragraphVisiblef === "crestailiaca" ? (
            <p>
              Está localizado justo por encima de la cresta iliaca, en la línea
              medio axilar
            </p>
          ) : paragraphVisiblef === "supraespinal" ? (
            <p>
              Está localizado en la intersección formada en la línea del borde
              superior del íleon y una línea imaginaria que va desde la espina
              ilíaca antero posterior derecha hasta el borde axilar anterior
              <br />
              <b>
                Se usa para Fórmulas de: Siri, Brozek, Faulkner, Ledesma y
                cálculo del somatotipo
              </b>
            </p>
          ) : paragraphVisiblef === "abdominal" ? (
            <p>
              Está situada lateralmente a la derecha junto a la cicatriz
              umbilical anterior
              <b>
                Se usa en la Fórmula de Faulkner para cálculo de grasa coporal.
              </b>
            </p>
          ) : paragraphVisiblef === "musloFrontal" ? (
            <p>
              Está localizado en el punto medio de la línea que une al pliegue
              inguinal y el borde proximal del rótulo.
            </p>
          ) : paragraphVisiblef === "pantorrillaMedial" ? (
            <p>
              Está localizado en la zona donde el perímetro de la pantorrilla es
              máximo.
              <b>Se usa para cálculo del somatotipo</b>
            </p>
          ) : (
            paragraphVisiblef === "axilarMedial" ? (
              <p>Está localizado en la línea media axilar a la altura de la apófisis xifoides.</p>
            )
            : paragraphVisiblef === "pectoral" ? (
              <p>Está localizado en la línea que une la axila con el pezón.</p>
            )
            : paragraphVisiblef
          )}
        </div>
      </div>
      <div className="pl-2 pt-8">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="m-1">
              <div>
                <label htmlFor="subescapular" className="text-D-G">
                  Subescapular
                </label>
              </div>
              <input
                {...register("subescapular", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={subscapularis}
                type="text"
                id="subescapular"
                onChange={(e) => setSubscapularis(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("subescapular");
                  handleFieldClickParagraphFo("subescapular");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="triceps" className="text-D-G">
                  Tríceps
                </label>
              </div>
              <input
                {...register("triceps", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={triceps}
                type="text"
                id="triceps"
                onChange={(e) => setTriceps(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("triceps");
                  handleFieldClickParagraphFo("triceps");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="biceps" className="text-D-G">
                  Bíceps
                </label>
              </div>
              <input
                {...register("biceps", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={biceps}
                type="text"
                id="biceps"
                onChange={(e) => setBiceps(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("biceps");
                  handleFieldClickParagraphFo("biceps");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="crestailiaca" className="text-D-G">
                  Cresta ilíaca
                </label>
              </div>
              <input
                {...register("crestailiaca", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={iliacCrest}
                type="text"
                id="crestailiaca"
                onChange={(e) => setIliacCrest(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("crestailiaca");
                  handleFieldClickParagraphFo("crestailiaca");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="supraespinal" className="text-D-G">
                  Supraespinal
                </label>
              </div>
              <input
                {...register("supraespinal", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={supraspinal}
                type="text"
                id="supraespinal"
                onChange={(e) => setSupraspinal(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("supraespinal");
                  handleFieldClickParagraphFo("supraespinal");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="abdominal" className="text-D-G">
                  Abdominal
                </label>
              </div>
              <input
                {...register("abdominal", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={abdominal}
                type="text"
                id="abdominal"
                onChange={(e) => setabdominal(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("abdominal");
                  handleFieldClickParagraphFo("abdominal");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="musloFrontal" className="text-D-G">
                  Muslo frontal
                </label>
              </div>
              <input
                {...register("musloFrontal", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={frontThigh}
                type="text"
                id="musloFrontal"
                onChange={(e) => setFrontThigh(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("musloFrontal");
                  handleFieldClickParagraphFo("musloFrontal");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="pantorrillaMedial" className="text-D-G">
                  Pantorrilla medial
                </label>
              </div>
              <input
                {...register("pantorrillaMedial", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={medialCalf}
                type="text"
                id="pantorrillaMedial"
                onChange={(e) => setMedialCalf(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("pantorrillaMedial");
                  handleFieldClickParagraphFo("pantorrillaMedial");
                }}
              />
            </div>
            <div className="m-1">
                <div>
                  <label htmlFor="axilarMedial" className="text-D-G">
                  Axilar medial
                  </label>
                </div>
                <input
                {...register("axilarMedial",{required:true})}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={medialAxillary}
                type="text"
                id="axilarMedial"
                onChange={(e) => setMedialAxillary(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("axilarMedial");
                  handleFieldClickParagraphFo("axilarMedial")
                }}
                />
            </div>
            <div className="m-1">
                <div>
                  <label htmlFor="pectoral" className="text-D-G">
                  Pectoral
                  </label>
                </div>
                <input
                {...register("pectoral",{required:true})}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={pectoral}
                type="text"
                id="pectoral"
                onChange={(e) => setPectoral(e.target.value)}
                onClick={() => {
                  handleFieldClickFo("pectoral");
                  handleFieldClickParagraphFo("pectoral")
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
export default Folds;
