import "./index.css";

interface SetProps {
    image: string;
    title: string;
    text: string;
    repo: string;
    link: string;
}

function ProjectCard(props: SetProps) {
    return (
            <div className="" id="project-card">
                <h3>{props.title}</h3>
                <img id="project-img" src={props.image} alt="" />
                <p>{props.text}</p>
                <div id="project-links">
                    <a rel="noreferrer" target="_blank" href={props.repo}>Ver Diretório</a>
                    <a rel="noreferrer" target="_blank" href={props.link}>Acessar</a>
                </div>
            </div>
    )
}

export default ProjectCard;