//const ListarMsn = ({ mensagens, title, handleDelete }) => {
const ListarMsn = ({ mensagens, title }) => {
  return (
    <div className="msn-list">
      <h2>{title}</h2>
      {mensagens.map((msn) => (
        <div className="msn-preview" key={msn.id}>
          <h2>{msn.title}</h2>
          <p>Esta mensagem foi enviada de: {msn.author}</p>

          

          {/* <button onClick={() => handleDelete(msn.id)}>
            Deletar Mensagen
          </button>
 */}


        </div>
      ))}
    </div>
  );
};

export default ListarMsn;
