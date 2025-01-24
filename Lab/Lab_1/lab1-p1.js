import lodash from "lodash"; // lodash has array function

const holidays = [
    {name: "Christmas", date: new Date("2025-01-25")},
    {name: "Canada Day", date: new Date("2025-02-03")},
    {name: "April Fools", date: new Date("2025-03-04")}
]

let today = new Date();

// create loops for each instance
holidays.forEach(holiday =>{
    let dateDifference = holiday.date - today;
    console.log(Math.ceil(dateDifference/(1000 *60 *60 *24))) //Math.ceil is estimate a number
});

let randomHoliday = lodash.sample(holidays); // lodash.sample -> pick random object in an array
console.log(randomHoliday);

console.log(lodash.findIndex(holidays, {name:"Christmas"})) // lodash.findIndex find index from an instance in array
console.log(lodash.findIndex(holidays, {name:"Canada Day"}))