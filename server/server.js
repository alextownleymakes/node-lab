var fs = require('fs')
var path = require('path')
var theFile = path.join(__dirname, "/chirps.json")

let chirps = [
    {chirp: "hi"},
    
    {chirp: "hello"},
    
    {chirp: "hey"},
    
    {chirp: "yo"},
    
    {chirp: "yeet"},
    
]

let chirpsJson = JSON.stringify(chirps)

fs.writeFile(theFile, chirpsJson, (err) => {
    if (err) throw err;
    console.log("yeet")
})

let output = fs.readFile(theFile, (err, data) => {
    if(err) throw err;

        console.log( JSON.parse(data));
})

console.log(output)