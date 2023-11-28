import {
  ISimuladoRespostas,
  SimuladoRespostasContext,
} from "@/app/contexts/SimuladoRespostasContext";
import React, { useContext } from "react";

interface QuestaoProps {
  questao: IQuestao;
}

const QuestaoCorrigida: React.FC<QuestaoProps> = ({ questao }) => {
  const { respostas } = useContext(SimuladoRespostasContext);
  const opcaoSelecionada =
    respostas[String(questao.numero) as keyof ISimuladoRespostas];

  const OpcaoA = () => (
    <label
      className={`${opcaoSelecionada === "A" && "bg-green-200"} p-2`}
      data-testid={`questao-${questao.numero}-opcao-a`}
    >
      <input
        className="mt-[5px] mr-1"
        type="radio"
        name={`questao-${questao.numero}`}
        id={`questao-${questao.numero}-opcao-a`}
        disabled
        checked={opcaoSelecionada === "A"}
      />
      <span>{questao.opcaoa}</span>
    </label>
  );

  const OpcaoIncorreta = ({ opcao }: { opcao: string }) => (
    <label
      className={`${
        opcaoSelecionada.toLowerCase() === opcao.toLowerCase() && "bg-red-200"
      } p-2`}
      data-testid={`questao-${questao.numero}-opcao-${opcao}`}
    >
      <input
        className="mt-[5px] mr-1"
        type="radio"
        name={`questao-${questao.numero}`}
        id={`questao-${questao.numero}-opcao-${opcao}`}
        disabled
        checked={opcaoSelecionada.toLowerCase() === opcao.toLowerCase()}
      />
      <span>{questao.opcaob}</span>
    </label>
  );

  const OpcoesItens = () => (
    <>
      <OpcaoA />
      <OpcaoIncorreta opcao="b" />
      <OpcaoIncorreta opcao="c" />
      <OpcaoIncorreta opcao="d" />
      <OpcaoIncorreta opcao="e" />
    </>
  );
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
        <OpcoesItens />
      </form>
    </div>
  );
};

export default QuestaoCorrigida;
