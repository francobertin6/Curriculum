import React from "react";
import "./contacts.css";

class Contacts extends React.Component{

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){

        return(
            <section id="contacts_container">

                <div className="contacts_title">
                    <h1>Contactarme</h1>
                    <h6>Formas de contactarme y mis redes</h6>
                </div>

                <div className="Num_and_email">
                    <h3>Numero telefono : 3564507123</h3>
                    <h3>Email : francobertin@hotmail.com</h3>
                    <h3>Gmail : francobertin6@gmail.com</h3>
                </div>

                <div className="social_networks">

                    <h3>Redes sociales</h3>

                    <h3>Github: <a href="https://github.com/francobertin6"><img src="github.png" alt="logo" /></a></h3>
                    <h3>Linkedin: <a href="https://www.linkedin.com/in/franco-bertin-b34304202/"><img src="logotipo-de-linkedin.png" alt="logo" /></a></h3>
                </div>

            </section>
        )

    }

}

export default Contacts;