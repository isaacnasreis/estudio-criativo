import React, { useState } from "react";
import styles from "./App.module.css";
import CharacterCard from "./components/CharacterCard";

const mockPersonagens = [
  {
    id: 1,
    nome: "Anya Sharma",
    sinopse:
      "Uma detetive cibernética que caça IAs desonestas em uma Neo-Delhi chuvosa.",
  },
  {
    id: 2,
    nome: "Kaelen",
    sinopse:
      "O último elfo de uma floresta esquecida, em uma busca para restaurar a magia.",
  },
  {
    id: 3,
    nome: "Capitã Eva Rostova",
    sinopse:
      "Uma piloto de cargueiro espacial que descobre uma conspiração intergaláctica.",
  },
];

function App() {
  const [personagens, setPersonagens] = useState(mockPersonagens);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <h1>Estúdio Criativo</h1>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                className="block rounded-lg p-3 font-semibold text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                Painel de Ideias
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg p-3 font-semibold bg-gray-700 text-white"
              >
                {" "}
                Personagens
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg p-3 font-semibold text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                Estrutura de Roteiro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-lg p-3 font-semibold text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                Editor Focado
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        <div>
          <h2>Construtor de Personagens</h2>
          <p>
            Dê vida aos seus personagens. Crie perfis detalhados para construir
            narrativas mais ricas.
          </p>
        </div>
        <button className={styles.primaryButton}>
          + Criar Novo Personagem
        </button>

        <div className={styles.characterGrid}>
          {personagens.map((p) => (
            <CharacterCard key={p.id} personagem={p} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
