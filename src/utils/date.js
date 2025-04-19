let date = new Date();
let dateSpan = document.getElementById("date");

dateSpan.innerText = date.toLocaleDateString();


function updateClock() {
  const clockElement = document.getElementById('time');
  const date = new Date();
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

updateClock();
// NOTE: Update clock every seconds
setInterval(updateClock, 1000);

