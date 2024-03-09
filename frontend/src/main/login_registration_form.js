import { useState } from 'react' 
import axios from 'axios'
import Input from './../widgets/input.js'
import * as fa from '@fortawesome/free-solid-svg-icons'

export default function LogReg(){
	const [ buttonValue, setNewBtn ] = useState('Register')
	const checkExistence = async (event) => {
		const { data } = await axios.post("http://localhost:8000/api/check-user/", {
			"username": document.getElementById("username").value
		})
		console.log(data)
		if(data.existed){
			setNewBtn("Login")
		}else{
			setNewBtn("Register")
		}
	}
	return(
		<div>
			<form className="flex flex-col box-border">
				<Input icon={ fa.faUser } onChange={ checkExistence } type="text" name="username" placeholder="Enter username" />
				<Input icon={ fa.faLock } type="password" name="password" placeholder="Enter password" />
				<input type="submit" value={ buttonValue } />
			</form>
		</div>
	)
}
