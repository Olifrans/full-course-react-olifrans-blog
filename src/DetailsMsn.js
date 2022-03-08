import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const DetailsMsn = () => {
  const { id } = useParams();
  const {
    data: mensagen,
    error,
    isPending,
  } = useFetch("http://localhost:8000/mensagens/" + id);
  const history = useHistory();

  const handleClickDelete = () => {
    fetch("http://localhost:8000/mensagens/" + mensagen.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="msn-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {mensagen && (
        <article>
          <h2>{mensagen.title}</h2>
          <p>Nova Mensagem: {mensagen.author}</p>
          <div>{mensagen.body}</div>
          <button onClick={handleClickDelete}>Excluir Mensagem</button>
        </article>
      )}
    </div>
  );
};

export default DetailsMsn;
