import "./index.css";

interface SetProps {
    image: string;
    title: string;
    link: string;
}

function ContactCard(props: SetProps) {
    return (
        <div id="contact">
            <a href={props.link}><img className="img-fluid" src={props.image} alt={props.title} /></a>
            <h3>{props.title}</h3>
        </div>
    )
}

export default ContactCard;