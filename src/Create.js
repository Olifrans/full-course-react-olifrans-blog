import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msn = { title, body, author };
    console.log(msn);
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
        <button>Adcionar Mensagen</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
