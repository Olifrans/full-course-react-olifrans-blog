import { useState } from "react";
import ListarBlog from "./ListarBlog";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Meu Teste - 01",
      bodY: "Tecnológia da informação",
      author: "Olifrans",
      id: 1,
    },
    {
      title: "Meu Teste - 02",
      bodY: "Java EE e Sql Server",
      author: "Pedro",
      id: 2,
    },
    {
      title: "Meu Teste - 03",
      bodY: "React e DotNet",
      author: "Mario André",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <p> {Math.random() * 1.666666666} </p>
      <h2>ITI - Instituto Tecnológico Inovação</h2>
      <br></br>      
      <ListarBlog blogs={blogs} title="Área de Mensagens!" />
    </div>
  );
};

export default Home;
