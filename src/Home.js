import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "Meu site teste",
      bodY: "Tecnológia da informação",
      author: "Olifrans",
      id: 1,
    },
    {
      title: "Meu site teste",
      bodY: "Tecnológia da informação",
      author: "Pedro",
      id: 2,
    },
    {
      title: "Meu site teste",
      bodY: "React e DotNet",
      author: "Mario André",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <p> {Math.random() * 1.666666666} </p>
      <h2>ITI - Instituto Tecnológico Inovação</h2>


      {blogs.map((blog)=>(
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Esta mensagem foi enviada de: {blog.author}</p>
        </div>

      ))}



    </div>
  );
};

export default Home;
