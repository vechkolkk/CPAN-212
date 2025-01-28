import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const PORT = process.env.PORT || 8000;

// CRUD -> Server is setup to do these thing

// Methods: GET(read), POST(create), PUT(update), DELETE

app.get('/', (req,res)=>{
    res.send('Welcome to the server - GET')
})
app.post('/', (req,res)=>{
    res.send('Welcome to the server - POST')

})
app.put('/', (req,res)=>{
    res.send('Welcome to the server - PUT')

})
app.delete('/', (req,res)=>{
    res.send('Welcome to the server - DELETE')

})

app.get('/search', (req,res)=>{
    console.log(req.url)
    console.log(req.headers)
    console.log(req.query)
    console.log(req.params)
    console.log(req.body)
    res.send("You came into the search route!!")
})

app.get('/item/:itemID/:OtherID', (req,res)=>{
    console.log(req.url)
    console.log(req.headers)
    console.log(req.query)
    console.log(req.params)// if you put '.' you will see options
    console.log(req.body)
    res.send("You came into the item route!!")
})




// https://www.youtube.com/watch?v=Q1xQuCpYIFE&list=PLKWMD009Q4qSHIMF6Swy4VQs5z6U97LJm
// Domain"localhost"/watch?v=Q1xQuCpYIFE&list=PLKWMD009Q4qSHIMF6Swy4VQs5z6U97LJm


app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});
