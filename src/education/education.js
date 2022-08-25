import React from "react";
import "./education.css";

const data = require("./info.json");

class Education extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            info: data
        }
    }

    render(){
        
        return(
            <section id="Education_container">

                <div className="title_education">
                    <h1>Educación</h1>
                    <h6>Que he hecho hasta aqui y como encaro mi formacion</h6>
                </div>

                <Timeline
                    info = {this.state.info}
                    HandleBoxes = {this.HandleBoxes}
                />
                
            </section>
        )
    }
}

function Timeline(props){
    let info = props.info;

    /*let div_boxes = info.info?.map((element, idx) => {

        return(
            <div className="box_dates" id={idx} key={element.date}>
                <p>{element.date}</p>
            </div>
        )
        
    })

    let info_date = info.info?.map((element, idx) => {

        let style = {};

        let Learning = element.Learning?.map((element, idx) => {

            return(
                <li>{element}</li>
            )

        });

        return(
            <div className="info_div" style={style}>
                <div className="first_box">
                    <h3>Logros</h3>
                    <div></div>
                    <div></div>
                    <ul> 
                        <li>{element.achievements}</li>
                    </ul>
                </div>
                <div className="second_box"> 
                    <h3>Aprendizaje</h3>
                    <div></div>
                    <div></div>
                    <ul> 
                        {Learning}
                    </ul>
                </div>
            </div>
        )


    })*/

        
    console.log(info.info)
    return(
        <article className="container_dates">

            {info.info?.map( (element, idx) => {

                let style = {};

                let Learning = element.Learning?.map((element, idx) => {

                return(
                    <li>{element}</li>
                )

                });

                return(
                    <div className="info_container">

                        <div className="box_dates" id={idx} key={element.date}>
                            <p>{element.date}</p>
                        </div>

                        <div className="info_div" style={style}>
                            <div className="first_box">
                                <h3>Logros</h3>
                                <div></div>
                                <div></div>
                                <ul> 
                                    <li>{element.achievements}</li>
                                </ul>
                            </div>
                            <div className="second_box"> 
                                <h3>Aprendizaje</h3>
                                <div></div>
                                <div></div>
                                <ul> 
                                    {Learning}
                                </ul>
                            </div>
                        </div>
                    </div>

                )
            })}

            
        </article>
    )
}


export default Education;