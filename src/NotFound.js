import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Ops!</h2>
      <p>Pagina não encotrada</p>
      <Link to="/">Volta a pagina inicial</Link>
    </div>
  );
};

export default NotFound;
