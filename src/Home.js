import { useState, useEffect } from "react";
import ListarMsn from "./ListarMsn";

const Home = () => {



  const [mensagens, setMensagens] = useState(null);

  // const handleDelete = (id) => {
  //   const newMensagem = mensagens.filter((msn) => msn.id !== id);
  //   setMensagens(newMensagem);
  // };

  useEffect(() => {
    fetch("http://localhost:8000/mensagens")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMensagens(data);
      });
  }, []);

  return (
    <div className="home">
      <h3>Randômico Perfeito Irracional Infinito Fibonacci.</h3>
      <p> {Math.random() * 1.618} </p>
      <br />
      <h3>ITI - Instituto Tecnológico Inovação</h3>
      <br />

      {mensagens && (
        <ListarMsn
          mensagens={mensagens}
          title="Área de Mensagens!"
          // handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
