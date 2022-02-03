import Tecnologies from "components/Technologies";
import { tech_1 } from "types/projects";


function KnowHow() {
    return (
        <>
            <div className="container">
                <h2 className="pt-5 text-center" >Tecnologias</h2>
                <div className="row">
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-3">
                        <Tecnologies title={tech_1.title} text={tech_1.text} image={tech_1.image} />
                    </div>
                    <div className="col-sm-12 col-md-12  col-lg-6 mb-3">
                        <Tecnologies title={tech_1.title} text={tech_1.text} image={tech_1.image} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default KnowHow;