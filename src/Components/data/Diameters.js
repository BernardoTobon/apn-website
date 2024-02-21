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
  const [femur, setFemur] = useState("");
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
      <div className="flex flex-col">
        {videoVisible && (
          <div className="flex justify-center pt-4">
            <video
              className="h-96 w-72"
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
                  : videoVisible === "biestiloideoDeLaMuñeca"
                  ? "/Video1.mp4"
                  : videoVisible === "femur"
                  ? "/Video2.mp4"
                  : videoVisible === "bimaleolar"
                  ? "/Video1.mp4"
                  : videoVisible === "transversoDelPie"
                  ? "/Video1.mp4"
                  : videoVisible === "longitudDeLaMano"
                  ? "/Video2.mp4"
                  : videoVisible === "transversoDeLaMano"
                  ? "/Video1.mp4"
                  : videoVisible
              }
              autoPlay
              loop
              muted
            />
          </div>
        )}
        <div className=" m-4 flex justify-center">
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
            <p>
              Es la distancia entre los puntos anterior y posterior del pie.
            </p>
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
              codo deberá estar en un ángulo de 90°
              <br />
              <b>Se usa para cálculo del somatotipo</b>
            </p>
          ) : paragraphVisible === "biestiloideoDeLaMuñeca" ? (
            <p>
              Es la distancia entre la apófisis estiloides del radio y del
              cúbito. El sujeto debe estar con el antebrazo en pronación con una
              flexión de muñeca de 90°.
              <br />
              <b>Se usa para cálculo de la masa ósea.</b>
            </p>
          ) : paragraphVisible === "femur" ? (
            <p>
              Es la distancia entre el cóndilo medial y lateral del fémur. El
              sujeto debrá estar sentado con una flexión de rodilla de 90°.
              <br />
              <b>Se usa para cálculo del somatotipo y de la masa ósea.</b>
            </p>
          ) : paragraphVisible === "bimaleolar" ? (
            <p>
              Es la distancia entre el maleolar tibial y el peroneo. La
              articulación del tobillo debe tener 90° de flexión.
            </p>
          ) : paragraphVisible === "transversoDelPie" ? (
            <p>
              Es la distancia entre el punto metatarsiano tibial y peroneal.
            </p>
          ) : paragraphVisible === "longitudDeLaMano" ? (
            <p>
              Es la distancia entre el punto medio biestiloideo y el punto dedal
              medio.
            </p>
          ) : (
            paragraphVisible === "transversoDeLaMano" ? (
              <p>Es la distancia entre el punto metacarpiano lateral y medial.</p>
            )
            : paragraphVisible
          )}
        </div>
      </div>
      <div className="pl-2 pt-8">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div className="grid grid-cols-2 md:grid-cols-2">
            <div className="m-1">
              <div>
                <label htmlFor="biacromial" className="text-D-G">
                  Biacromial
                </label>
              </div>
              <input
                {...register("biacromial", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={biacromial}
                type="text"
                id="biacromial"
                onChange={(e) => setBiacromial(e.target.value)}
                onClick={() => {
                  handleFieldClick("biacromial");
                  handleFieldClickParagraph("biacromial");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="biiliocrestal" className="text-D-G">
                  Biiliocrestal
                </label>
              </div>
              <input
                {...register("biiliocrestal", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={biiliocrestal}
                type="text"
                id="biiliocrestal"
                onChange={(e) => setBiiliocrestal(e.target.value)}
                onClick={() => {
                  handleFieldClick("biiliocrestal");
                  handleFieldClickParagraph("biiliocrestal");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="longitudDelPie" className="text-D-G">
                  Longitud del pie
                </label>
              </div>
              <input
                {...register("longitudDelPie", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={footLenght}
                type="text"
                id="longitudDelPie"
                onChange={(e) => setFootLengt(e.target.value)}
                onClick={() => {
                  handleFieldClick("longitudDelPie"),
                    handleFieldClickParagraph("longitudDelPie");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="transversoDelTorax" className="text-D-G">
                  Transverso del tórax
                </label>
              </div>
              <input
                {...register("transversoDelTorax", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={transverseThorax}
                type="text"
                id="transversoDelTorax"
                onChange={(e) => setTransverseTorax(e.target.value)}
                onClick={() => {
                  handleFieldClick("transversoDelTorax"),
                    handleFieldClickParagraph("transversoDelTorax");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="anteroposteriorDelTorax" className="text-D-G">
                  Anteroposterior del tórax
                </label>
              </div>
              <input
                {...register("anteroposteriorDelTorax", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={anteroposteriorThorax}
                type="text"
                id="anteroposteriorDelTorax"
                onChange={(e) => setAnteroPosteriorThorax(e.target.value)}
                onClick={() => {
                  handleFieldClick("anteroposteriorDelTorax"),
                    handleFieldClickParagraph("anteroposteriorDelTorax");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="humero" className="text-D-G">
                  Húmero
                </label>
              </div>
              <input
                {...register("humero", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={humerus}
                type="text"
                id="humero"
                onChange={(e) => setHumerus(e.target.value)}
                onClick={() => {
                  handleFieldClick("humero"),
                    handleFieldClickParagraph("humero");
                }}
              />
            </div>

            <div className="m-1">
              <div>
                <label htmlFor="biestiloideoDeLaMuñeca" className="text-D-G">
                  Biestiloideo de la muñeca
                </label>
              </div>
              <input
                {...register("biestiloideoDelaMuñeca")}
                className="m-1 text-center w-16 md:w-32 focus:outline-none border-2 border-F-G rounded-lg"
                value={wristBistyloid}
                type="text"
                id="biestiloideoDeLaMuñeca"
                onChange={(e) => setWristBistyloid(e.target.value)}
                onClick={() => {
                  handleFieldClick("biestiloideoDeLaMuñeca"),
                    handleFieldClickParagraph("biestiloideoDeLaMuñeca");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="femur" className="text-D-G">
                  Fémur
                </label>
              </div>
              <input
                {...register("femur", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={femur}
                type="text"
                id="femur"
                onChange={(e) => setFemur(e.target.value)}
                onClick={() => {
                  handleFieldClick("femur"), handleFieldClickParagraph("femur");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="bimaleolar" className="text-D-G">
                  Bimaleolar
                </label>
              </div>
              <input
                {...register("bimaleolar", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none border-2 border-F-G rounded-lg"
                value={bimalleolar}
                type="text"
                id="bimaleolar"
                onChange={(e) => setBimalleolar(e.target.value)}
                onClick={() => {
                  handleFieldClick("bimaleolar"),
                    handleFieldClickParagraph("bimaleolar");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="transversoDelPie" className="text-D-G">
                  Transverso del pie
                </label>
              </div>
              <input
                {...register("transversoDelPie", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={transverseFoot}
                type="text"
                id="transversoDelPie"
                onChange={(e) => setTransverseFoot(e.target.value)}
                onClick={() => {
                  handleFieldClick("transversoDelPie"),
                    handleFieldClickParagraph("transversoDelPie");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="longitudDeLaMano" className="text-D-G">
                  Longitud mano
                </label>
              </div>
              <input
                {...register("longitudDeLaMano", { required: true })}
                className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
                value={handLenght}
                type="text"
                id="longitudDeLaMano"
                onChange={(e) => setHandLenght(e.target.value)}
                onClick={() => {
                  handleFieldClick("longitudDeLaMano"),
                    handleFieldClickParagraph("longitudDeLaMano");
                }}
              />
            </div>
            <div className="m-1">
              <div>
                <label htmlFor="transversoDeLaMano"
                className="text-D-G">Transverso de la mano</label>
              </div>
              <input {...register("transversoDeLaMano",{required:true})}
              className="m-1 text-center w-16 md:w-32 focus:outline-none  border-2 border-F-G rounded-lg"
              value={transverseHand}
              type="text"
              id="transversoDeLaMano"
              onChange={(e) => setTransversehand(e.target.value)}
              onClick={() => {
                handleFieldClick("transversoDeLaMano"),
                handleFieldClickParagraph("transversoDeLaMano")
              }}
              />
            </div>
          </div>
          <input
            type="submit"
            className="text-D-G bg-T-G rounded-full w-28 h-10 mt-4 hover:bg-F-G hover:text-white"
          />
        </form>
      </div>
    </div>
  );
};
export default Diameters;
