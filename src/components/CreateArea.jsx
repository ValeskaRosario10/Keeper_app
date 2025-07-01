import React, { useState } from "react";
import App from "./App";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
const [zoomstate,setzooom]=useState(false)
const [note,setnote]=useState({
    title:"",
    content:""
});
function handlenoteChange(event){
    const {name,value}=event.target
    setnote(prenote=>{
       return  ({
           ...prenote,[name]:value
        })
    })
    console.log(note.title)
    console.log(note.content)
}
function zoominput(){
    setzooom(true)
}

  return (
    <div>
      <form className="create-note" onSubmit={(event) => {
    event.preventDefault();
    // props.addNotes(note);
     setnote({
    title:"",
    content:""})
  }} >
       { zoomstate ?  <input onChange={handlenoteChange}name="title"
        placeholder="Title" value={note.title}/>: null}
        <textarea onChange={handlenoteChange} onClick={zoominput} name="content" 
        placeholder="Take a note..."  rows={zoomstate ?"3":"1"} value={note.content} />
        <Zoom in={zoomstate }> 
            <Fab  onClick={()=>{props.addNotes(note)}}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;


//challenge 1 
// impoememtn the add note functonality
//1. create a constant that keeps track of the  title and Content
//2. pass the new note back to the App 
//3. add new note to an Array 
//4. take array and rener separeate note compent for each item 

//challenge 2: implement the delete note functionality
//callback from the note compoent to trigger a delete function 
// use filter function to filter out the items that need deletion 
// pass an id to the note component to the app to identfy which to delete //