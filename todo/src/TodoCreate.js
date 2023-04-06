import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function TodoCreate({onCreate}){
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    const newTodo = {
      id: null,
      name: name,
      status: false,
      time: new Date(),
    };
    onCreate(newTodo);
    setName('');
  };

  const handleKeyDown = (event) => {
    if(event.keyCode === 13){
      handleClick();

      
    }
  };

  return (
    <div>
      <input className="input" type="text" value={name} onChange={handleChange} onKeyDown={handleKeyDown} />
      <button 
      style={{backgroundColor:"transparent", border:"none",cursor:"pointer", fontSize:"24px", height:"32px", width:"32px", padding:"0"}} 
      onClick={handleClick} disabled={!name}>
        <FontAwesomeIcon icon={faCheck}/></button>
    </div>
  );
}

export default TodoCreate;