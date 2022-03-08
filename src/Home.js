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
      <h3 className="fibonacci">
        {" "}
        Randômico Fibonacci Irracional Infinito {Math.random() * 1.618}
      </h3>
      <br />

      {/* <h3>Estudando React</h3> */}
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {mensagens && (
        <ListarMsn mensagens={mensagens} title="Área de Postagens!" />
      )}
    </div>
  );
};

export default Home;
