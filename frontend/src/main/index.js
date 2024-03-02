import { Route, Routes } from 'react-router-dom'

import LogReg from './login_registration_form.js'

export default function Index(){
  return(
    <div>
      <Routes>
        <Route path="/user" element={<LogReg />}/>
      </Routes>
    </div>
  )
}
