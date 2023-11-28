import { createContext, useState } from "react";
import { A, B, C, D, E } from "../constants/options";

export type QuestaoOpcoes =
  | typeof A
  | typeof B
  | typeof C
  | typeof D
  | typeof E
  | "";

export type ISimuladoRespostas = {
  "1": QuestaoOpcoes;
  "2": QuestaoOpcoes;
  "3": QuestaoOpcoes;
  "4": QuestaoOpcoes;
  "5": QuestaoOpcoes;
};

export const SimuladoRespostasEmBranco: ISimuladoRespostas = {
  "1": "",
  "2": "",
  "3": "",
  "4": "",
  "5": "",
};

type SimuladoRespostasContextProps = {
  respostas: ISimuladoRespostas;
  setRespostas: React.Dispatch<React.SetStateAction<ISimuladoRespostas>>;
  exibirResultado: boolean;
  setExibirResultado: React.Dispatch<React.SetStateAction<boolean>>;
};

const SimuladoRespostasContext = createContext<SimuladoRespostasContextProps>({
  respostas: SimuladoRespostasEmBranco,
  setRespostas: () => {},
  exibirResultado: false,
  setExibirResultado: () => {},
});

export interface Props {
  children: React.ReactNode;
}

const SimuladoRespostasProvider: React.FC<Props> = ({ children }) => {
  const [respostas, setRespostas] = useState(SimuladoRespostasEmBranco);
  const [exibirResultado, setExibirResultado] = useState(false);

  return (
    <SimuladoRespostasContext.Provider
      value={{
        respostas,
        setRespostas,
        exibirResultado,
        setExibirResultado,
      }}
    >
      {children}
    </SimuladoRespostasContext.Provider>
  );
};

export { SimuladoRespostasProvider, SimuladoRespostasContext };
