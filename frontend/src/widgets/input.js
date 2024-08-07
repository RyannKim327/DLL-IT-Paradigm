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

	const _class = props.className || ""
	const textClass = props.textClass || ""
	const input = {
		outline: "none",
		marginLeft: ".5rem",
	}

	const showHidePassword = () => {
		const input = document.getElementById(props.name)
		if(input.type === "password"){
			input.type = "text"
		}else{
			input.type = "password"
		}
	}

	return (
		<div className="my-[.25rem]">
			<span className={ _class + " border-2 border-solid rounded p-[0_0.3rem] box-border" }>
				<label style={{ cursor: "pointer" }} htmlFor={props.name}>{ (props.icon) ? <FontAwesomeIcon icon={props.icon} /> : ""}{ labelName }</label>
				<input style={ input } className={ textClass + " bg-transparent w-40 box-border"} onChange={ props.onChange } onClick={ props.onClick } type={ props.type } id={ props.name } name={ props.name }/>
					{
						(props.type.toLowerCase() === "password") ?
						<FontAwesomeIcon style={{ cursor: "pointer" }} onClick={() => showHidePassword()} icon={ faEye } /> : <FontAwesomeIcon style={{ color: "transparent" }} icon={ faEyeSlash } />
					}
			</span>
		</div>
	)
}
