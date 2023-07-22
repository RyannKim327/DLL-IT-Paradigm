function _ (element){
	return document.querySelector(element)
}

window.onload = () => {
	const months = [
		"January", "Febuary", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	]
	let today = new Date()
	let month = today.getMonth()
	let year = today.getFullYear()
	let date = _("#dates")

	function reloadCalendar() {
		date.innerHTML = ""
		const totalDate = new Date(year, month + 1, 0)
		const date2 = new Date([year, month + 1, 1])
		const day = date2.getDay()
		for(let i = 1; i <= totalDate.getDate() + day; i++){
			let d = document.createElement("p")
			if(i < (day + 1)){
				d.textContent = ""
				d.style.border = "0"
			}else{
				d.textContent = i - day
			}
			date.appendChild(d)
		}
		_("#month").textContent = `${months[month]} ${year}`
	}
	reloadCalendar()

	_("#prev").onclick = () => {
		if(month > 0){
			month -= 1
		}else{
			month = 11
			year -= 1
		}
		reloadCalendar()
	}
	
	_("#next").onclick = () => {
		if(month < 11){
			month += 1
		}else{
			month = 0
			year += 1
		}
		reloadCalendar()
	}
}