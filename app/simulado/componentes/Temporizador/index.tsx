import { SimuladoRespostasContext } from "@/app/contexts/SimuladoRespostasContext";
import React, { useContext, useMemo } from "react";
import Countdown from "react-countdown";

const Temporizador = () => {
  const { exibirResultado } = useContext(SimuladoRespostasContext);
  const segundos = 60;
  const minutos = 60;
  const horas = 5;

  const time = useMemo(
    () => Date.now() + 1000 * segundos * minutos * horas,
    [segundos, minutos, horas]
  );

  if (!exibirResultado) {
    return (
      <div className="fixed top-2 right-2 bg-slate-700 text-white px-2 rounded">
        <Countdown date={time} />
      </div>
    );
  } else {
    return <></>;
  }
};

export default Temporizador;
