import './index.css';

interface SetProps {
    image: string;
    title: string;
    text: string;
}
function Tecnologies(props: SetProps) {
    return (
        <>
            <section id="tech">
            <img id="tech-img" src={props.image} alt="imagem da tecnologia" />
                <div id="tech-text">
                    <h3>{props.title}</h3>
                     <p>{props.text}</p>
                </div>
            </section>
        </>
    )
}
export default Tecnologies;