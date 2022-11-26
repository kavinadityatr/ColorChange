import './cc.css';
import { useState,useEffect } from "react";
const Change=()=>{
    const [col,setCol]=useState("");
    useEffect(()=>{
    document.getElementById("cc").style.backgroundColor=col})
    return(
        <>
    <select id = "dropdown" onChange={e=>setCol(e.target.value)}>
     <option value="N/A" >N/A</option>
     <option value="green">Green</option>
     <option value="red">Red</option>
     <option value="violet">Violet</option>
     <option value="blue">Blue</option>
    </select>
    <center>
        <div id="cc"> 
         Hello
        </div>
        </center>
        </>
    )
 }
 export default Change;