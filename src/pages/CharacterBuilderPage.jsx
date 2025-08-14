import React, { useState } from "react";
import styles from "./CharacterBuilderPage.module.css";
import CharacterCard from "../components/CharacterCard";
import Modal from "../components/Modal";

const mockPersonagens = [
  {
    id: 1,
    nome: "Anya Sharma",
    sinopse:
      "Uma detetive cibernética que caça IAs desonestas em uma Neo-Delhi chuvosa.",
    imagemUrl:
      "https://m.media-amazon.com/images/M/MV5BZWM1Mzk1NTYtZGQ4Ny00YmEzLTk4ZTUtZGQwZmNhNTg0YjU0XkEyXkFqcGc@._V1_.jpg",
    historia:
      'Órfã após o "Grande Apagão de IA", Anya foi criada nas ruas de neon, desenvolvendo um ódio e uma fascinação por inteligências artificiais. Foi recrutada pela Divisão de Crimes Cibernéticos por sua habilidade única de prever os movimentos de IAs.',
    personalidade:
      "Cínica e pragmática, mas com um forte senso de justiça. Viciada em café sintético e música Lo-Fi antiga.",
  },
  {
    id: 2,
    nome: "Kaelen",
    sinopse:
      "O último elfo de uma floresta esquecida, em uma busca para restaurar a magia.",
    imagemUrl:
      "https://m.media-amazon.com/images/M/MV5BZWM1Mzk1NTYtZGQ4Ny00YmEzLTk4ZTUtZGQwZmNhNTg0YjU0XkEyXkFqcGc@._V1_.jpg",
    historia:
      "Viu sua floresta natal murchar com o avanço da industrialização. Carrega a última semente da Árvore-Coração e viaja pelo mundo em busca de um solo puro onde a magia possa renascer.",
    personalidade:
      "Sábio, melancólico e desconfiado dos humanos, mas com uma esperança inabalável. Fala pouco, mas suas palavras têm grande peso.",
  },
  {
    id: 3,
    nome: "Capitã Eva Rostova",
    sinopse:
      "Uma piloto de cargueiro espacial que descobre uma conspiração intergaláctica.",
    imagemUrl: "",
    historia:
      'Ex-piloto de caça da Aliança, foi expulsa por insubordinação. Agora, vive transportando cargas questionáveis nos confins da galáxia com sua nave, a "Andarilha".',
    personalidade:
      "Corajosa, teimosa e leal à sua pequena tripulação. Resolve a maioria dos problemas com um blaster ou uma piada sarcástica.",
  },
];

function CharacterBuilderPage() {
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
    <main className={styles.mainContent}>
      <div className={styles.headerText}>
        <h2>Construtor de Personagens</h2>
        <p>
          Dê vida aos seus personagens. Crie perfis detalhados para construir
          narrativas mais ricas.
        </p>
      </div>
      <button className="primaryButton" onClick={handleOpenCreateModal}>
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <form onSubmit={handleFormSubmit}>
          <h2 className="formTitle">
            {personagemParaEditar ? "Editar Personagem" : "Novo Personagem"}
          </h2>

          <div className="formGroup">
            <label htmlFor="nome" className="formLabel">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="formInput"
              value={novoPersonagem.nome}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="formGroup">
            <label htmlFor="imagemUrl" className="formLabel">
              URL da Imagem
            </label>
            <input
              type="text"
              id="imagemUrl"
              name="imagemUrl"
              className="formInput"
              value={novoPersonagem.imagemUrl}
              onChange={handleInputChange}
              placeholder="./public/img-de-teste.png"
            />
          </div>

          <div className="formGroup">
            <label htmlFor="sinopse" className="formLabel">
              Sinopse
            </label>
            <textarea
              id="sinopse"
              name="sinopse"
              className="formInput"
              rows="4"
              value={novoPersonagem.sinopse}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="formGroup">
            <label htmlFor="historia" className="formLabel">
              História de Fundo
            </label>
            <textarea
              id="historia"
              name="historia"
              className="formInput"
              rows="6"
              value={novoPersonagem.historia}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="formGroup">
            <label htmlFor="personalidade" className="formLabel">
              Personalidade / Traços
            </label>
            <textarea
              id="personalidade"
              name="personalidade"
              className="formInput"
              rows="4"
              value={novoPersonagem.personalidade}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <div className="formActions">
            <button type="submit" className="primaryButton">
              {personagemParaEditar ? "Salvar Alterações" : "Salvar Personagem"}
            </button>
            <button
              type="button"
              className="secondaryButton"
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default CharacterBuilderPage;
