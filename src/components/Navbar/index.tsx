import BurguerMenu from 'components/BurguerMenu';
import { Link } from 'react-router-dom';
import './index.css';
function Navbar() {
  return (
    <>
      <header >
        <nav className='container'>
          <div className='mywebsite-nav-content'>
          <h1 id="logo">EA</h1>
            <Link className="links" to={`/`}>
              <p >Início</p>
            </Link>
            <Link className="links" to={`/Projetos/`}>
              <p >Projetos</p>
            </Link>
            <Link className="links" to={`/Conhecimentos/`}>
              <p >Conhecimentos</p>
            </Link>
            <Link className="links" to={`/Contatos/`}>
              <p >Contatos</p>
            </Link>
            <BurguerMenu id="burguer-menu"/>

          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;