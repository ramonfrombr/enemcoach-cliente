"use client";
import { SimuladoRespostasContext } from "@/app/contexts/SimuladoRespostasContext";
import React, { useContext, useState } from "react";

interface QuestaoProps {
  questao: IQuestao;
}

const Questao: React.FC<QuestaoProps> = ({ questao }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>("");

  const { setRespostas } = useContext(SimuladoRespostasContext);

  const definirResposta = (resposta: string) => {
    setOpcaoSelecionada(resposta);
    const questaoNumero = String(questao["numero"]);
    setRespostas((respostasAtual) => ({
      ...respostasAtual,
      [questaoNumero]: resposta,
    }));
  };

  return (
    <div className="p-5 border m-5 w-[500px]">
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

      <form className="flex-col flex [&>label]:mb-5">
        <label
          data-testid={`questao-${questao.numero}-opcao-a`}
          htmlFor={`questao-${questao.numero}-opcao-a`}
        >
          <input
            type="radio"
            name={`questao-${questao.numero}`}
            id={`questao-${questao.numero}-opcao-a`}
            onChange={() => definirResposta("A")}
          />
          <span>{questao.opcaoa}</span>
        </label>
        <label
          data-testid={`questao-${questao.numero}-opcao-b`}
          htmlFor={`questao-${questao.numero}-opcao-b`}
        >
          <input
            type="radio"
            name={`questao-${questao.numero}`}
            id={`questao-${questao.numero}-opcao-b`}
            onChange={() => definirResposta("B")}
          />
          <span>{questao.opcaob}</span>
        </label>
        <label
          data-testid={`questao-${questao.numero}-opcao-c`}
          htmlFor={`questao-${questao.numero}-opcao-c`}
        >
          <input
            type="radio"
            name={`questao-${questao.numero}`}
            id={`questao-${questao.numero}-opcao-c`}
            onChange={() => definirResposta("C")}
          />
          <span>{questao.opcaoc}</span>
        </label>

        <label
          data-testid={`questao-${questao.numero}-opcao-d`}
          htmlFor={`questao-${questao.numero}-opcao-d`}
        >
          <input
            type="radio"
            name={`questao-${questao.numero}`}
            id={`questao-${questao.numero}-opcao-d`}
            onChange={() => definirResposta("D")}
          />
          <span>{questao.opcaod}</span>
        </label>

        <label
          data-testid={`questao-${questao.numero}-opcao-e`}
          htmlFor={`questao-${questao.numero}-opcao-e`}
        >
          <input
            type="radio"
            name={`questao-${questao.numero}`}
            id={`questao-${questao.numero}-opcao-e`}
            onChange={() => definirResposta("E")}
          />
          <span>{questao.opcaoe}</span>
        </label>
      </form>
    </div>
  );
};

export default Questao;
