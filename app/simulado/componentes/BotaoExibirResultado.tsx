import { SimuladoRespostasContext } from "@/app/contexts/SimuladoRespostasContext";
import React, { useContext } from "react";
import Resultado from "./Resultado";

const BotaoExibirResultado = () => {
  const { setExibirResultado, exibirResultado } = useContext(
    SimuladoRespostasContext
  );

  return (
    <>
      {!exibirResultado && (
        <button
          className="text-white bg-blue-500 p-4 font-bold"
          onClick={() => {
            setExibirResultado(true);
            window.scrollTo(0, 0);
          }}
        >
          Finalizar prova
        </button>
      )}

      {exibirResultado && <Resultado />}
    </>
  );
};

export default BotaoExibirResultado;
