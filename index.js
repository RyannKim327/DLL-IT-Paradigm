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

app.get("/all-events", (req, res) => {
	const json = JSON.parse(fs.readFileSync("a.json", "utf-8"))
	res.send(JSON.stringify(json.events))
})

app.listen(PORT, () => {
	console.log(`Currently Listening to port: ${PORT}`)
})