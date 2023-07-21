const _ = (element) => {
	return document.querySelector(element)
}

window.onload = () => {
	const months = [
		"January", "Febuary", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	]
	const today = new Date()
	const month = today.getMonth()
	const year = today.getFullYear()
	const date = _("#dates")

	const totalDate = new Date(year, month + 1, 0)
	const date2 = new Date([year, month + 1, 1])
	const day = date2.getDay()
	for(let i = 1; i <= totalDate.getDate() + day; i++){
		let d = document.createElement("p")
		if(i < (day + 1)){
			d.textContent = ""
		}else{
			d.textContent = i - day
		}
		document.getElementById("dates").appendChild(d)
	}
	_("#month").textContent = `${months[month]} ${year}`
}