"use client";
import React from "react";
import { SimuladoRespostasProvider } from "../contexts/SimuladoRespostasContext";
import BotaoExibirResultado from "./componentes/BotaoExibirResultado";
import Questoes from "./componentes/Questoes";
import Temporizador from "./componentes/Temporizador";

const SimuladoPage = () => {
  return (
    <SimuladoRespostasProvider>
      <main className="p-4 sm:w-[600px]">
        <Temporizador />
        <Questoes />
        <BotaoExibirResultado />
      </main>
    </SimuladoRespostasProvider>
  );
};

export default SimuladoPage;
