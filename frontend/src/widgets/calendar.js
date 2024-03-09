import { useState } from 'react'
import { FontAwesomeIcon } from	'@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Calendar(props){
	const initialDate = new Date()

	const [ month, setMonth ] = useState(initialDate.getMonth())
	const [ year, setYear ] = useState(initialDate.getFullYear())

	function nextMonth(){
		setMonth(month + 1)
		if(month >= 11){
			setYear(year + 1)
			setMonth(0)
		}
	}

	function lastMonth() {
		setMonth(month - 1)
		if(month <= 0){
			setMonth(11)
			setYear(year - 1)
		}
	}

	const date = new Date()
	const bdate = new Date(year, month + 1, 0)
	const cdate = new Date([year, month + 1, 1])
	const day = cdate.getDay()

	const gridCalendar = {
		"display": "grid",
		"gridTemplateColumns": "auto auto auto auto auto auto auto",
		"gridGap": 5
	}
	
	const baseCalendar = {
		"display": "flex",
		"flexDirection": "column"
	}

	const months = [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	]

	const days = [
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	]
	const days_ = [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
	]

	let dates = []

	for(let i = 0; i < days.length; i++){
		if(initialDate.getDay() === i && month === initialDate.getMonth()){
			dates.push(<span className="text-[#72ddf7] font-bold">{ days_[i] }</span>)
		}else{
			dates.push(<span>{ days_[i] }</span>)
		}
	}

	for(let i = 1; i <= bdate.getDate() + day; i++){
		if(i <= day){
			dates.push(<span></span>)
		}else{
			if(initialDate.getMonth() === month && (i - day) === initialDate.getDate() && year === initialDate.getFullYear()){
				dates.push(<span className="font-bold cursor-pointer border-solid border-[#72ddf7] border-2 rounded-[.25rem] text-[#72ddf7] p-[0.25rem]">{i - day}</span>)
			}else{
				dates.push(<span className="cursor-pointer border-solid border-white border-2 rounded-[.25rem] text-white p-[0.25rem]">{i - day}</span>)
			}
		}
	}

	return (
		<div style={ baseCalendar } className={ props.className }>
			<div className="flex flex-row align-center justify-center content-center">
				<FontAwesomeIcon onClick={ lastMonth } className="cursor-pointer self-center mr-10" icon={ faArrowLeft } />
				<h3 className="self-center w-[10rem]">{ months[bdate.getMonth()] } [{ bdate.getFullYear() }]</h3>
				<FontAwesomeIcon onClick={ nextMonth } className="cursor-pointer self-center ml-10" icon={ faArrowRight } />
			</div>
			<div style={ gridCalendar }>
				{ dates }
			</div>
		</div>
	)
}
