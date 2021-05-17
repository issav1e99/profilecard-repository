import './App.css';
import './profile.css';
import profilepic from "./images/Hamtaro-Pic-2.jpg";
import likeicon from "./images/Like-Button.png";
import linkedin from "./images/LinkedIn-Icon.png";
import { useState } from 'react';
import Display from "./Component/Display";
import Count from './Component/Count';


function App() {

  const [skill, setSkill] = useState("")

  const [count, setCount] = useState(0);

  const handleName = ()=>{
    setSkill("My name is Isaa.")
  }

  const handleSkill = ()=>{
    setSkill("I'm a Frontend Developer.")
  }

  return (
    <>

     <div className="styling">

      <img className="hamtaro" src={profilepic} alt= "Hamtaro"/>

      <h1 className="h1">Hi!</h1>

      <Display tech = {skill}/>

      <div className="btns">
       <button onClick = {handleName} className="name-btn">Name</button>
       <button onClick = {handleSkill} className="skill-btn">Skill</button>
      </div>
      
      <div>
        <Count tech1 = {count}/> &nbsp;
        <img onClick = {() => setCount(count + 1)} className="like-btn" src={likeicon} alt="Like Button"/>
      </div>

      <div>
        <td onClick={()=> window.open("https://www.linkedin.com/in/lovelightparadise/", "_blank")}><img className="linkedin" src={linkedin} alt="LinkedIn Button"/></td>
      </div>
  

     </div>
     
    </>
  );
}

export default App;
