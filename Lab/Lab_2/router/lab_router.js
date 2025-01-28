import express from "express";

const router = express.Router()

// CHecking if in route
router.get('/', (req, res)=>{
    res.send('Welcome to the lab router')
})

// name route
router.get('/name', (req, res)=>{
    res.send('Vechkol Khourn')
})

//greeting
router.get('/greeting', (req, res)=>{
    res.send('Hello this is Kol. My student ID is n01186221')
})

// add
router.get('/add/:x/:y', (req, res)=>{
    let {x , y} = req.params

    // let x = parseFloat(req.params.x)
    // let y = parseFloat(req.params.y) use this for both

    y = parseFloat(y)
    x = parseFloat(x)

    res.send(`${x+y}`)
})

// calculate
router.get('/calculate/:a/:b/:operation', (req, res)=>{
    let {a , b} = req.params
    let operation = req.params.operation
    let result = 0;

    a = parseFloat(a)
    b = parseFloat(b)


    
    switch (operation) {
        case '+':
            result = a + b
            break;
        case '-':
            result = a - b
            break;
        case '*':
            result = a * b
            break;
        case "/": // -> %2f
            if (b !== 0) {
                result = a / b;
            } else {
                result = "Error: Division by zero";
            }
            break;
        default:
            res.send("Invalid Operator")
            break;
    }

    res.send(`${result}`)
})

export default router;