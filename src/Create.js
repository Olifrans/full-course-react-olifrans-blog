import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const msn = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/mensagens", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msn),
    }).then(() => {
      console.log("nova msn adicionada");
      setIsPending(false);
      //history.go(-1);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Envie uma nova mensagem</h2>

      <form onSubmit={handleSubmit}>
        <label>Titulo da Mensagen</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Digite a mensagem:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <label>Mensagem author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="olifrans">Olifrans</option>
          <option value="mario">Mario</option>
          <option value="pedro">Pedro</option>
        </select>
        {!isPending && <button>Adcionar Mensagen</button>}
        {isPending && <button disabled>Adcionar Mensagen...</button>}
      </form>
    </div>
  );
};

export default Create;
