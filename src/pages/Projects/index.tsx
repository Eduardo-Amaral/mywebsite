import ProjectCard from "components/ProjectCard";
import { project_1,project_2,project_3 } from "types/projects";

function Projects() {
    return (
        <div className="container pt-5">
            <div className="row pt-5">
            <div className="col-sm-12  col-lg-6 mb-3">
                <ProjectCard link={project_1.link} repo={project_1.repo} text={project_1.text} title={project_1.title} image={project_1.image}/>
            </div>
            <div className="col-sm-12  col-lg-6 mb-3">
                <ProjectCard link={project_2.link} repo={project_2.repo} text={project_2.text} title={project_2.title} image={project_2.image}/>
            </div>
            <div className="col-sm-12  col-lg-6 mb-3">
                <ProjectCard link={project_3.link} repo={project_3.repo} text={project_3.text} title={project_3.title} image={project_3.image}/>
            </div>
            <div className="col-sm-12 col-lg-6 mb-3">
                <ProjectCard link="https://github.com/Eduardo-Amaral" repo="https://github.com/Eduardo-Amaral" text={'Lorem ipsum, etc.Lorem ipsum, etc.Lorem ipsum, etc.Lorem ipsum, etc.Lorem ipsum, etc.Lorem ipsum, etc.Lorem ipsum, etc.Lorem ipsum, etc.Lorem ipsum, etc.Lorem ipsum, etc.'} title={'Em Desenvolvimento'} image={require('assets/comingsoon.jpeg')}/>
            </div>
            </div>
        </div>
    )
}

export default Projects;