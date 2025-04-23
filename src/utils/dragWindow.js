let newX = 0, newY = 0, startX = 100, startY = 100;

const resizableComponent = document.getElementById("resizableComponent");

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

  resizableComponent[0].style.top = (resizableComponent[0].offsetTop - newY) + 'px'
  resizableComponent[0].style.left = (resizableComponent[0].offsetLeft - newX) + 'px'
}

function mouseUp(e) {
  document.removeEventListener('mousemove', mouseMove)
}
