import { useState } from "react";
import ListarMsn from "./ListarMsn";

const Home = () => {
  const [mensagens, setMensagens] = useState([
    {
      title: "Curso de MPython",
      bodY: "Python com BI",
      author: "Olifrans",
      id: 1,
    },
    {
      title: "Curso de Java Sql-Server",
      bodY: "Java EE e Sql Server",
      author: "Pedro",
      id: 2,
    },
    {
      title: "Curso de  Back e Front End",
      bodY: "React e DotNet",
      author: "Mario André",
      id: 3,
    },
    {
      title: "Curso de Agile",
      bodY: "Agile com React e DotNet",
      author: "Olifrans",
      id: 4,
    },
    {
      title: "Curso de  Scrum",
      bodY: "Scrum e DotNet",
      author: "Olifrans",
      id: 5,
    },
  ]);

  const handleDelete = (id) => {
    const newMensagem = mensagens.filter((msn) => msn.id !== id);
    setMensagens(newMensagem);
  };

  return (
    <div className="home">
      <p> {Math.random() * 1.666666666} </p>
      <h2>ITI - Instituto Tecnológico Inovação</h2>
      <br></br>

      <ListarMsn
        mensagens={mensagens}
        title="Área de Mensagens!"
        handleDelete={handleDelete}
      />

      <ListarMsn
        mensagens={mensagens.filter((msn) => msn.author === "Olifrans")}
        title="Mensagens de Olifrans!"
      />
    </div>
  );
};

export default Home;
