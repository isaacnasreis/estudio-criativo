import React, { useState } from "react";
import styles from "./App.module.css";
import CharacterCard from "./components/CharacterCard";
import Modal from "./components/Modal";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [personagemParaEditar, setPersonagemParaEditar] = useState(null);

  const [novoPersonagem, setNovoPersonagem] = useState({
    nome: "",
    sinopse: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoPersonagem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (personagemParaEditar) {
      setPersonagens((personagensAtuais) =>
        personagensAtuais.map((p) =>
          p.id === personagemParaEditar.id ? novoPersonagem : p
        )
      );
    } else {
      setPersonagens((personagensAtuais) => [
        ...personagensAtuais,
        {
          id: Date.now(),
          ...novoPersonagem,
        },
      ]);
    }

    setNovoPersonagem({ nome: "", sinopse: "" });
    setPersonagemParaEditar(null);
    setIsModalOpen(false);
  };

  const handleDeletePersonagem = (idParaExcluir) => {
    if (window.confirm("Tem certeza que deseja excluir este personagem?")) {
      setPersonagens((personagensAtuais) =>
        personagensAtuais.filter((p) => p.id !== idParaExcluir)
      );
    }
  };

  const handleOpenEditModal = (personagem) => {
    setPersonagemParaEditar(personagem);
    setNovoPersonagem(personagem);
    setIsModalOpen(true);
  };

  const handleOpenCreateModal = () => {
    setPersonagemParaEditar(null);
    setNovoPersonagem({ nome: "", sinopse: "" });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setPersonagemParaEditar(null);
    setNovoPersonagem({ nome: "", sinopse: "" });
    setIsModalOpen(false);
  };

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
        <button
          className={styles.primaryButton}
          onClick={handleOpenCreateModal}
        >
          + Criar Novo Personagem
        </button>

        <div className={styles.characterGrid}>
          {personagens.map((p) => (
            <CharacterCard
              key={p.id}
              personagem={p}
              onDelete={handleDeletePersonagem}
              onEdit={handleOpenEditModal}
            />
          ))}
        </div>
      </main>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <form onSubmit={handleFormSubmit}>
          <h2 className={styles.formTitle}>
            {personagemParaEditar ? "Editar Personagem" : "Novo Personagem"}
          </h2>

          <div className={styles.formGroup}>
            <label htmlFor="nome" className={styles.formLabel}>
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className={styles.formInput}
              value={novoPersonagem.nome}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="sinopse" className={styles.formLabel}>
              Sinopse
            </label>
            <textarea
              id="sinopse"
              name="sinopse"
              className={styles.formInput}
              rows="4"
              value={novoPersonagem.sinopse}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className={styles.formActions}>
            <button type="submit" className={styles.primaryButton}>
              {personagemParaEditar ? "Salvar Alterações" : "Salvar Personagem"}
            </button>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;
