import "./index.css"
function Contacts() {
        return (
            <>
                <br />
                <br />
                <br />
                <div id="contact-container">
                    <h1>Fale Comigo!</h1>
                    <div id="contact-content">
                        <a target="_blank" rel="noreferrer" href="https://github.com/Eduardo-Amaral"><img className="img-fluid" src={require("assets/github.png")} alt="github" /></a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eduardo-amaral-2a4097226/"><img className="img-fluid" src={require("assets/linkedin.png")} alt="linkedin" /></a>
                        <a target="_blank" rel="noreferrer" href="mailto:eduardo.lopes.amaral@outlook.com?subject=subject"><img className="img-fluid" src={require("assets/email.png")} alt="email" /></a>
                    </div>
                </div>
            </>
        )
        }
    export default Contacts;