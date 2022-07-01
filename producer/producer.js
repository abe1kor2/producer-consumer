const XMLHttpRequest = require('xhr2');
const URL = "http://localhost:5000/"
let firstNumber = Math.floor(Math.random() * 10);
let secondNumber = Math.floor(Math.random() * 10);

// creating random math arithmatics
function randomOperator() {
    let n = Math.floor(Math.random() * 4);
    switch (n) {
        case 0:
            return '+'
        case 1:
            return '-'
        case 2:
            return '*'
        case 3:
            return '/'
    }
}

// creating random expression
const randExpression = firstNumber + randomOperator() + secondNumber + "="

console.log();

// sending the expression to the route
console.log("Sending the expression:", JSON.stringify(randExpression), "to Consumer... ");
const xhttp = new XMLHttpRequest();
xhttp.open("POST", URL, true);
xhttp.setRequestHeader('Content-Type', 'application/json');
xhttp.send(JSON.stringify({
    expression: randExpression
}))

// receiving the correct result
xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4) {
       // Handle the response (ex: console.log it)
        console.log("The calculated result", JSON.stringify(xhttp.response), "was received from Consumer");
        console.log("\n")
    }
}

// error handling
xhttp.onerror = function(error){
	console.error( error );
}