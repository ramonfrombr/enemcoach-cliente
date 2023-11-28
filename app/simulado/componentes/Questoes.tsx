import { questoesSample } from "@/dataSample/questoes";
import Questao from "./Questao";
import { SimuladoRespostasContext } from "@/app/contexts/SimuladoRespostasContext";
import React, { useContext } from "react";

const Questoes = () => {
  const { exibirResultado } = useContext(SimuladoRespostasContext);

  if (!exibirResultado) {
    return (
      <div>
        {questoesSample.map((questao: IQuestao, idx: number) => (
          <Questao key={idx} questao={questao} />
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default Questoes;
