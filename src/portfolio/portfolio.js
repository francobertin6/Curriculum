import React from "react";
import "./portfolio.css";

// 
import Works from "./works/works.js";

class Portfolio extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <section id="Portfolio_container">

                <div className="Portfolio_title">
                    <h1>Portfolio</h1>
                    <h6>Mis trabajos hechos hasta el momento</h6>
                </div>

                <Works />

            </section>
        )

    }

}

export default Portfolio;