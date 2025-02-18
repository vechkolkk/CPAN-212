const auth = (req, res, next) => {
    // Restriction
    if(req.query.username == "Vechkol") { // this mean url?username="your name"
        next();
    } else {
        res.send("You are not authorized for this page!")
    }
}

export default auth;