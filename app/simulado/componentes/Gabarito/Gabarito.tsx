import { SimuladoRespostasContext } from "@/app/contexts/SimuladoRespostasContext";
import React, { useContext } from "react";

const Gabarito = () => {
  const { respostas } = useContext(SimuladoRespostasContext);

  return (
    <div>
      <pre className="fixed top-10 right-20">
        {JSON.stringify({ respostas }, undefined, 2)}
      </pre>
    </div>
  );
};

export default Gabarito;
