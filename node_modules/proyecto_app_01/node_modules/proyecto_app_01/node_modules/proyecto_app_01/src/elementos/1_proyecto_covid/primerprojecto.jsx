
import React, { useState } from "react";
import "./prpoy.css";
import {MapComponent} from "./mapa";

const PrimerProyecto = () => {

  const [pais, setPais] = useState("");
  const [inputValue, setInputValue] = useState("");
  const[animate,setAnimate]=useState("carga")
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleButtonClick = () => {
   setAnimate("carga-animate");
   console.log(setPais(inputValue))
   return setPais(inputValue);
  };
  return (
    <div>
    
      <select name="pais" id="pais" value={inputValue} onChange={handleInputChange}>
        <option value="spain">España</option>
        <option value="england">Reino Unido</option>
      </select>
      <button onClick={handleButtonClick}>Enviar</button>
      {pais&&(<div className={`elemento-row ${animate}`}><MapComponent pais={pais} /></div>)}
    </div>
  );
};

export default PrimerProyecto;