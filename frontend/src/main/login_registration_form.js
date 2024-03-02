import Input from './../widgets/input.js'
import * as fa from '@fortawesome/free-solid-svg-icons'

export default function LogReg(){
 return(
  <div>
   <form className="flex flex-col box-border">
    <Input icon={ fa.faUser } type="text" name="username" placeholder="Enter username" />
    <Input icon={ fa.faLock } type="password" name="password" placeholder="Enter password" />
   </form>
  </div>
 )
}
