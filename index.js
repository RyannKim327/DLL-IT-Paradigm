const express = require("express")
const fs = require("fs")
const path = require("path")
const { off } = require("process")

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

app.listen(PORT, () => {
	console.log(`Currently Listening to port: ${PORT}`)
})