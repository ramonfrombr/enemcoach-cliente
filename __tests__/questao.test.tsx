import { render, screen, fireEvent } from "@testing-library/react";
import Questao from "../app/simulado/componentes/Questao";
import "@testing-library/jest-dom";
import {
  Props,
  SimuladoRespostasProvider,
} from "@/app/contexts/SimuladoRespostasContext";
import { questoesSample } from "@/dataSample/questoes";
import Gabarito from "@/app/simulado/componentes/Gabarito";

describe("Home", () => {
  it("quando componente Questao é carregado, exibe enunciado e 5 opções de resposta", () => {
    const questaoExemplo: IQuestao = {
      numero: 1,
      enunciado: "abc",
      opcaoa: "123",
      opcaob: "xyz",
      opcaoc: "456",
      opcaod: "qwe",
      opcaoe: "poi",
    };

    render(<Questao questao={questaoExemplo} />);

    const enunciado = screen.getByTestId(
      `questao-${questaoExemplo.numero}-enunciado`
    );
    const opcaoa = screen.getByTestId(
      `questao-${questaoExemplo.numero}-opcao-a`
    );
    const opcaob = screen.getByTestId(
      `questao-${questaoExemplo.numero}-opcao-B`
    );
    const opcaoc = screen.getByTestId(
      `questao-${questaoExemplo.numero}-opcao-C`
    );
    const opcaod = screen.getByTestId(
      `questao-${questaoExemplo.numero}-opcao-D`
    );
    const opcaoe = screen.getByTestId(
      `questao-${questaoExemplo.numero}-opcao-E`
    );
    expect(enunciado).toBeInTheDocument();
    expect(enunciado.innerHTML).toBe(questaoExemplo.enunciado);
    expect(opcaoa).toBeInTheDocument();
    expect(opcaoa.getElementsByTagName("span")[0].innerHTML).toBe(
      questaoExemplo.opcaoa
    );
    expect(opcaob).toBeInTheDocument();
    expect(opcaob.getElementsByTagName("span")[0].innerHTML).toBe(
      questaoExemplo.opcaob
    );
    expect(opcaoc).toBeInTheDocument();
    expect(opcaoc.getElementsByTagName("span")[0].innerHTML).toBe(
      questaoExemplo.opcaoc
    );
    expect(opcaod).toBeInTheDocument();
    expect(opcaod.getElementsByTagName("span")[0].innerHTML).toBe(
      questaoExemplo.opcaod
    );
    expect(opcaoe).toBeInTheDocument();
    expect(opcaoe.getElementsByTagName("span")[0].innerHTML).toBe(
      questaoExemplo.opcaoe
    );
  });
});
