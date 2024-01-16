const volant = document.getElementById('volant');

let isDragging = false;

volant.addEventListener('mousedown', (e) => {
  isDragging = true;
  volant.style.transition = 'none';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  volant.style.transition = 'transform 0.3s ease';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging == true) 
  {
    const angle = Math.atan2(e.clientY - window.innerHeight / 2, e.clientX - window.innerWidth / 2);
    const rotation = angle * (180 / Math.PI);
    if(rotation < 40 && rotation > -40 )
    {
        volant.style.transform = `rotate(${rotation}deg)`;
    }
  }
});
