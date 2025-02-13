import React,{lazy, useState} from "react";
import ".//menu.css"
const Main=lazy(()=>import ('./elementos/main'));
import ".//app.css";

const Menu=({ setProyecto, setName,setDeslizar,setRender})=>{
       function abrir(proyecto,name){
        setProyecto(proyecto);
        setName(name);
        setDeslizar(prev => (prev === "no-deslizar" ? "deslizar" : "no-deslizar"));
        setRender(true); 
    }
       
    return(
        
        <div className="column menu">
             <div className="icon"></div>
             <br />
             <br />
            <button onClick={()=>{abrir("primer","Covid")}}>💉</button>
            <button onClick={()=>{abrir("segundo","Instrumento")}}>🎹</button>
            <button onClick={()=>{abrir("tercer","Clave")}}>🔑</button>
        </div>
    )
}
const Viewer=({name, deslizar})=>{
    return(
        <div className="viewer">
        
        <h1 className={deslizar}>{name}</h1>
        </div>);
};

const App=()=>{
    const [proyecto,setProyecto]=useState("");
    const[name,setName]=useState("");
    const [deslizar, setDeslizar] = useState("no-deslizar");
    const[render,setRender]=useState(false)
    return(
        <div className="app">
        <Menu setProyecto={setProyecto} setName={setName} setDeslizar={setDeslizar} setRender={setRender}/>
        {render && <Viewer name={name} deslizar={deslizar} />}
        <Main setProyecto={proyecto} />
    </div>
    )
}

export default App