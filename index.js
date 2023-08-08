const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()
const PORT = 3000 | 5000 | 7000

app.use("/", express.static(path.join(`${__dirname}/frontend`)))
app.use("/assets", express.static(path.join(`${__dirname}/assets`)))

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/frontend/index.html`)
})

app.get("/all-data", (req, res) => {
	const json = JSON.parse(fs.readFileSync("a.json", "utf-8"))
	const officers = JSON.parse(fs.readFileSync("b.json", "utf-8"))
	let data = {}
	data = json
	data.officers = officers.officers
	res.send(JSON.stringify(data))
})

app.get("/api-officers", (req, res) => {
	const officers = JSON.parse(fs.readFileSync("b.json", "utf-8"))
	res.send(JSON.stringify(officers))
})

app.get("/api-announcements", (req, res) => {
	const json = JSON.parse(fs.readFileSync("a.json", "utf-8"))
	res.send(JSON.stringify(json.announcements))
})

app.get("/api-events", (req, res) => {
	const json = JSON.parse(fs.readFileSync("a.json", "utf-8"))
	res.send(JSON.stringify(json['events']))
})

app.post("/send-announcement", (req, res) => {
	const json = JSON.parse(fs.readFileSync("a.json", "utf-8"))
	const reqs = req.body
	let error = []
	if(reqs.what == ""){
		error.push("what")
	}
	if(reqs.where == ""){
		error.push("where")
	}
	if(reqs.when == ""){
		error.push("when")
	}
	if(reqs.who == ""){
		error.push("who")
	}
	if(error.length > 0){
		return res.send(JSON.stringify({
			"statusCode": 403,
			"message": `Please fill up with corresponding data ${error.join(", ")}.`
		}))
	}
	const data = {
		"what": reqs.what,
		"where": reqs.where,
		"when": reqs.when,
		"who": reqs.who
	}
	json['announcements'].push(data)
	res.send(JSON.stringify({
		"resultCode": 200,
		"message": "New announcement posted on the server"
	}))
})

app.post("/send-events", (req,res) => {
	const json = JSON.parse(fs.readFileSync("a.json", "utf-8"))
	const data = req.body
	const date = data['date']
	const event = data['event']

	res.send("Data sent")
})

app.listen(PORT, () => {
	console.log(`Currently Listening to port: ${PORT}`)
})
