import { Route, Routes, Link } from 'react-router-dom'

import { useState } from 'react'

import Main from './main.js'
import LogReg from './login_registration_form.js'
import Events from './events.js'

import Calendar from './../widgets/calendar.js'

export default function Index(){
	return(
		<div className="flex flex-row h-[85%]">
			<div className="flex flex-col justify-between text-white">
				<div className="bluredSection">
					<h1>DLL IT Paradigm</h1>
					<hr />
					<nav className="flex flex-col text-left pl-2 box-border w-full">
						<Link to="/">Home</Link>
						<Link to="/events">Events</Link>
						<Link to="/user">Login</Link>
					</nav>
				</div>
				<Calendar className="bluredSection box-border" />
			</div>
			<main className="box-border border-solid w-[100%] border-red-50 flex flex-col align-center justify-center">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/events" element={<Events />}/>
					<Route path="/user" element={<LogReg />}/>
				</Routes>
			</main>
		</div>
	)
}
