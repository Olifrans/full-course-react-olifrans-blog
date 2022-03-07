import { useState, useEffect } from "react";
import ListarMsn from "./ListarMsn";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: mensagens,
    isPending,
    error,
  } = useFetch("http://localhost:8000/mensagens");

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
