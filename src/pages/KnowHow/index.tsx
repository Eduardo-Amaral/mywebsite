import Tecnologies from "components/Technologies";
import { tech_1, tech_2, tech_3, tech_4, tech_5, tech_6, tech_7, tech_8 } from "types/techs";
import './index.css'
import Courses from "components/Courses";
import { course_1, course_2 } from "types/courses";


function KnowHow() {
    return (
        <>
            <div className="container">

                <h2 id="title" className="text-center" >Tecnologias</h2>

                <div className="row">
                    <div className="col-sm-13 col-md-12  col-lg-6 mb-5">
                        <Tecnologies title={tech_1.title} text={tech_1.text} image={tech_1.image} />
                    </div>
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-5">
                        <Tecnologies title={tech_2.title} text={tech_2.text} image={tech_2.image} />
                    </div>
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-5">
                        <Tecnologies title={tech_3.title} text={tech_3.text} image={tech_3.image} />
                    </div>
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-5">
                        <Tecnologies title={tech_4.title} text={tech_4.text} image={tech_4.image} />
                    </div>
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-5">
                        <Tecnologies title={tech_5.title} text={tech_5.text} image={tech_5.image} />
                    </div>
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-5">
                        <Tecnologies title={tech_6.title} text={tech_6.text} image={tech_6.image} />
                    </div>
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-5">
                        <Tecnologies title={tech_7.title} text={tech_7.text} image={tech_7.image} />
                    </div>
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-5">
                        <Tecnologies title={tech_8.title} text={tech_8.text} image={tech_8.image} />
                    </div>
                </div>

                <h2 id="title" className="text-center" >Cursos</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-5" >
                        <Courses image={course_1.image} title={course_1.title} text={course_1.text} />
                    </div>
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-5" >
                        <Courses image={course_2.image} title={course_2.title} text={course_2.text} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default KnowHow;