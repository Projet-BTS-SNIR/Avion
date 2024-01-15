const levier = document.getElementById('levier');

let isPressed = false;

levier.addEventListener('mousedown', () => {
  isPressed = true;
  levier.style.height = '100px'; // Changer la hauteur selon vos besoins
});

document.addEventListener('mouseup', () => {
  if (isPressed) {
    isPressed = false;
    levier.style.height = '200px'; // Rétablir la hauteur initiale
  }
});

document.addEventListener('mousemove', (event) => {
  if (isPressed) {
    const mouseY = event.clientY;
    const levierRect = levier.getBoundingClientRect();
    
    // Assurez-vous que la souris reste dans les limites du levier
    if (mouseY < levierRect.bottom) {
      levier.style.height = `${levierRect.bottom - mouseY}px`;
    }
  }
});