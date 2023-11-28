import {
  ISimuladoRespostas,
  SimuladoRespostasContext,
} from "@/app/contexts/SimuladoRespostasContext";
import React, { useContext } from "react";
import OpcoesItens from "./OpcoesItens";

interface QuestaoProps {
  questao: IQuestao;
}

const QuestaoCorrigida: React.FC<QuestaoProps> = ({ questao }) => {
  const { respostas } = useContext(SimuladoRespostasContext);
  const opcaoSelecionada =
    respostas[String(questao.numero) as keyof ISimuladoRespostas];

  return (
    <div className="p-5 border my-5 w-full" suppressHydrationWarning>
      <h2 className="font-bold">Questao {questao.numero}</h2>
      <main
        className="mb-5"
        data-testid={`questao-${questao.numero}-enunciado`}
      >
        {questao.enunciado}
      </main>

      <form className="flex-col flex">
        <OpcoesItens opcaoSelecionada={opcaoSelecionada} questao={questao} />
      </form>
    </div>
  );
};

export default QuestaoCorrigida;
