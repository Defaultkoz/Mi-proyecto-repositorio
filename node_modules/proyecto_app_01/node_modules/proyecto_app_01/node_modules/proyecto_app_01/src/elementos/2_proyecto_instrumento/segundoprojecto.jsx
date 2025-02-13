import React, { useEffect,useState} from "react";
import ".//segundoproyecto.css";
import AudioPlayer from ".//Audio";

const SegundoProyecto=()=>{
const audioP=AudioPlayer()
const[instrument,setInstrument]=useState("")
useEffect(
    ()=>{
        audioP.setInstrument(instrument)

    },[instrument]);

const handleClick=(note)=>()=>{
    audioP.playNote(note)
    console.log(note)
}
const toogleInstrument=(e)=>{
    setInstrument(e.target.value)
}
return(
    <div className="column">
        <div className="fila">
        <input onClick={toogleInstrument} type="radio"  name="instrumento" id="piano" value="acoustic_grand_piano"/><p>🎹</p>
        <input onClick={toogleInstrument} type="radio" name="instrumento" id="saxo" value="saxophone"/><p>🎷</p>
        <input onClick={toogleInstrument} type="radio" name="instrumento" id="trompeta" value="trumpet"/><p>🎺</p>
        </div>
       
        
    <div className="fila">
        <div className="tecla" onClick={handleClick("C4")}>Do</div>
        <div className="tecla black"onClick={handleClick("C5")}>Re</div>
        <div className="tecla" onClick={handleClick("E4")}>Mi</div>
        <div className="tecla black" onClick={handleClick("F4")}>Fa</div>
        <div className="tecla" onClick={handleClick("G4")}>Sol</div>
        <div className="tecla black" onClick={handleClick("A4")}>La</div>
        <div className="tecla" onClick={handleClick("B4")}>Si</div>
        <div className="tecla black" onClick={handleClick("C#4")}>Do#</div>
        <div className="tecla" onClick={handleClick("D#4")}>Re#</div>
        <div className="tecla" onClick={handleClick("E#4")}>Mi#</div>
    </div>
    </div>
)

}

export default SegundoProyecto