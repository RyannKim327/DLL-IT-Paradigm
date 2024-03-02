import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Input(props){
  let labelName = ""
  if(!props.icon){
    if(props.placeholer){
      labelName = props.placeholer
    }
  }
  const input = {
    outline: "none",
    marginLeft: ".5rem"
  }
  return (
    <span className="border-2 border-solid border-black rounded p-[0_0.25rem] m-[0_0.25rem]">
      <label style={{cursoe: "pointer"}} htmlFor={props.name}>{ (props.icon) ? <FontAwesomeIcon icon={props.icon} /> : ""}{ labelName }</label>
      <input style={ input } type={props.type} id={props.name} name={props.name} className="bg-transparent" />
    </span>
  )
}
