import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";    
import { useForm } from "react-hook-form";
import { saveIcon } from "@/icons";

export default function ImcGraphics() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const { register, handleSubmit } = useForm();
  const [imc, setImc] = useState("");

  useEffect(() => {
    const heightMeters = height / 100;
    const newIMC = weight / (heightMeters * heightMeters);
    setImc(newIMC.toFixed(2));
  }, [height, weight]);

  const getIMCColor = () => {
    if (imc < 18.5) {
      return "rgba(0, 123, 255)";
    } else if (imc >= 18.5 && imc < 25) {
      return "rgba(40, 167, 69)";
    } else if (imc >= 25 && imc < 30) {
      return "rgba(255, 193, 7)";
    } else {
      return "rgba(220, 53, 69)";
    }
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSubmitForm = (data) => {
    const heightMeters = data.estatura / 100;
    const newIMC = data.peso / (heightMeters * heightMeters);
    data.imc = newIMC.toFixed(3);
    console.log(data);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 m-2">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="m-10 order-2 md:order-1"
        >
          <div className="flex flex-col items-center">
            <label htmlFor="estatura" className="text-D-G">
              Estatura (cm)
            </label>
            <input
              {...register("estatura", { required: true })}
              className="w-24 border-2 border-F-G text-center focus:outline-none rounded-lg"
              type="text"
              id="estatura"
              value={height}
              onChange={handleHeightChange}
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="peso" className="text-D-G">
              Peso (kg)
            </label>
            <input
              {...register("peso", { required: true })}
              className="w-24 border-2 border-F-G text-center focus:outline-none rounded-lg"
              type="text"
              id="peso"
              value={weight}
              onChange={handleWeightChange}
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="imc" className="text-D-G">
              IMC
            </label>
            <input
              {...register("imc", { required: true })}
              id="imc"
              value={imc}
              type="text"
              readOnly
              className="w-24 border-2 border-F-G text-center focus:outline-none rounded-lg m-2"
            />
          </div>
          <div className="flex justify-center">
          <button
            type="submit"
            className="flex justify-center text-D-G bg-T-G rounded-full w-16 h-10 pt-1 hover:bg-F-G hover:text-white"
          >
            {saveIcon}
          </button>
          </div>
        </form>
        <div className="flex justify-center h-96 p-4 border-2 order-1 md:order-2">
          <Bar
            data={{
              labels: ["IMC"],
              datasets: [
                {
                  data: [imc],
                  backgroundColor: [getIMCColor()],
                  tension: 0.5,
                  fill: true,
                  borderColor: "rgba(255, 99, 132)",
                  pointRadius: 5,
                  pointBorderColor: "rgba(255, 99, 132)",
                  pointBackgroundColor: "rgba(255, 99, 132)",
                  borderWidth: 0.1,
                  barThickness: 50,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
              maintainAspectRatio: false,
              responsive: true,
              aspectRatio: 1.5,
            }}
          />
        </div>
      </div>
    </>
  );
}
