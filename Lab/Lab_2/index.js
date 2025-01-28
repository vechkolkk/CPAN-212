import express, { Router } from 'express'
import dotenv from 'dotenv'
import lab_router from './router/lab_router.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 8000;


// imported routes

// -> localhost:8000/lab
app.use('/lab', lab_router)


app.get('/', (req,res)=>{
    res.send('Welcome to the server<3')
})

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});