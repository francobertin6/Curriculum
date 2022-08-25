
import "./PersonalData.css";

const PersonalData = () => {

    return(
        <section id="PersonalData">

            <div className="title">
                <h1>Datos personales</h1>
                <h6>Mi informacion personal</h6>
            </div>
            
            <img src="Mypicture/FotoPersonal2.jpg" alt="picture" className="picture"/>

            <article className="data">
                <ul>
                    <li><p>Franco Bertin</p></li>
                    <li><p>24 años</p></li>
                    <li><p>Masculino</p></li>
                    <li><p>Cordoba - Argentina</p></li>
                    <li><p>04/10/1997</p></li>
                </ul>
            </article>

        </section>
    )
}

export default PersonalData;