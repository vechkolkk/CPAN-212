// const http = require("http")
import http from "http";
import fs from "fs"; // file system to access info from other file

// req, res
const app =http.createServer((req, res)=>{
    if(req.url === '/'){
        let webpage = fs.readFileSync("homepage.html") // read file
        res.end(webpage);
    }
    else if (req.url === '/about'){
        res.end('Welcome to about us')
    }
    else if (req.url === '/user/account/id'){
        req.end('My name is Kol')
    }
    else{
        res.end('Page not found')
    }
});

// Creating connection with port
const port = 8000;
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})