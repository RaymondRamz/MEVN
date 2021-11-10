const express = require("express")
const path = require ("path")

const app = express()
const json = [
    {"nombre":"Ray","edad":20,"mascota":"gato"},
    {"nombre":"Pepe","edad":25,"mascota":"perro"}
]

app.get("/", (req,res) => {
    res.end("Hello Express World!")
})

app.get("/escom", (req,res) => {
    res.end("Saludos al DSC ESCOM")
})

app.get("/html", (req,res) => {
    res.sendFile(path.join(__dirname,"./hello.html"))
})

app.get("/json", (req,res) => {
    res.send({"nombre":"Ray"})
})

app.get("/personas/:id", (req,res) => {
    const id = parseInt(req.params.id)
    res.send(json[id])
})

app.listen(3000, () => {
    console.log("El servidor esta listo");
})