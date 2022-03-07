import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const DetailsMsn = () => {
  const { id } = useParams();
  const {
    data: mensagen,
    error,
    isPending,
  } = useFetch("http://localhost:8000/mensagens/" + id);

  return (
    <div className="msn-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {mensagen && (
        <article>
          <h2>{mensagen.title}</h2>
          <p>Esta mensagem foi enviada de: {mensagen.author}</p>
          <div>{mensagen.body}</div>
        </article>
      )}
    </div>
  );
};

export default DetailsMsn;
