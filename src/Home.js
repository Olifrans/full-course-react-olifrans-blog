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
      <h3 style={{ backgroundColor: "#4ba7ce", borderRadius: "7.1.618px" }}>
        Randômico Fibonacci Irracional Infinito ->> {Math.random() * 1.618}{" "}
      </h3>

      <h3>Estudando React</h3>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {mensagens && (
        <ListarMsn mensagens={mensagens} title="Área de Mensagens!" />
      )}
    </div>
  );
};

export default Home;
