import { useState, useEffect } from "react";
import ListarMsn from "./ListarMsn";

const Home = () => {
  const [mensagens, setMensagens] = useState([
    {
      title: "Curso de Python",
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
      title: "Curso de  BackEnd e FrontEnd",
      bodY: "React e DotNet",
      author: "Mario André",
      id: 3,
    },
    {
      title: "Curso de Ágile",
      bodY: "Agile com React e DotNet",
      author: "Olifrans",
      id: 4,
    },
    {
      title: "Curso de  Scrum Master",
      bodY: "Scrum e DotNet",
      author: "Olifrans",
      id: 5,
    },
  ]);

  const handleDelete = (id) => {
    const newMensagem = mensagens.filter((msn) => msn.id !== id);
    setMensagens(newMensagem);
  };

  useEffect(() => {
    console.log("use effect ran");
  },[]);


  
  return (
    <div className="home">  

      <h3>Resultado Randômico perfeito irracional infinito da sequência de Fibonacci.</h3>
      <p> {Math.random() * 1.618} </p>
      <br />
      <h3>ITI - Instituto Tecnológico Inovação</h3>
      <br></br>






      <ListarMsn
        mensagens={mensagens}
        title="Área de Mensagens!"
        handleDelete={handleDelete}
      />


      <button onClick={() => setName("Francisco")}>Mudar Nome</button>
      <p>{name}</p>

      {/* <ListarMsn
        mensagens={mensagens.filter((msn) => msn.author === "Olifrans")}
        title="Mensagens de Olifrans!"
      /> */}
    </div>
  );
};

export default Home;
