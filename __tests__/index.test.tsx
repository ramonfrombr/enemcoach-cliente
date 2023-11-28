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
});
