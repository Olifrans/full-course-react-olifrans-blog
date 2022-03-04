const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React-DotNet</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          // style={{
          //   color: "white",
          //   backgroundColor: "#066677",
          //   borderRadius: "7px",
          // }}
        >
          Nova-Mensagem
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
