import React from "react";
import "./about_me.css";
const data = require("./programing_sentences.json");


class ABOUT_ME extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            Sentences : data,
            sentences_number : 2
        }

        this.ref_sentence1 = React.createRef();
        this.ref_sentence2 = React.createRef();
        this.ref_sentence3 = React.createRef();
    }

    change_number(){
        let generate_number = Math.floor((Math.random() * (5 - 0 + 1)) + 0)
        return generate_number
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
            sentences_number : this.change_number()
            })
        }, 10000);
    }

    portfoliobtn = () => {

        window.scrollTo(0, 4100)
    }

    render(){
        return(
            <section id="about_me_container">
            
            <div id="conteiner_about_me">
                <div className="conteiner_backgroundImg_and_name">

                    <h1 id="name">Franco Bertin</h1>
                    <div className="underline_container">
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                    </div>
                    <h6 id="sub-parrafo">Programador junior con conocimientos basicos Full stack</h6>

                </div>
            </div>

           
            <div className="about_me_text">
                <img src="Mypicture/Personalfoto.jpeg" alt="foto" id="foto" />
                <h3>Bienvenidos! Este soy yo</h3>
                <h6>Hola soy Franco Bertin, programo hace 2 años y medio de forma particular, he aprendido en base a cursos especificos y experiencias personales programando, ahora busco insertarme en el mercado laboral como programador junior </h6>
                <button onClick={this.portfoliobtn}>Ver mi portfolio</button>
            </div>

            <Sentences
                Sentences = {this.state.Sentences}
                sentences_number = {this.state.sentences_number}
            />

        </section>
        )  
    }
}

function Sentences(props){
    let Sentences = props.Sentences;
    let sentences_number = props.sentences_number;

    let sentence = 
    
        <div>
            <h6 className="author">{Sentences[sentences_number]?.Author}</h6>
            <h6 className="sentence">{Sentences[sentences_number]?.Sentence}</h6>
        </div>


    return(
        <div id="container_sentence">
            {sentence}
        </div>
    )
}



export default ABOUT_ME;