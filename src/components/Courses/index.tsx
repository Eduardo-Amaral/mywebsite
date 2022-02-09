import './index.css';

interface SetProps{
    image: string;
    title:string;
    text: string;
}
function Courses(props: SetProps){
    return(
        <>
        <section id="course">
            <img id="course-img" src={props.image} alt="imagem da tecnologia" />
                <div id="course-text">
                    <h3>{props.title}</h3>
                     <p>{props.text}</p>
                </div>
            </section>
        </>
    )
}

export default Courses;