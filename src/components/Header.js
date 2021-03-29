import { Link } from "react-router-dom";

function Header() {
  return(
    <header className="header">
      <nav className="navbar navbar-light bg-light">
        <ul className="nav navbar">
          <li className="nav-item"><Link to="/" className="nav-link" aria-disabled="false">Página Inicial</Link></li>
          <li className="nav-item"><Link to="/products" className="nav-link" aria-disabled="false">Produtos</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link" aria-disabled="false">Serviços</Link></li>
          <li className="nav-item"><Link to="clients" className="nav-link" aria-disabled="false">Clientes</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
