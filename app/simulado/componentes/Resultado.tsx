import { SimuladoRespostasContext } from "@/app/contexts/SimuladoRespostasContext";
import { questoesSample } from "@/dataSample/questoes";
import React, { useContext } from "react";
import QuestaoCorrigida from "./QuestaoCorrigida";

const Resultado = () => {
  const { respostas } = useContext(SimuladoRespostasContext);

  const nQuestoes = Object.values(respostas).length;

  const nRespostasCorretas = Object.values(respostas).reduce(
    (accumulator, currentValue) =>
      currentValue === "A" ? accumulator + 1 : accumulator,
    0
  );
  return (
    <div>
      <h3 className="text-2xl">
        Pontuação: {nRespostasCorretas}/{nQuestoes}
      </h3>

      {questoesSample.map((questao: IQuestao, idx: number) => (
        <QuestaoCorrigida key={idx} questao={questao} />
      ))}
    </div>
  );
};

export default Resultado;
