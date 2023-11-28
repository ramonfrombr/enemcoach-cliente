"use client";
import React, { useContext, useState } from "react";
import { questoesSample } from "../../dataSample/questoes";
import Questao from "./componentes/Questao";
import Gabarito from "./componentes/Gabarito";

import { SimuladoRespostasProvider } from "../contexts/SimuladoRespostasContext";
import Resultado from "./componentes/Resultado";
import BotaoExibirResultado from "./componentes/BotaoExibirResultado";
import Questoes from "./componentes/Questoes";
import Countdown from "react-countdown";
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
