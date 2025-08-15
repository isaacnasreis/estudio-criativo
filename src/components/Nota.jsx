import React from "react";
import styles from "./Nota.module.css";

function Nota({ nota }) {
  const style = {
    left: `${nota.posicao.x}px`,
    top: `${nota.posicao.y}px`,
    backgroundColor: nota.cor,
  };

  return (
    <div className={styles.nota} style={style}>
      <button className={styles.deleteButton}>&times;</button>
      <div className={styles.content}>{nota.texto}</div>
    </div>
  );
}

export default Nota;
