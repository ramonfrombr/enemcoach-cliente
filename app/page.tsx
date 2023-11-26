import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 data-testid="heading">ENEM Coach</h1>
      <Link href="/simulado">
        <button data-testid="button-iniciar-simulado">Iniciar Simulado</button>
      </Link>
    </main>
  );
}
