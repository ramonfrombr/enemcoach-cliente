import { QuestaoOpcoes } from "@/app/contexts/SimuladoRespostasContext";
import { B, C, D } from "../../../constants/options";

interface Props {
  opcaoSelecionada: QuestaoOpcoes;
  questao: IQuestao;
  opcao: string;
}

const OpcaoIncorreta = ({ opcao, opcaoSelecionada, questao }: Props) => (
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
    <span>
      {opcao == B
        ? questao.opcaob
        : opcao == C
        ? questao.opcaoc
        : opcao == D
        ? questao.opcaod
        : questao.opcaoe}
    </span>
  </label>
);

export default OpcaoIncorreta;
