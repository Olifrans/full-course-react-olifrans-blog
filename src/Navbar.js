import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h1>React-DotNet</h1>
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
          Nova-Mensagem
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
