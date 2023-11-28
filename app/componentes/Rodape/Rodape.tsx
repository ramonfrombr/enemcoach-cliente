import React from "react";
import Logo from "../Logo/Logo";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

const Rodape = () => {
  return (
    <footer className="bg-teal-200 h-[200px] flex flex-col p-2 text-teal-700">
      <Logo />
      <p className="mb-2">Siga-nos nas redes sociais</p>
      <div className="flex gap-1 text-2xl mb-3">
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaTwitter />
        </a>
        <a href="">
          <FaFacebookF />
        </a>
      </div>

      <div>
        <h6 className="text-lg font-bold">Contato</h6>
        <span>Email: contatoenemcoach@gmail.com</span>
      </div>
    </footer>
  );
};

export default Rodape;
