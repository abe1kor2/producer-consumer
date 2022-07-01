const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.post('/', (req, res) => {
  console.log("Received the expression:", req.body.expression);
  arr = req.body.expression.split("") // Split the expression 
  console.log("Calculating...");
  // execute conditions based on operator
  if (arr[1] === '+') {
    let addition = parseInt(arr[0]) + parseInt(arr[2])
    console.log("Sending the calculated result", addition ,"back to Producer.")
    res.send(addition.toString())
  }
  else if (arr[1] === '-') {
    let subtraction = parseInt(arr[0]) - parseInt(arr[2])
    console.log("Sending the calculated result", subtraction ,"back to Producer.")
    res.send(subtraction.toString())
  }
  else if (arr[1] === '*') {
    let multiplication = parseInt(arr[0]) * parseInt(arr[2])
    console.log("Sending the calculated result", multiplication ,"back to Producer.")
    res.send(multiplication.toString())
  }
  else if (arr[1] === '/') {
    let division = parseInt(arr[0]) / parseInt(arr[2])
    console.log("Sending the calculated result", division ,"back to Producer.")
    res.send(division.toString())
  }
  console.log("\n")
})

app.listen(5000, () => console.log())