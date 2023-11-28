import Link from "next/link";
import Navbar from "./componentes/Navbar/Navbar";
import Hero from "./componentes/Hero/Hero";
import Rodape from "./componentes/Rodape/Rodape";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Rodape />
    </main>
  );
}
