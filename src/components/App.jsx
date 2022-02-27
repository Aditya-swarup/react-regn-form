import React,{useState} from "react";

function App() {
const[headingText,setHeadingText] = useState("")
const[isMousedOver,setMousedOver] =useState(false)
const[name,setName] =useState("")
function handleClick(event){
setHeadingText(name);
event.preventDefault();
}

function handleMouseOver(){
setMousedOver(true);
}
function handleMouseOut(){
  setMousedOver(false);
  }
  function handleChange(event)
  {
  setName(event.target.value)
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
      <input 
      onChange ={handleChange}
      type="text" placeholder="What's your name?" />
      <button
      type="submit"
       style= {{backgroundColor:isMousedOver ? "black" :"white"}} 
      
      onMouseOver ={handleMouseOver}
      onMouseOut ={handleMouseOut}
      value={name}
      >Submit</button>
     
      </form>
    </div>
  );
}

export default App;

