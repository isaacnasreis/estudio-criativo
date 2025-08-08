import React from "react";
import styles from "./App.module.css";

function App() {
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
        <h2>Construtor de Personagens</h2>
        <p>
          Dê vida aos seus personagens. Crie perfis detalhados para construir
          narrativas mais ricas.
        </p>
      </main>
    </div>
  );
}

export default App;
