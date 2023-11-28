"use client";
import { SimuladoRespostasContext } from "@/app/contexts/SimuladoRespostasContext";
import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

interface QuestaoProps {
  questao: IQuestao;
}

function shuffleElements(array: React.JSX.Element[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Questao: React.FC<QuestaoProps> = ({ questao }) => {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>("");

  const { setRespostas, exibirResultado } = useContext(
    SimuladoRespostasContext
  );

  const definirResposta = useCallback(
    (resposta: string) => {
      setOpcaoSelecionada(resposta);
      const questaoNumero = String(questao["numero"]);
      setRespostas((respostasAtual) => ({
        ...respostasAtual,
        [questaoNumero]: resposta,
      }));
    },
    [questao, setRespostas]
  );

  const opcoesItens = useMemo(() => {
    const criarOpcao = (opcao: string) => (
      <label
        className="flex items-start cursor-pointer hover:bg-slate-200 py-3 px-2 transition duration-150"
        data-testid={`questao-${questao.numero}-opcao-${opcao}`}
        htmlFor={`questao-${questao.numero}-opcao-${opcao}`}
      >
        <input
          className="mt-[5px] mr-1"
          type="radio"
          name={`questao-${questao.numero}`}
          id={`questao-${questao.numero}-opcao-${opcao}`}
          onChange={() => definirResposta(opcao.toUpperCase())}
        />
        <span>
          {opcao === "a"
            ? questao.opcaoa
            : opcao === "b"
            ? questao.opcaob
            : opcao === "c"
            ? questao.opcaoc
            : opcao === "d"
            ? questao.opcaod
            : questao.opcaoe}
        </span>
      </label>
    );

    const opcoes = [
      criarOpcao("a"),
      criarOpcao("b"),
      criarOpcao("c"),
      criarOpcao("d"),
      criarOpcao("e"),
    ];

    shuffleElements(opcoes);

    return (
      <>
        {opcoes[0]}
        {opcoes[1]}
        {opcoes[2]}
        {opcoes[3]}
        {opcoes[4]}
      </>
    );
  }, [questao, definirResposta]);

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
