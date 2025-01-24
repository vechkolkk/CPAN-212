/*
home page
about us
contact
login
register
*/ 
// req.url will show details about the request

import http from "http"

const app = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Welcome to the Home Page")
    }
    else if(req.url === "/aboutus"){
        res.end("About us")
    }
    else if(req.url === "/contact"){
        res.end("Contact")
    }
    else if(req.url === "/login"){
        res.end("Login")
    }
    else if(req.url === "/register"){
        res.end("Register")
    }
    else{
        res.end("404 Page Not Found !!")
    }
});
const port = process.env.port || 8000;  
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
}); // keep app running all the time