const volant = document.getElementById('volant');
const levieroffdown = document.getElementById('levieroffdown');
const levierondown = document.getElementById('levierondown');
const levieroffup = document.getElementById('levieroffup');
const levieronup = document.getElementById('levieronup');
const rectangle = document.getElementById("rectangle");

levierondown.hidden = true;
levieroffup.hidden = true;
levieronup.hidden = true;

let isDraggingg = false;
let isDragging = false;
let enlev = false;
let keypressZ = false;

volant.addEventListener('mousedown', (e) => {
  isDragging = true;
  volant.style.transition = 'none';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  volant.style.transition = 'transform 0.3s ease';
});

rectangle.addEventListener('mousedown', (e) => {
  isDraggingg = true;
  if(enlev == false)
  {
    levieroffdown.hidden = true;
    levieroffup.hidden = true;
    levieronup.hidden = true;
    levierondown.hidden = false;
  }
  else
  {
    levieroffdown.hidden = true;
    levieroffup.hidden = true;
    levieronup.hidden = false;
    levierondown.hidden = true;
  }
});

document.addEventListener('mouseup', () => {
  isDraggingg = false;
  if(enlev == false)
  {
    levieroffdown.hidden = false;
    levieroffup.hidden = true;
    levieronup.hidden = true;
    levierondown.hidden = true;
  }
  else
  {
    levieroffdown.hidden = true;
    levieroffup.hidden = false;
    levieronup.hidden = true;
    levierondown.hidden = true;
  }
});

document.addEventListener('keydown', function(e) {
  if(e.code == "KeyZ")
  {
    alert("salut!")
    keypressZ = true;
  }
  else
  {
    keypressZ = false;
  }
})

document.addEventListener('mousemove', (e) => {
  mouseY = e.clientY;
  if (isDragging == true) 
  {
    const angle = Math.atan2(e.clientY - window.innerHeight / 2.5, e.clientX - window.innerWidth / 2.5);
    const rotation = angle * (180 / Math.PI);
    if(keypressZ == true)
    {
      volant.style.transform = "rotate(0deg)";
      if(volant.style.top < 510 + 'px')
      {
        if(volant.style.top != 440 + 'px')
        {
          volant.style.top = (mouseY - 80) + 'px';
        }
      }
      if(volant.style.top > 509 + 'px')
      {
        volant.style.top = 509 + 'px';
      }
      if(volant.style.top < 441 + 'px')
      {
        volant.style.top = 439 + 'px';
      }
    }
    else
    {
      if(rotation < 30 && rotation > -30 )
      {
          volant.style.transform = `rotate(${rotation}deg)`;
      }
    }
  }
  if (isDraggingg == true) 
  {
    if(rectangle.style.top < 268 + "px")
    {
      if(rectangle.style.top != 246 + "px")
      {
        rectangle.style.top = (mouseY - 10) + 'px';
      }
    }
    if(rectangle.style.top > 267 + 'px')
    {
      rectangle.style.top = 267 + 'px';
      enlev = false;
    }
    if(rectangle.style.top < 247 + 'px')
    {
      rectangle.style.top = 245 + 'px';
      enlev = true;
    }
  }
});