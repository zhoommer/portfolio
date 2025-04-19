let date = new Date();

let dateSpan = document.getElementById("date");
let timeSpan = document.getElementById("time");

dateSpan.innerText = date.toLocaleDateString();
timeSpan.innerText = date.toLocaleTimeString();

