function _ (element){
	return document.querySelector(element)
}

window.onload = async () => {
	const getAllData = async () => {
		let data = fetch("/all-data").then((response) => {
			return response.json()
		})
		return data
	}
	let currentData = ""

	setInterval(async () => {
		const allData = await getAllData()
		if(JSON.stringify(allData) == currentData) return
		
		currentData = JSON.stringify(allData)
		const eventData = allData.events

		console.log(allData)

		const introText = "Troubleshooting - Programming - Multimedia Editing".split(" - ")
		_("#introDLL").textContent = ""
		let intro = 0
		function introDLLTyping(){
			if(intro < introText.length){
				_("#introDLL").textContent += introText[intro] + (intro < introText.length -1 ? " - " : "")
				intro++
				setTimeout(introDLLTyping, 1000)
			}
		}
		introDLLTyping()

		let checkEvent = (month, day, year, start) => {
			if(start){
				_("#home").classList.remove("show")
				_("#announcements").classList.remove("show")
				_("#officers").classList.remove("show")
				_("#events").classList.remove("show")
				_("#events").classList.add("show")
			}
			const today = eventData[`${month + 1}-${day}-${year}`]
			if(today != undefined){
				_("#eventToday").textContent = today.title
				_("#eventDescription").textContent = today.description
			}else{
				_("#eventToday").textContent = "There's no event here"
				_("#eventDescription").textContent = ""
				_("#what-base").innerHTML = ""
			}
		}

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
					if((month == today.getMonth()) && ((i - day) == today.getDate()) && (year == today.getFullYear())){
						d.classList.add("clickedDate")
					}
					d.textContent = i - day
					d.onclick = () => {
						checkEvent(month, d.textContent, year, true)
						let calendars = _(".clickedDate")
						if(calendars){
							calendars.classList.remove("clickedDate")
						}
						d.classList.add("clickedDate")
					}
				}
				date.appendChild(d)
			}
			_("#month").textContent = `${months[month]} ${year}`
			checkEvent(month, day, year, false)
			function clock(){
				const _today = new Date()
				_("#currentTime").textContent = `${timeConvert(_today.getHours())}:${timeConvert(_today.getMinutes())}:${timeConvert(_today.getSeconds())}`
				setTimeout(() => {
					clock()
				}, 1);
			}
			clock()
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

		let officers =  allData.officers
		let officer = Object.keys(officers)
		const officersTitle = document.createElement("h1")
		officersTitle.textContent = "Officers"
		officersTitle.style.textAlign = "center"
		_("#officers").appendChild(officersTitle)
		const officersContent = document.createElement("div")
		for(let o in officer){
			const off = officer[o]
			const doc = document.createElement("div")
			const container = document.createElement("div")
			const name = document.createElement("h3")
			const pos = document.createElement("h5")

			doc.classList.add("officers-card")
			doc.style.backgroundImage = `url(${officers[off].photo})`

			name.textContent = officers[off].name
			pos.textContent = off.toUpperCase()

			container.appendChild(name)
			container.appendChild(pos)
			doc.appendChild(container)
			
			officersContent.appendChild(doc)
		}
		_("#officers").appendChild(officersContent)
	})
}

function timeConvert(n){
	if(n < 10){
		n = `0${n}`
	}
	return n
}

function show($layout){
	const contents = document.getElementsByClassName("contents")
	for(let e = 0; e < contents.length; e++){
		const element = contents[e]
		element.classList.remove("show")
	}
	_(`#${$layout}`).classList.add("show")
}