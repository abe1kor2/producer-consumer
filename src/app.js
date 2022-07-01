// Attempting to display results to front end...
const feedDisplay = document.querySelector("#feed")

fetch("http://localhost:5000/")
    .then(response => response.json())
    .then(data => console.log(data))