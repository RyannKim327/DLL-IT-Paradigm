import Input from './../widgets/input.js'
import * as fa from '@fortawesome/free-solid-svg-icons'

export default function LogReg(){
 return(
  <div>
   <form>
    <Input icon={ fa.faUser } type="text" name="username" placeholder="Sample" />
   </form>
  </div>
 )
}
