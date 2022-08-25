
import { useState, useEffect } from "react";

const WorksContainer = ({data}) => {

    const {Title, Description, CardInfo, CardImg, Code} = data;

    const {text, technology} = Description;

    console.log(Code.General_code)

    // cardINFO
    const [cardInfoId, setcardInfoId] = useState(0);

    const {img, info, id} = CardInfo[cardInfoId];
    
    const [cardInfoImg, setcardInfoImg] = useState();

    // url de la imagen del worksContainer
    let url = "/Portfolio/" + CardImg; 

    // cardINFO

    const [InfoImg, setInfoImg] = useState("none");
    const [filterImg, setfilterImg] = useState("none");
    const [seeMore, setseeMore] = useState(false);
    const [leftarrow, setleftarrow] = useState("arrow-right.png");
    const [rightarrow, setrightarrow] = useState("arrow-right.png");
    const [styleArrow, setstyleArrow] = useState("none");
    const [loading, setloading] = useState(false);

    // IntervalId (promesa)

    const [intervalId, setintervalId] = useState();

    // IntervalId (promesa)

    const imgContainerMouseEnter = (e) => {

        setInfoImg("block")
        setfilterImg("blur(50px)")

    }

    const imgContainerMouseLeaves = (e) => {

        setInfoImg("none");
        setfilterImg("none");

    }

   
    const ChangeSeeMore = () => {

        if((seeMore === false) && (loading === false)){
            setseeMore(true);
            setloading(true)

            setTimeout(() => {
                setloading(false)
            }, 2000);

        }else{
            setseeMore(false)
        }
    }

    // arrows
    const ChangeArrows_MouseOut = (e) => {

        let eventClassname = e.target.className;

        if(eventClassname === "left"){
            setleftarrow("arrow-right.png")  
        }
        else{
            setrightarrow("arrow-right.png")
        }

    }
    const ChangeArrows_MouseOver = (e) => {
        
        let eventClassname = e.target.className;

        if(eventClassname === "left"){
            setleftarrow("arrow-right(1).png")
        }
        else{
            setrightarrow("arrow-right(1).png")
        }
    }
    // arrows


    // change cardInfoId number

    const Change_cardInfoId = (e) => {

        let eventClassname = e.target.className;
        console.log(eventClassname);

        if(eventClassname === "left" && cardInfoId !== 0){

            setloading(true);

            setcardInfoId(cardInfoId - 1);

            setstyleArrow("none");

                setTimeout(() => {

                    setloading(false);
                    
                }, 500); 

        }
        else if(eventClassname === "right" && cardInfoId !== (CardInfo.length - 1)){

            setloading(true);

            setcardInfoId(cardInfoId + 1);

            setstyleArrow("none");

            setTimeout(() => {

                // Stop_CardInfoImg_Interval();
                setloading(false);
                
            }, 500);    
        }
        else if(eventClassname === "BackBtn"){
            setseeMore(false);
            Stop_CardInfoImg_Interval();
        }
    }


    // change cardInfoImg number (usando el img.lenght, no el cardinfo.lenght) 

    let CardInfoImg_Interval;

    const Change_cardInfoImg = (e) => {

        var cardInfoValue = 0;

        var newPromise = new Promise((resolve, reject) => {

            setcardInfoImg(cardInfoValue);

            if(seeMore === false){
                reject("seeMore es ivalido");
            }
        
            CardInfoImg_Interval = setInterval(() => {

                    console.log("intervalo: " + CardInfoImg_Interval + " Img: " + img)

                    setintervalId(CardInfoImg_Interval);

                    if(cardInfoValue === (img.length - 1)){
                        cardInfoValue = 0;
                    }

                    else if(cardInfoValue !== (img.length - 1)){
                        cardInfoValue = cardInfoValue + 1;
                    }

                    resolve(setcardInfoImg(cardInfoValue));

                    }, 2500);
                    
            });

            setTimeout(() => {
                setstyleArrow("block");
            }, 2500);
            
        return newPromise;

    }
  
    const Stop_CardInfoImg_Interval = () => {

        console.log(intervalId)

        clearInterval(intervalId);
        
        
    }

   useEffect( () => {

        if((seeMore !== false) && (loading === false)){

            Change_cardInfoImg()
                .then( (res) => {
                    return res;
            })
                .catch( (err) => {
                    console.log(err);
            })
        }else if((seeMore !== false) && (loading !== false)){
            Stop_CardInfoImg_Interval();
        }
        else{
            return null
        }
        
   }, [loading])
    

    if(seeMore === false){
        return(
        <article>
            <div className="titleContainer">
                <h1>{Title}</h1>
            </div>
            <div className="imgContainer" style={{backgroundImage: `url(${url})`}}  onMouseOver={imgContainerMouseEnter} onMouseOut={imgContainerMouseLeaves}>

                <div style={{display: InfoImg, backdropFilter: filterImg}}>

                    <h3>Descripcion general</h3> <br />
                    <p>{text}</p> <br />

                    <h3>Tecnologias</h3> <br />

                    <ul>
                         {technology.map( (element) => {
                        return(
                            <li>{element}</li> 
                        )
                        })}
                    </ul>
                   
                    <button onClick={ChangeSeeMore}>Ver mas</button>    

               </div>

            </div>
        </article>
    )
    }
    else if(seeMore !== false && loading === true){
        return(
            <article>
                <div className="titleContainer">
                    <h1>{Title}</h1>
                </div>
            </article>
        )
    }
    else{

        return(
            <article>

                <div className="titleContainer">
                    <h1>{Title}</h1>
                    <button className="BackBtn" onClick={Change_cardInfoId}>X</button>
                </div>

                <div className="CardInfoContainer">

                    <div className="arrows" style={{display: styleArrow}}>
                        <img src={leftarrow} alt="left"  className="left"  onMouseOver={ChangeArrows_MouseOver} onMouseOut={ChangeArrows_MouseOut} onClick={Change_cardInfoId}/>
                        <img src={rightarrow} alt="right" className="right" onMouseOver={ChangeArrows_MouseOver} onMouseOut={ChangeArrows_MouseOut} onClick={Change_cardInfoId}/>
                    </div>

                    <img src={"/Portfolio/" + img[cardInfoImg]} alt="foto" />

                    <div className="imgText">
                        <p>{info}</p>

                        {Code.General_code !== undefined ? <a target="_blank" href={Code.General_code}><h3>Codigo Backend/Frontend</h3></a> : <><a target="_blank" href={Code.BackEnd_code}><h3>Codigo Backend</h3></a> <a target="_blank" href={Code.FrontEnd_code}><h3>Codigo Frontend</h3></a></>}

                    </div>
                </div>
                    
            </article>
        )
    }
    
}

export default WorksContainer;