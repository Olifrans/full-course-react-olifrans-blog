import { useState } from "react";

const Home = () => {


  const [blog, setBlog] = useState([
    {title: "Meu site teste", bodY: "Tecnológia da informação", author: "olifrans", id: 1}
    {title: "Meu site teste", bodY: "Tecnológia da informação", author: "pedro", id: 2}
    {title: "Meu site teste", bodY: "React e DotNet", author: "mario", id: 3}

  ])


  return (
    <div className="home">
      <p> {Math.random() * 1.666666666} </p>
      <h2>ITI - Instituto Tecnológico Inovação</h2>
    </div>
  );
};

export default Home;
