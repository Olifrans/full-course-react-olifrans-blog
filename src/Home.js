import { useState, useEffect } from "react";
import ListarMsn from "./ListarMsn";

const Home = () => {
  const [mensagens, setMensagens] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const handleDelete = (id) => {
  //   const newMensagem = mensagens.filter((msn) => msn.id !== id);
  //   setMensagens(newMensagem);
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/mensagens")
        .then((res) => {
          if (!res.ok) {
            throw Error("Erro ao tentar se comunicar ao Endpoint");
          }
          return res.json();
        })
        .then((data) => {
          setMensagens(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      <h3>Randômico Perfeito Irracional Infinito Fibonacci.</h3>
      <p> {Math.random() * 1.618} </p>
      <br />
      <h3>ITI - Instituto Tecnológico Inovação</h3>
      <br />

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

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
