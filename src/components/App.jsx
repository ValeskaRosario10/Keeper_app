 
 import Footer from "./Footer";
import Header from "./Header";
 import Note from "./Note";
 import notes from '../notes'
 import CreateArea from "./CreateArea";
import { useState } from "react";
 function App() {
   const [allnotes,setallnotes]=useState([])

   function addNotes({ title, content }){
         setallnotes([...allnotes,{ title, content }]);
         console.log("allnotes");
         console.log(allnotes);
         
   }
   function deleteNote(key){
      console.log("Tried to delete ")
      console.log(key);
      setallnotes((prevalue)=>{
         return prevalue.filter((item,index)=>{
            return index!=key
         })
      })
   }
    return <div>
       <Header/>
        <CreateArea addNotes={addNotes}/>
      { allnotes.map((note,index)=>
           <Note onCheck={deleteNote} id={index} key={index} 
           title={note.title} content={note.content}/>
       )}
       <Footer/>
    </div>
}
export default App;
