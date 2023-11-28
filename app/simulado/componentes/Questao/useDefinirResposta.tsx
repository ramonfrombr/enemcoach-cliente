import { ISimuladoRespostas } from "@/app/contexts/SimuladoRespostasContext";
import React, { useCallback } from "react";

interface Props {
  questao: IQuestao;
  setOpcaoSelecionada: React.Dispatch<React.SetStateAction<string>>;
  setRespostas: React.Dispatch<React.SetStateAction<ISimuladoRespostas>>;
}

const useDefinirResposta = ({
  setOpcaoSelecionada,
  setRespostas,
  questao,
}: Props) => {
  return useCallback(
    (resposta: string) => {
      setOpcaoSelecionada(resposta);
      const questaoNumero = String(questao["numero"]);
      setRespostas((respostasAtual) => ({
        ...respostasAtual,
        [questaoNumero]: resposta,
      }));
    },
    [questao, setRespostas, setOpcaoSelecionada]
  );
};

export default useDefinirResposta;
