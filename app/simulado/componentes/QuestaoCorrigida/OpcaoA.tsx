import { QuestaoOpcoes } from "@/app/contexts/SimuladoRespostasContext";
import { A } from "../../../constants/options";

interface Props {
  opcaoSelecionada: QuestaoOpcoes;
  questao: IQuestao;
}

const OpcaoA = ({ opcaoSelecionada, questao }: Props) => (
  <label
    className={`${opcaoSelecionada === A && "bg-green-200"} p-2`}
    data-testid={`questao-${questao.numero}-opcao-${A}`}
  >
    <input
      className="mt-[5px] mr-1"
      type="radio"
      name={`questao-${questao.numero}`}
      id={`questao-${questao.numero}-opcao-${A}`}
      disabled
      checked={opcaoSelecionada === A}
    />
    <span>{questao.opcaoa}</span>
  </label>
);

export default OpcaoA;
