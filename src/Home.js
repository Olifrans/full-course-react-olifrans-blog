import { useState } from "react";
import ListarBlog from "./ListarBlog";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Curso de MPython",
      bodY: "Python com BI",
      author: "Olifrans",
      id: 1,
    },
    {
      title: "Curso de Java Sql-Server",
      bodY: "Java EE e Sql Server",
      author: "Pedro",
      id: 2,
    },
    {
      title: "Curso de  Back e Front End",
      bodY: "React e DotNet",
      author: "Mario André",
      id: 3,
    },
    {
      title: "Curso de Agile",
      bodY: "Agile com React e DotNet",
      author: "Olifrans",
      id: 4,
    },
    {
      title: "Curso de  Scrum",
      bodY: "Scrum e DotNet",
      author: "Olifrans",
      id: 5,
    },
  ]);

  return (
    <div className="home">
      <p> {Math.random() * 1.666666666} </p>
      <h2>ITI - Instituto Tecnológico Inovação</h2>
      <br></br>
      <ListarBlog blogs={blogs} title="Área de Mensagens!" />

      <ListarBlog
        blogs={blogs.filter((blog) => blog.author === "Olifrans")}
        title="Mensagens de Olifrans!"
      />
    </div>
  );
};

export default Home;
