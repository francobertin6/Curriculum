import React from "react";
import "./skills.css";

class Skills extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array_skills: ["Javascript/Typescript", "HTML5/CSS3", "React.js", "Node.js", "Electron.js", "MYSQL"],
            percentage: [80, 90, 70, 60, 40, 50]
        }
    }

    render(){
        return(
            <section id="conteiner_skills">

                <div className="title_container">
                    <h1>Mis tecnicas y habilidades</h1>
                    <h6>Puedo decir que soy bueno en esto</h6>
                </div>

                <Skill_divs 
                    array_skills = {this.state.array_skills}
                    percentage = {this.state.percentage}
                />
            </section>
        )
    }
}



function Skill_divs(props){
    let array_skills = props.array_skills;
    let percentage = props.percentage;

    let divs_skill = array_skills?.map(function(element, idx){

        let style = {
            width: percentage[idx] + "%"
        }

        return(
            <div className="skill_div">
                <div style={style}>
                    <p>{element}</p>
                </div>
                <p className="percentage">%{percentage[idx]}</p>
            </div>
        )

    })

    return(
        <section id="conteiner_divs">
            {divs_skill}
        </section>
    )

}

export default Skills;