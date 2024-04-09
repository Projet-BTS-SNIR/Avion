<!DOCTYPE html>

<?php
    error_reporting(0);
    setcookie("LeftStrobeLight", 0);
    setcookie("RightStrobeLight", 0);
    setcookie("AFTStrobeLight", 0);
    setcookie("TaxiLight", 0);
    setcookie("DoubleFlashLight", 0);
    setcookie("RotationVolant", 0);
    setcookie("TaxiEnable", 0);
    setcookie("RudderPosition", 0);
    setcookie("PositionVolant", 0);
?>

<html>
    <head>
        <title>
            Projet BTS
        </title>
        <link href="../css/style.css" rel="stylesheet"/>
        <link href="../css/styles.css" rel="stylesheet"/>
        <script type="text/javascript" language="JavaScript" src="../js/jquery-1.11.2.js"></script>
        <meta meta name="viewport" content="width=device-width, user-scalable=no" charset="utf-8"/>
        <?php 
            header('Content-type: text/html; charset=UTF-8');
        ?>
    </head>
    <body>
        <header>
            <ul class="barreduhaut">
                <li>
                    <p class = "titre">
                        Aéronautique Lycée Jean Zay
                    </p>
                </li>
                <li>
                    <span class="icon-user" id="loginlogo"></span>
                </li>
            </ul>
        </header> 
        <img class="cokpit" src="../pic/cokpit.png" href = "cokpit" ondragstart="return false">
        <div class="lightmenu">
            <ul>
                <li>
                    <div class="button strobelightgauche" id="strobelightgauche"> 
                        <p class="ON" id="ONstrobelightgauche">
                            ON
                        </p>
                        <p class="OFF" id="OFFstrobelightgauche">
                            OFF
                        </p>
                    </div>
                </li>
                <li>
                    <p class="Text">Strobe Light Gauche</p>
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <div class="button strobelightdroite" id="strobelightdroite">
                        <p class="ON" id="ONstrobelightdroite">
                            ON
                        </p>
                        <p class="OFF" id="OFFstrobelightdroite">
                            OFF
                        </p>
                    </div>
                </li>
                <li>
                    <p class="Text">Strobe Light Droite</p>
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <div class="button aftstrobelight" id="aftstrobelight">
                        <p class="ON" id="ONaftstrobelight">
                            ON
                        </p>
                        <p class="OFF" id="OFFaftstrobelight">
                            OFF
                        </p>
                    </div>
                </li>
                <li>
                    <p class="Text">AFT Strobe Light</p>
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <div class="button taxilight" id="taxilight">
                        <p class="ON" id="ONtaxilight">
                            ON
                        </p>
                        <p class="OFF" id="OFFtaxilight">
                            OFF
                        </p>
                    </div>
                </li>
                <li>
                    <p class="Text">Taxi Light</p>
                </li>
            </ul>
            <br>
            <ul>
                <li>
                    <div class="button doubleflashlight" id="doubleflashlight">
                        <p class="ON" id="ONdoubleflashlight">
                            ON
                        </p>
                        <p class="OFF" id="OFFdoubleflashlight">
                            OFF
                        </p>
                    </div>
                </li> 
                <li>
                    <p class="Text">Double Flash Light</p>
                </li>
            </ul>
        </div>
        <img class="affichage1" id="affichage1" src="../pic/csf1.png" href = "affichage1" ondragstart="return false">
        <img class="rudderpedal" id="rudderpedal" src="../pic/rudder.png" href = "rudderpedal" ondragstart="return false">
        <img class="rudderpedalgauche" id="rudderpedalgauche" src="../pic/pedal_gauche.png" href = "rudderpedalgauche" ondragstart="return false">
        <img class="rudderpedaldroite" id="rudderpedaldroite" src="../pic/pedal_droite.png" href = "rudderpedaldroite" ondragstart="return false">
        <img class="volant" id="volant" src="../pic/volant.png" href = "volant" ondragstart="return false">
        <img class="levieroffdown" id="levieroffdown" src="../pic/levier_off_down.png" href = "levieroffdown" ondragstart="return false">
        <img class="levierondown" id="levierondown" src="../pic/levier_on_down.png" href = "levierondown" ondragstart="return false">
        <img class="levieroffup" id="levieroffup" src="../pic/levier_off_up.png" href = "levieroffup" ondragstart="return false">
        <img class="levieronup" id="levieronup" src="../pic/levier_on_up.png" href = "levieronup" ondragstart="return false">
        <div class="rectangle" id="rectangle"></div>
        <div class="menuconnection" id="menuconnection">
            <label class="textmdp" id="textmdp"> 
                Veuillez entrer le mot de passe 
            </label>
            <br>
            <input type="text" name="motdepasse" id="motdepasse" required class="motdepasse"/>
            <br>
            <button class="validation" id="validation" type="button">
                Validation
            </button>
            <a href="../index.php" target="_blank">
                <button class="pagemtl" id="pagemtl" type="button">
                    Invité
                </button>
            </a>
            <a href="bts.php" target="_blank">
                <button class="pagebts" id="pagebts" type="button">
                    BTS
                </button>
            </a>
            <label class="textssid" id="textssid"> 
                SSID : 
            </label>
            <input type="text" name="ssid" id="ssid" required class="ssid"/>
            <label class="textmdpres" id="textmdpres"> 
                Mot de passe : 
            </label>
            <input type="text" name="motdepassereseau" id="motdepassereseau" required class="motdepassereseau"/>
            <button class="connexionesp" id="connexionesp" type="button">
                Connexion à l'ESP32
            </button>
            <button class="deconnecter" id="deconnecter" type="button">
                Se déconnecter
            </button>
        </div>
        <script src="../js/script.js"></script>
    </body>
</html>

<?php
    require('datatrame.php');
?>