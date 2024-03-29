window.onload=function()
{ 
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
    const angle = Math.atan2(e.clientY - window.innerHeight / 2, e.clientX - window.innerWidth / 2);
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
    if(rectangle.style.top < 362 + "px")
    {
      if(rectangle.style.top != 337 + "px")
      {
        rectangle.style.top = (mouseY - 10) + 'px';
      }
    }
    if(rectangle.style.top > 361 + 'px')
    {
      rectangle.style.top = 361 + 'px';
      enlev = false;
    }
    if(rectangle.style.top < 338 + 'px')
    {
      rectangle.style.top = 336 + 'px';
      enlev = true;
    }
  }
});

const strobelightgauche = document.getElementById("strobelightgauche");
const ONstrobelightgauche = document.getElementById("ONstrobelightgauche");
const OFFstrobelightgauche = document.getElementById("OFFstrobelightgauche");

let strobelightgauchestatus = false;

strobelightgauche.addEventListener("click", (event) => {
  if(strobelightgauchestatus == true)
  {
    ONstrobelightgauche.style.color = "#808080";
    ONstrobelightgauche.style.borderColor = "#808080";
    OFFstrobelightgauche.style.color = "#FFFFFF";
    OFFstrobelightgauche.style.borderColor = "#FFFFFF";
    strobelightgauchestatus = false;
  }
  else
  {
    OFFstrobelightgauche.style.color = "#808080";
    OFFstrobelightgauche.style.borderColor = "#808080";
    ONstrobelightgauche.style.color = "#FF6800";
    ONstrobelightgauche.style.borderColor = "#FF6800";
    strobelightgauchestatus = true;
  }
});

const strobelightdroite = document.getElementById("strobelightdroite");
const ONstrobelightdroite = document.getElementById("ONstrobelightdroite");
const OFFstrobelightdroite = document.getElementById("OFFstrobelightdroite");

let strobelightdroitestatus = false;

strobelightdroite.addEventListener("click", (event) => {
  if(strobelightdroitestatus == true)
  {
    ONstrobelightdroite.style.color = "#808080";
    ONstrobelightdroite.style.borderColor = "#808080";
    OFFstrobelightdroite.style.color = "#FFFFFF";
    OFFstrobelightdroite.style.borderColor = "#FFFFFF";
    strobelightdroitestatus = false;
  }
  else
  {
    OFFstrobelightdroite.style.color = "#808080";
    OFFstrobelightdroite.style.borderColor = "#808080";
    ONstrobelightdroite.style.color = "#FF6800";
    ONstrobelightdroite.style.borderColor = "#FF6800";
    strobelightdroitestatus = true;
  }
});

const aftstrobelight = document.getElementById("aftstrobelight");
const ONaftstrobelight = document.getElementById("ONaftstrobelight");
const OFFaftstrobelight = document.getElementById("OFFaftstrobelight");

let aftstrobelightstatus = false;

aftstrobelight.addEventListener("click", (event) => {
  if(aftstrobelightstatus == true)
  {
    ONaftstrobelight.style.color = "#808080";
    ONaftstrobelight.style.borderColor = "#808080";
    OFFaftstrobelight.style.color = "#FFFFFF";
    OFFaftstrobelight.style.borderColor = "#FFFFFF";
    aftstrobelightstatus = false;
  }
  else
  {
    OFFaftstrobelight.style.color = "#808080";
    OFFaftstrobelight.style.borderColor = "#808080";
    ONaftstrobelight.style.color = "#FF6800";
    ONaftstrobelight.style.borderColor = "#FF6800";
    aftstrobelightstatus = true;
  }
});

const taxilight = document.getElementById("taxilight");
const ONtaxilight = document.getElementById("ONtaxilight");
const OFFtaxilight = document.getElementById("OFFtaxilight");

let taxilightstatus = false;

taxilight.addEventListener("click", (event) => {
  if(taxilightstatus == true)
  {
    ONtaxilight.style.color = "#808080";
    ONtaxilight.style.borderColor = "#808080";
    OFFtaxilight.style.color = "#FFFFFF";
    OFFtaxilight.style.borderColor = "#FFFFFF";
    taxilightstatus = false;
  }
  else
  {
    OFFtaxilight.style.color = "#808080";
    OFFtaxilight.style.borderColor = "#808080";
    ONtaxilight.style.color = "#FF6800";
    ONtaxilight.style.borderColor = "#FF6800";
    taxilightstatus = true;
  }
});

const doubleflashlight = document.getElementById("doubleflashlight");
const ONdoubleflashlight = document.getElementById("ONdoubleflashlight");
const OFFdoubleflashlight = document.getElementById("OFFdoubleflashlight");

let doubleflashlightstatus = true;

doubleflashlight.addEventListener("click", (event) => {
  if(doubleflashlightstatus == true)
  {
    ONdoubleflashlight.style.color = "#808080";
    ONdoubleflashlight.style.borderColor = "#808080";
    OFFdoubleflashlight.style.color = "#FFFFFF";
    OFFdoubleflashlight.style.borderColor = "#FFFFFF";
    doubleflashlightstatus = false;
  }
  else
  {
    OFFdoubleflashlight.style.color = "#808080";
    OFFdoubleflashlight.style.borderColor = "#808080";
    ONdoubleflashlight.style.color = "#FF6800";
    ONdoubleflashlight.style.borderColor = "#FF6800";
    doubleflashlightstatus = true;
  }
});

const loginlogo = document.getElementById("loginlogo");
const menuconnection = document.getElementById("menuconnection");

menuconnection.hidden = true;

let letsgologinmyfriend = false;

loginlogo.addEventListener("click", (event) => {
  if(letsgologinmyfriend == true)
  {
    menuconnection.hidden = false;
    letsgologinmyfriend = false;
  }
  else
  {
    menuconnection.hidden = true;
    letsgologinmyfriend = true;
  }
});

const validation = document.getElementById("validation");
const textmdp = document.getElementById("textmdp");
const motdepasse = document.getElementById("motdepasse");
const pagemtl = document.getElementById("pagemtl");
const pagebts = document.getElementById("pagebts");
const textssid = document.getElementById("textssid");
const ssid = document.getElementById("ssid");
const textmdpres = document.getElementById("textmdpres");
const motdepassereseau = document.getElementById("motdepassereseau");
const connexionesp = document.getElementById("connexionesp");
const deconnecter = document.getElementById("deconnecter");

pagemtl.hidden = true;
pagebts.hidden = true;
textssid.hidden = true;
ssid.hidden = true;
textmdpres.hidden = true;
motdepassereseau.hidden = true;
connexionesp.hidden = true;
deconnecter.hidden = true;

validation.addEventListener("click", (event) => {
  if(motdepasse.value == "Avion")
  {
    validation.hidden = true;
    textmdp.hidden = true;
    motdepasse.hidden = true;
    pagemtl.hidden = false;
    pagebts.hidden = false;
    textssid.hidden = false;
    ssid.hidden = false;
    textmdpres.hidden = false;
    motdepassereseau.hidden = false;
    connexionesp.hidden = false;
    deconnecter.hidden = false;
  }
  else
  {
    alert("Mot de passe incorrecte");
  }
});

deconnecter.addEventListener("click", (event) => {
  validation.hidden = false;
  textmdp.hidden = false;
  motdepasse.hidden = false;
  pagemtl.hidden = true;
  pagebts.hidden = true;
  textssid.hidden = true;
  ssid.hidden = true;
  textmdpres.hidden = true;
  motdepassereseau.hidden = true;
  connexionesp.hidden = true;
  deconnecter.hidden = true;
});
}