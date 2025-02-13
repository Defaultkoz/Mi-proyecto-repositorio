import React, { Suspense, useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import ".//app.css"
const domNode = document.getElementById('root');
const root = createRoot(domNode)



const RootRender=()=>{
const [show,setshow]=useState(false)
useEffect(()=>{
const timer=setTimeout(() => {
setshow(true)
}, 3000);
return()=>clearTimeout(timer)
},[])
return(
<Suspense fallback={
        <div className="loading">
            
        </div>}>
{show?<App />: <div className="loading">
    </div>}

</Suspense>
)
}
root.render(<RootRender/>)

