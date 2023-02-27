// import { AddCircleOutlineRounded } from "@mui/icons-material";
import React, { useState } from "react";
import "./Sidebar.css"
import addicon from "../images/addicon.png"

function Sidebar(props){

    const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

   const[listOpen, setListOpen]=useState(false);

    return(
        <>
        <div className="sidebar">
            {/* <AddCircleOutlineRounded className="addimg" alt="addbtn" onClick={()=>setListOpen(!listOpen)}></AddCircleOutlineRounded> */}
            <img src={addicon} className="addimg" alt="addbtn" onClick={()=>setListOpen(!listOpen)}></img>
          
            <ul className={`sidebar_list ${listOpen?"sidebar_list_active":""}`}>
            {
                colors.map((item,index)=>(
                <li 
                key={index} 
                className="sidebar_list_item" 
                style={{backgroundColor:item}}
                onClick={() => props.addNote(item)}
                />))
            }
            </ul>
            
        </div>
        </>
    );
}
export default Sidebar