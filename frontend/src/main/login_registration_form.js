import { useState } from 'react' 
import axios from 'axios'
import Input from './../widgets/input.js'
import * as fa from '@fortawesome/free-solid-svg-icons'

export default function LogReg(){
	const [ buttonValue, setNewBtn ] = useState('Register')
	const checkExistence = async (event) => {
		const { data } = await axios.post("http://127.0.0.1:8000/api/check-user/", {
			"username": document.getElementById("username").value
		})
		if(data.existed){
			document.title = "Login"
			setNewBtn("Login")
		}else{
			document.title = "Join with us"
			setNewBtn("Register")
		}
	}
	
	return(
		<div>
			<form className="flex flex-col box-border" autoComplete="false">
				<h1>Login Panel</h1>
				<Input className="border-[#ffffff] text-[#ffffff] focus:border-[#efde50]" textClass="font-bold italic font-serif" icon={ fa.faUser } onChange={ checkExistence } type="text" name="username" placeholder="Enter username" />
				<Input className="border-[#ffffff] text-[#ffffff] focus:text-[#efde50]" icon={ fa.faLock } type="password" name="password" placeholder="Enter password" />
				<input type="submit" value={ buttonValue } />
			</form>
		</div>
	)
}
