import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
const Diameters = () => {
  const { register, handleSubmit } = useForm();
  const [videoVisible, setVideoVisible] = useState("");
  const [paragraphVisible, setParagraphVisible] = useState("");
  const [biacromial, setBiacromial] = useState("");
  const [biiliocrestal, setBiiliocrestal] = useState("");
  const [footLenght, setFootLengt] = useState("");
  const [transverseThorax, setTransverseTorax] = useState("");
  const [anteroposteriorThorax, setAnteroPosteriorThorax] = useState("");
  const [humerus, setHumerus] = useState("");
  const [wristBistyloid, setWristBistyloid] = useState("");
  const [bicondyleFemur, setBicondyleFemur] = useState("");
  const [bimalleolar, setBimalleolar] = useState("");
  const [transverseFoot, setTransverseFoot] = useState("");
  const [handLenght, setHandLenght] = useState("");
  const [transverseHand, setTransversehand] = useState("");
  const videoRef = useRef(null);
  const handleFieldClick = (field) => {
    setVideoVisible(field);
  };
  const handleFieldClickParagraph = (field) => {
    setParagraphVisible(field);
  };
  useEffect(() => {
    if (videoVisible) {
      videoRef.current.play();
      videoRef.current.loop = true;
    }
  }, [videoVisible]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="pl-2 md:pl-64 pt-8">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div>
            <div className="m-1">
              <label htmlFor="biacromial" className="text-D-G">
                Biacromial
              </label>
            </div>
            <input
              {...register("biacromial", { required: true })}
              className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-F-G rounded-lg"
              value={biacromial}
              type="text"
              id="biacromial"
              onChange={(e) => setBiacromial(e.target.value)}
              onClick={() => {
                handleFieldClick("biacromial");
                handleFieldClickParagraph("biacromial");
              }}
            />
            <div className="m-1">
              <label htmlFor="biiliocrestal" className="text-D-G">
                Biiliocrestal
              </label>
            </div>
            <input
              {...register("biiliocrestal", { required: true })}
              className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-F-G rounded-lg"
              value={biiliocrestal}
              type="text"
              id="biiliocrestal"
              onChange={(e) => setBiiliocrestal(e.target.value)}
              onClick={() => {
                handleFieldClick("biiliocrestal");
                handleFieldClickParagraph("biiliocrestal");
              }}
            />
            <div className="m-1">
              <label htmlFor="longitudDelPie" className="text-D-G">
                Longitud del pie
              </label>
            </div>
            <input
              {...register("longitudDelPie", { required: true })}
              className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-F-G rounded-lg"
              value={footLenght}
              type="text"
              id="longitudDelPie"
              onChange={(e) => setFootLengt(e.target.value)}
              onClick={() => {
                handleFieldClick("longitudDelPie"),
                  handleFieldClickParagraph("longitudDelPie");
              }}
            />
            <div className="m-1">
              <label htmlFor="transversoDelTorax" className="text-D-G">
                Transverso del toráx
              </label>
            </div>
            <input
              {...register("tranversoDelTorax", { required: true })}
              className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-F-G rounded-lg"
              value={transverseThorax}
              type="text"
              id="transversoDelTorax"
              onChange={(e) => setTransverseTorax(e.target.value)}
              onClick={() => {
                handleFieldClick("transversoDelTorax"),
                  handleFieldClickParagraph("tranversoDelTorax");
              }}
            />
          </div>
          <div className="m-1">
            <label htmlFor="anteroposteriorDelTorax" className="text-D-G">
              Anteroposterior del tórax
            </label>
          </div>
          <input
            {...register("anteroposteriorDelTorax", { required: true })}
            className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-F-G rounded-lg"
            value={anteroposteriorThorax}
            type="text"
            id="anteroposteriorDelTorax"
            onChange={(e) => setAnteroPosteriorThorax(e.target.value)}
            onClick={() => {
              handleFieldClick("anteroposteriorDelTorax"),
                handleFieldClickParagraph("anteroposteriorDelTorax");
            }}
          />
          <div className="m-1">
            <label htmlFor="humero" className="text-D-G">
              Húmero
            </label>
          </div>
          <input
            {...register("humero", { required: true })}
            className="m-1 text-center w-40 md:w-64 focus:outline-none border border-2 border-F-G rounded-lg"
            value={humerus}
            type="text"
            id="humero"
            onChange={(e) => setHumerus(e.target.value)}
            onClick={() => {
              handleFieldClick("humero"), handleFieldClickParagraph("humero");
            }}
          />
          <input
            type="submit"
            className="text-D-G bg-T-G rounded-full w-28 h-10 mt-4 hover:bg-F-G hover:text-white"
          />
        </form>
      </div>
      <div className="flex flex-col">
        {videoVisible && (
          <div className="flex justify-center pt-4">
            <video
              className="h-96"
              ref={videoRef}
              src={
                videoVisible === "biacromial"
                  ? "/Video1.mp4"
                  : videoVisible === "biiliocrestal"
                  ? "/Video2.mp4"
                  : videoVisible === "longitudDelPie"
                  ? "/Video2.mp4"
                  : videoVisible === "transversoDelTorax"
                  ? "/Video1.mp4"
                  : videoVisible === "anteroposteriorDelTorax"
                  ? "/Video2.mp4"
                  : videoVisible === "humero"
                  ? "/Video2.mp4"
                  : videoVisible
              }
              autoPlay
              loop
              muted
            />
          </div>
        )}
        <div className="pt-4 m-3 flex justify-center">
          {paragraphVisible === "biacromial" ? (
            <p>
              Es la distancia entre el punto acromial derecho y el izquierdo.
            </p>
          ) : paragraphVisible === "biiliocrestal" ? (
            <p>
              Es la distancia entre los puntos ileocrestales izquierdo y
              derecho.
            </p>
          ) : paragraphVisible === "longitudDelPie" ? (
            <p>Es la distacia entre los puntos anterior y posterior del pie.</p>
          ) : paragraphVisible === "transversoDelTorax" ? (
            <p>
              Es la distancia entre los puntos más laterales del tórax. (a nivel
              de la cuarta costilla)
            </p>
          ) : paragraphVisible === "anteroposteriorDelTorax" ? (
            <p>
              Es la distancia entre el punto mesoesternal del tórax y el proceso
              espinoso del mismo nivel.
            </p>
          ) : paragraphVisible === "humero" ? (
            <p>
              Es la distancia entre el epicóndilo y la epitróclea del húmero, el
              codo deberá estar en un ángulo de 90°<br/>
              <b>Se usa para cálculo del somatotipo</b>
            </p>
          ) : (
            paragraphVisible
          )}
        </div>
      </div>
    </div>
  );
};
export default Diameters;
