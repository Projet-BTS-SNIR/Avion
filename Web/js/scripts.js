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