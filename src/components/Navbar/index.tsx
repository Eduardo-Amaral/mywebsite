import { Link } from 'react-router-dom';
import './index.css';
function Navbar() {
  return (
    <>
      <header>
        <nav className='container'>
          <div className='mywebsite-nav-content'>
            <Link id="links" to={`/`}>
              <p >Início</p>
            </Link>
            <Link id="links" to={`/Projetos/`}>
              <p >Projetos</p>
            </Link>
            <Link id="links" to={`/Conhecimentos/`}>
              <p >Conhecimentos</p>
            </Link>
            <Link id="links" to={`/Contatos/`}>
              <p >Contatos</p>
            </Link>

          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;