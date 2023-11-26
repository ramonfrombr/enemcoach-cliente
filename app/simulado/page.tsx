"use client";
import React, { useState } from "react";
import { questoesSample } from "../../dataSample/questoes";
import Questao from "./componentes/Questao";
import {
  SimuladoRespostasContext,
  SimuladoRespostasEmBranco,
} from "../contexts/SimuladoRespostasContext";

const SimuladoPage = () => {
  const [respostas, setRespostas] = useState(SimuladoRespostasEmBranco);

  return (
    <SimuladoRespostasContext.Provider
      value={{
        respostas,
        setRespostas,
      }}
    >
      <pre className="fixed top-10 right-20">
        {JSON.stringify({ respostas }, undefined, 2)}
      </pre>
      <div>
        {questoesSample.map((questao: IQuestao, idx: number) => (
          <Questao key={idx} questao={questao} />
        ))}
      </div>
    </SimuladoRespostasContext.Provider>
  );
};

export default SimuladoPage;
