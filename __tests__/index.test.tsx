import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../app/page";
import Questao from "../app/simulado/componentes/Questao";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByTestId("heading");
    expect(heading).toBeInTheDocument();
  });

  it("quando clica no botão Iniciar Simulado, é redirecionado para página de simulado", () => {
    render(<Home />);

    const buttonIniciarSimulado = screen.getByTestId("button-iniciar-simulado");
    expect(buttonIniciarSimulado).toBeInTheDocument();

    fireEvent(
      buttonIniciarSimulado,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    setTimeout(() => {
      expect(global.window.location.pathname).toContain("/simulado");
    }, 2000);
  });

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
      `questao-${questaoExemplo.numero}-opcao-b`
    );
    const opcaoc = screen.getByTestId(
      `questao-${questaoExemplo.numero}-opcao-c`
    );
    const opcaod = screen.getByTestId(
      `questao-${questaoExemplo.numero}-opcao-d`
    );
    const opcaoe = screen.getByTestId(
      `questao-${questaoExemplo.numero}-opcao-e`
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
