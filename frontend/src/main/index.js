import { Route, Routes } from 'react-router-dom'

import Main from './main.js'
import LogReg from './login_registration_form.js'

export default function Index(){
  return(
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user" element={<LogReg />}/>
      </Routes>
    </div>
  )
}
