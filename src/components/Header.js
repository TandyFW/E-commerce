import { Link } from "react-router-dom";

function Header() {
  return(
    <header className="header">
      <nav className="page-links">
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/products">Produtos</Link></li>
          <li><Link to="/services">Serviços</Link></li>
          <li><Link to="clients">Clientes</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
