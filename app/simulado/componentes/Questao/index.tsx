"use client";
import { SimuladoRespostasContext } from "@/app/contexts/SimuladoRespostasContext";
import React, { useContext, useState } from "react";
import useOpcoesItens from "./useOpcoesItens";
import useDefinirResposta from "./useDefinirResposta";

interface QuestaoProps {
  questao: IQuestao;
}

const Questao: React.FC<QuestaoProps> = ({ questao }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>("");

  const { setRespostas, exibirResultado } = useContext(
    SimuladoRespostasContext
  );

  const definirResposta = useDefinirResposta({
    setOpcaoSelecionada,
    setRespostas,
    questao,
  });

  const opcoesItens = useOpcoesItens({ questao, definirResposta });

  return (
    <div className="p-5 border my-5 w-full" suppressHydrationWarning>
      <h2 className="font-bold">
        Questao {questao.numero}
        <span className="text-red-500">{opcaoSelecionada}</span>
      </h2>
      <main
        className="mb-5"
        data-testid={`questao-${questao.numero}-enunciado`}
      >
        {questao.enunciado}
      </main>

      <form className="flex-col flex ">{opcoesItens}</form>
    </div>
  );
};

export default Questao;
