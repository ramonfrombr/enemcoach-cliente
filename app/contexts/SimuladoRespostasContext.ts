import { SetStateAction, createContext, Dispatch } from "react";

type QuestaoOpcoes = "A" | "B" | "C" | "D" | "E" | "";

interface ISimuladoRespostas {
  "1": QuestaoOpcoes;
  "2": QuestaoOpcoes;
  "3": QuestaoOpcoes;
  "4": QuestaoOpcoes;
  "5": QuestaoOpcoes;
}

export const SimuladoRespostasEmBranco: ISimuladoRespostas = {
  "1": "",
  "2": "",
  "3": "",
  "4": "",
  "5": "",
};

export type SimuladoRespostasContextProps = {
  respostas: ISimuladoRespostas;
  setRespostas: React.Dispatch<React.SetStateAction<ISimuladoRespostas>>;
};

export const SimuladoRespostasContext =
  createContext<SimuladoRespostasContextProps>({
    respostas: SimuladoRespostasEmBranco,
    setRespostas: () => {},
  });
