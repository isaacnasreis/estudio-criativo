import React, { useState } from "react";
import styles from "./DashboardPage.module.css";
import Nota from "../components/Nota";

const mockIdeias = [
  {
    id: 1,
    texto: "Uma cena de perseguição em um mercado flutuante em Neo-Bangkok.",
    cor: "#fff9c4",
    posicao: { x: 50, y: 100 },
  },
  {
    id: 2,
    texto: "O protagonista descobre que seu mentor é, na verdade, o vilão.",
    cor: "#c8e6c9",
    posicao: { x: 400, y: 250 },
  },
  {
    id: 3,
    texto:
      "Qual é o objeto mágico que todos estão procurando? Um relógio que para o tempo?",
    cor: "#bbdefb",
    posicao: { x: 200, y: 400 },
  },
];

function DashboardPage() {
  const [ideias, setIdeias] = useState(mockIdeias);

  return (
    <div className={styles.mainContent}>
      <div className={styles.header}>
        <h2 className={styles.title}>Painel de Ideias</h2>
        <button className={styles.addButton}>+ Nova Ideia</button>
      </div>

      <div className={styles.board}>
        {ideias.map((nota) => (
          <Nota key={nota.id} nota={nota} />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
