import React from "react";
import styles from "./CharacterCard.module.css";

function CharacterCard({ personagem }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{personagem.nome}</h3>
      <p className={styles.cardSynopsis}>{personagem.sinopse}</p>
      <div className={styles.cardActions}>
        <button className={styles.actionButton}>Ver / Editar</button>
        <button className={`${styles.actionButton} ${styles.deleteButton}`}>
          Excluir
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;
