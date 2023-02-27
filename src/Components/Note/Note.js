import React from "react";
import "./Note.css"
import { Delete } from "@mui/icons-material";


let timer = 500,
  timeout;
function Note(props){
 
    const formatDate=(value)=>{
        if(!value) return"";

        const date=new Date(value)
        const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sept",
            "Oct",
            "Nov",
            "Dec",
          ];

        let hrs=date.getHours()
        let amPm=hrs>12?"PM":"AM"
        hrs=hrs?hrs:"12"
        hrs=hrs>12?(hrs=24-hrs):hrs

        let min =date.getMinutes();
        min=min<10?"0"+min:min;

        let day=date.getDate();
        const month=monthNames[date.getMonth()];

        return `${hrs}:${min} ${amPm} ${day} ${month}`;
    }

    const debounce = (func) => {
        clearTimeout(timeout);
        timeout = setTimeout(func, timer);
      };
    
      const updateText = (text, id) => {
        debounce(() => props.updateText(text, id));
      };

    
    return(
        <>
        <div className="note" style={{backgroundColor:props.note.color}}>
            <title placeholder="add title"></title>
            <textarea className="note_text" 
            defaultValue={props.note.text} 
            placeholder="type here"
            onChange={(event) => updateText(event.target.value, props.note.id)}
            ></textarea>
            <div className="note_footer">
            <p>{formatDate(props.note.time)}</p>
            {/* <img
            className="delimg" 
            src="https://www.pngfind.com/pngs/m/268-2681876_png-file-delete-icon-transparent-png-png-download.png"
             alt="delete"
             onClick={()=>props.deleteNote(props.note.id)}></img> */}
                     <Delete className="delimg" alt="delete" onClick={()=>props.deleteNote(props.note.id)}></Delete>

            </div>
        </div>
        </>
    );
}
export default Note