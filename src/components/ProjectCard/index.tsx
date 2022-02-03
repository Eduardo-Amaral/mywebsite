import "./index.css";

interface SetProps {
    image: string;
    title: string;
    text: string;
}

function ProjectCard(props: SetProps) {
    return (
            <div className="" id="project-card">
                <h3>{props.title}</h3>
                <img id="project-img" src={props.image} alt="" />
                <p>{props.text}</p>
                <div id="project-links">
                    <a href="https://github.com/Eduardo-Amaral/">Ver Diretório</a>
                    <a href="https://github.com/Eduardo-Amaral/">Acessar</a>
                </div>
            </div>
    )
}

export default ProjectCard;