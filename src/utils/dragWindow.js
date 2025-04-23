let newX = 0, newY = 0, startX = 100, startY = 100;


const card = document.getElementsByClassName("Draggable");

// card[0].addEventListener('mousedown', mouseDown)

function mouseDown(e) {
  startX = e.clientX
  startY = e.clientY

  document.addEventListener('mousemove', mouseMove)
  document.addEventListener('mouseup', mouseUp)
}

function mouseMove(e) {
  newX = startX - e.clientX
  newY = startY - e.clientY

  startX = e.clientX
  startY = e.clientY

  card[0].style.top = (card[0].offsetTop - newY) + 'px'
  card[0].style.left = (card[0].offsetLeft - newX) + 'px'
}

function mouseUp(e) {
  document.removeEventListener('mousemove', mouseMove)
}
