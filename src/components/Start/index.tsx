
import "./index.css";

function Start() {
    return (
        <>

            <main id="start-container" className="container">


                <section id="start-img">
                    <img className="img-fluid" src={require("assets/eu.png")} alt="" />
                    <h2>Eduardo Amaral</h2>
                    <span>Desenvolvedor Web</span>
                </section>

                <section id="start-text">
                    <fieldset id="fieldset">
                        <legend id="legend">Sobre Mim</legend>
                        <p>Me chamo Eduardo Lopes do Amaral, nasci em Porto Alegre(RS), e sou um apaixonado por tecnologia, mais especificamente pela área de desenvolvimento de software. No momento, sou capaz de trabalhar com HTML, CSS, Javascript e React (em fase de aprendizado). Possuo 900 horas de curso sobre desenvolvimento web da instituição norte americana FreeCodeCamp. Ademais, iniciarei em breve o curso superior em Análise e Desenvolvimento de Sistemas. </p>
                    </fieldset>
                </section>
            </main>
        </>
    )
}

export default Start;