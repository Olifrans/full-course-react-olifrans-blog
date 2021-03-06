import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Aprender React</h1>
      </Link>

      <div className="links">
        <Link to="/">Home</Link>

        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#066677",
            borderRadius: "7px",
          }}
        >
          Enviar-Mensagem
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
