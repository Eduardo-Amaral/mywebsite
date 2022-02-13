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
          {/* @ts-ignore */}
            <Link className="links" to={`/`}>
              <p >Início</p>
            </Link>
              {/* @ts-ignore */}
            <Link className="links" to={`/projetos/`}>
              <p >Projetos</p>
            </Link>
              {/* @ts-ignore */}
            <Link className="links" to={`/conhecimentos/`}>
              <p >Conhecimentos</p>
            </Link>
              {/* @ts-ignore */}
            <Link className="links" to={`/contatos/`}>
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