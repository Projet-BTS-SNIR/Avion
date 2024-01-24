const carre = document.getElementById('carre');
let isMouseDown = false;
let rotation = 0;
let rotationSpeed = 0.005; // Ajustez cette valeur pour changer la vitesse de rotation

carre.addEventListener('mousedown', () => {
  isMouseDown = true;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
});

function updateRotation(event) {
  if (isMouseDown) {
    const angle = Math.atan2(event.clientY - carre.offsetTop - carre.clientHeight / 2, event.clientX - carre.offsetLeft - carre.clientWidth / 2);
    const targetRotation = angle * (180 / Math.PI);
    
    // Interpoler la rotation pour une transition plus douce
    rotation += (targetRotation - rotation) * rotationSpeed;
  }

  carre.style.transform = `rotate(${rotation}deg)`;
  requestAnimationFrame(() => updateRotation(event));
}

document.addEventListener('mousemove', updateRotation);
