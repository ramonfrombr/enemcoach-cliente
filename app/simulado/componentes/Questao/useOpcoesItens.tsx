import { useMemo } from "react";
import shuffleElements from "./shuffleElements";
import { A, B, C, D, E } from "../../../constants/options";

interface Props {
  questao: IQuestao;
  definirResposta: any;
}

function useOpcoesItens({ questao, definirResposta }: Props) {
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
          {opcao === A
            ? questao.opcaoa
            : opcao === B
            ? questao.opcaob
            : opcao === C
            ? questao.opcaoc
            : opcao === D
            ? questao.opcaod
            : questao.opcaoe}
        </span>
      </label>
    );

    const opcoes = [
      criarOpcao(A),
      criarOpcao(B),
      criarOpcao(C),
      criarOpcao(D),
      criarOpcao(E),
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

  return opcoesItens;
}

export default useOpcoesItens;
