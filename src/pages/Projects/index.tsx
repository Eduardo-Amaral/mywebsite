import ProjectCard from "components/ProjectCard";
import { project_1,project_2,project_3 } from "types/projects";

function Projects() {
    return (
        <div className="container">
            <div className="row">
            <div className="col-sm-12  col-lg-6 mb-3">
                <ProjectCard text={project_1.text} title={project_1.title} image={project_1.image}/>
            </div>
            <div className="col-sm-12  col-lg-6 mb-3">
                <ProjectCard text={project_2.text} title={project_2.title} image={project_2.image}/>
            </div>
            <div className="col-sm-12  col-lg-6 mb-3">
                <ProjectCard text={project_3.text} title={project_3.title} image={project_3.image}/>
            </div>
            <div className="col-sm-12 col-lg-6 mb-3">
                <ProjectCard text={'text'} title={'title'} image={require('assets/dsmovie.png')}/>
            </div>
            </div>
        </div>
    )
}

export default Projects;