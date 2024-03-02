import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default function Input(props){
  const { passIcon, setIcon } = useState({})
  let labelName = ""
  if(!props.icon){
    if(props.placeholer){
      labelName = props.placeholer
    }
  }
  const input = {
    outline: "none",
    marginLeft: ".5rem",
  }
  const showHidePassword = () => {
    const input = document.getElementById(props.name)
    if(input.type == "password"){
      input.type = "text"
    }else{
      input.type = "password"
    }
  }

  return (
    <div>
      <span className="border-2 border-solid border-black rounded p-[0_0.25rem] m-[0_0.25rem]">
        <label style={{cursor: "pointer"}} htmlFor={props.name}>{ (props.icon) ? <FontAwesomeIcon icon={props.icon} /> : ""}{ labelName }</label>
        <input style={ input } type={props.type} id={props.name} name={props.name} className="bg-transparent" />
        {
          (props.type.toLowerCase() === "password") ?
          <FontAwesomeIcon style={{ cursor: "pointer" }} onClick={() => showHidePassword()} icon={ faEye } /> : <FontAwesomeIcon style={{ color: "transparent" }} icon={ faEyeSlash } />
        }
      </span>
    </div>
  )
}
