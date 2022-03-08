import { Link } from "react-router-dom";

const ListarMsn = ({ mensagens, title }) => {
  return (
    <div className="msn-list">
      <h2>{title}</h2>
      {mensagens.map((msn) => (
        <div className="msn-preview" key={msn.id}>
          <Link to={`/mensagen/${msn.id}`}>
            <h2>{msn.title}</h2>
            <p>Nova mensagem recebida: {msn.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ListarMsn;
