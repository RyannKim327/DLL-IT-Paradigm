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
	const allData = await getAllData()
	const eventData = allData.events
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
				d.onclick = () => {
					_("#home").classList.remove("show")
					_("#announcements").classList.remove("show")
					_("#members").classList.remove("show")
					_("#events").classList.remove("show")
					_("#events").classList.add("show")
					const today = eventData[`${month + 1}-${d.textContent}-${year}`]
					if(today != undefined){
						_("#eventToday").textContent = today.title
						_("#eventDescription").textContent = today.description
						if(today.images.length > 0){
							const eventImg = today.images
							for(let image = 0; image < eventImg.length; image++){
								const img = document.createElement("img")
								img.src = eventImg[image]
								_("#images").appendChild = img
							}
						}
					}else{
						_("#eventToday").textContent = "There's no event here"
						_("#eventDescription").textContent = ""
						_("#images").innerHTML = ""
					}
				}
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

	let officers =  allData.officers
	let officer = Object.keys(officers)
	for(let o in officer){
		const off = officer[o]
		console.log(officers[off])
		const doc = document.createElement("div")
		const name = document.createElement("h3")
		const pos = document.createElement("h5")
		const photo = document.createElement("img")

		doc.classList.add("members-card")

		name.textContent = officers[off].name
		pos.textContent = off.toUpperCase()
		photo.src = officers[off].photo

		doc.appendChild(photo)
		doc.appendChild(name)
		doc.appendChild(pos)

		_("#members").appendChild(doc)
	}
}

function show($layout){
	const contents = document.getElementsByClassName("contents")
	for(let e = 0; e < contents.length; e++){
		const element = contents[e]
		element.classList.remove("show")
	}
	_(`#${$layout}`).classList.add("show")
}