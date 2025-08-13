import React, { useState } from "react";
import styles from "./CharacterCard.module.css";

const PLACEHOLDER_IMAGE = "https://placehold.co/600x400?text=Personagem";

function CharacterCard({ personagem, onDelete, onEdit }) {
  const [imgSrc, setImgSrc] = useState(
    personagem.imagemUrl || PLACEHOLDER_IMAGE
  );

  const handleImageError = () => {
    setImgSrc(PLACEHOLDER_IMAGE);
  };

  return (
    <div className={styles.card}>
      <img
        src={imgSrc}
        alt={`Imagem de ${personagem.nome}`}
        className={styles.cardImage}
        onError={handleImageError}
      />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{personagem.nome}</h3>
        <p className={styles.cardSynopsis}>{personagem.sinopse}</p>
        <div className={styles.cardActions}>
          <button
            className={styles.actionButton}
            onClick={() => onEdit(personagem)}
          >
            Ver / Editar
          </button>
          <button
            className={`${styles.actionButton} ${styles.deleteButton}`}
            onClick={() => onDelete(personagem.id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
