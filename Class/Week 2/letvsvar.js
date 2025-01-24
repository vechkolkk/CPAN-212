for (let index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index)
    }, 1000); 
    
}

for (var index = 0; index < 5; index++) {
    setTimeout(() => {
        console.log(index)
    }, 1000); 
}
console.log("-------------")