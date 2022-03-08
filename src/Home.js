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
      <h3>Randômico Irracional Infinito Fibonacci.</h3>
      <p> {Math.random() * 1.618} </p>
      <br />
      <h3>Estudando React</h3>
      <br />

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {mensagens && (
        <ListarMsn mensagens={mensagens} title="Área de Mensagens!" />
      )}
    </div>
  );
};

export default Home;
