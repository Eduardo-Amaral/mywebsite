import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css'
interface SetProps {
    id: string; 
}
function BurguerMenu(props:SetProps) {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active);
    };

    return (
        <>
            <div id="button" className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                <div className="hamburguer"></div>
            </div>
            <div className={active ? 'menu menuOpen' : 'menu menuClose'}>
                <div className="list">
                    <ul className="listItems">
                        <li><Link onClick={ToggleMode} className="burguer-links" to={`/`}>
              <p>Início</p>
            </Link></li>
                        <li><Link onClick={ToggleMode} className="burguer-links" to={`/Projetos/`}>
              <p>Projetos</p>
            </Link></li>
                        <li><Link onClick={ToggleMode} className="burguer-links" to={`/Conhecimentos/`}>
              <p>Conhecimentos</p>
            </Link></li>
                        <li><Link onClick={ToggleMode} className="burguer-links" to={`/Contatos/`}>
              <p>Contatos</p>
            </Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default BurguerMenu;