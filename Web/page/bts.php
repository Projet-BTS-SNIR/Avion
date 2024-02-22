<!DOCTYPE html>

<?php header('Content-type: text/html; charset=UTF-8'); ?>

<?php
    $data = array(
        'light' => array(
            'ledwingleft' => false,
            'ledwingright' => false,
            'ledtaxi' => false,
            'ledaftstrobe' => false,
            'leddoubleflash' => false
        ),
        'wings' => array(
            'aileronright' => 0,
            'aileronleft' => 0
        ),
        'taxi' => array(
            'direction' => 0,
            'enable' => false
        ),
        'pales' => 0,
        'rudder' => 0,
        'elevator' => 0,
    );
    $options = array(
        'http' => array(
            'method' => 'POST',
            'header' => "Content-Type: application/json",
            'ignore_errors' => true,
            'timeout' =>  10,
            'content' => json_encode($data),
        ),
    );
    $context  = stream_context_create($options);
?>

<html>
    <head>
        <title>
            Projet BTS
        </title>
        <link href="../css/style.css" rel="stylesheet"/>
        <link href="../css/styles.css" rel="stylesheet"/>
        <meta meta name="viewport" content="width=device-width, user-scalable=no" charset="utf-8"/>
    </head>
    <body>
        <script src="../js/script.js"></script>
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
        <!-- <img class="affichage1" id="affichage1" src="../pic/csf1.png" href = "affichage1" ondragstart="return false"> -->
        <img class="rudderpedal" id="rudderpedal" src="../pic/rudder.png" href = "rudderpedal" ondragstart="return false">
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
    </body>
</html>