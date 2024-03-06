import axios from 'axios'
import Input from './../widgets/input.js'
import * as fa from '@fortawesome/free-solid-svg-icons'

export default function LogReg(){
	let buttonValue = "Login"
	const checkExistence = async (event) => {
		// Mukhang tatamarin dahil sa error hahaha
		const { data } = await axios.post("http://localhost:8000/api/check-user/", {
		"username": document.getElementById("username").value
		})
		if(data.status == 200){
			if(!data.isRegistered){
				buttonValue = "Register"
			}
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
