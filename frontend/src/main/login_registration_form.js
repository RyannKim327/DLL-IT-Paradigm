import axios from 'axios'
import { useState } from 'react'
import Input from './../widgets/input.js'
import * as fa from '@fortawesome/free-solid-svg-icons'

export default function LogReg(){
 const [ user, checkUser ] = useState('')
 
 let buttonValue = "Login"

 const checkExistence = async (event) => {
  // Mukhang tatamarin dahil sa error hahaha
  console.log("Check")
  const data = await axios.post('http://127.0.0.1:8000/api/api-check-user/', {
   "username": "Test"
  })
  console.log(data)
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
