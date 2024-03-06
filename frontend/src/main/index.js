import { Route, Routes } from 'react-router-dom'

import Main from './main.js'
import LogReg from './login_registration_form.js'

import Calendar from './../widgets/calendar.js'

export default function Index(){
	return(
		<div className="flex flex-row">
			<div className="flex flex-col">
			<div>
				{/* For Events */ }
			</div>
			<Calendar className="bluredSection" />
			</div>
			<main className="border-solid border-red-50 flex flex-col align-center justify-center">
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/user" element={<LogReg />}/>
			</Routes>
			</main>
		</div>
	)
}
