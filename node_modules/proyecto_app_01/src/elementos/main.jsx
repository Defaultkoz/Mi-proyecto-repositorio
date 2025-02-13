
import PrimerProjecto from "./1_proyecto_covid/primerprojecto"
import SegundoProjecto  from "./2_proyecto_instrumento/segundoprojecto";
import TercerProjecto from "./3_proyecto_/tercerprojecto";
import "./css/main.css";

import React from "react";


const Main=(props)=>{
    
   

    return(
        <div className="main"> 
         
            <div className="fila">
            </div > 
            {props.setProyecto === "primer" && <PrimerProjecto  />}
            {props.setProyecto === "segundo" && <SegundoProjecto />} 
            {props.setProyecto=== "tercer" && <TercerProjecto  />}
            </div>
    )
}

export default Main
