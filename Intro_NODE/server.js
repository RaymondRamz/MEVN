const http = require("http")
const https = require("https")

//https.get("https://postman-echo.com/get?foo1=baar2", (res) => res.pipe(process.stdout))

const payload = `{
    "correo": "ray@gmail.com",
    "nombre": "Raymundo"
}`

const opts = {
    method: "POST",
    hostname: "postman-echo.com",
    path: "/post",
    headers: {
        "Content-Type": "aplication/json",
        "Content-Length": Buffer.byteLength(payload),
    },
}

const req = https.request(opts, (res) => {
    process.stdout.write("Status code: " + res.statusCode + "\n")
    process.stdout.write("Body: ")
    res.pipe(process.stdout)
})

req.on("error", (err) => console.log("Error: ",err))
req.end(payload)