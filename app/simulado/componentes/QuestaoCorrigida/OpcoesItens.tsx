import { QuestaoOpcoes } from "@/app/contexts/SimuladoRespostasContext";
import OpcaoA from "./OpcaoA";
import OpcaoIncorreta from "./OpcaoIncorreta";
import { B, C, D, E } from "../../../constants/options";

interface Props {
  opcaoSelecionada: QuestaoOpcoes;
  questao: IQuestao;
}

const OpcoesItens = ({ opcaoSelecionada, questao }: Props) => (
  <>
    <OpcaoA opcaoSelecionada={opcaoSelecionada} questao={questao} />
    <OpcaoIncorreta
      opcaoSelecionada={opcaoSelecionada}
      questao={questao}
      opcao={B}
    />
    <OpcaoIncorreta
      opcaoSelecionada={opcaoSelecionada}
      questao={questao}
      opcao={C}
    />
    <OpcaoIncorreta
      opcaoSelecionada={opcaoSelecionada}
      questao={questao}
      opcao={D}
    />
    <OpcaoIncorreta
      opcaoSelecionada={opcaoSelecionada}
      questao={questao}
      opcao={E}
    />
  </>
);

export default OpcoesItens;
