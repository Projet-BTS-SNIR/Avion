<!DOCTYPE html>

<html>
    <head>
        <title>
            Projet BTS
        </title>
        <link href="css/style.css" rel="stylesheet"/>
        <link href="css/styles.css" rel="stylesheet"/>
        <meta meta name="viewport" content="width=device-width, user-scalable=no" charset="utf-8"/>
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
            <a href="index.php" target="_blank">
                <button class="pagemtl" id="pagemtl" type="button">
                    Invité
                </button>
            </a>
            <a href="page/bts.php" target="_blank">
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
        <div class="terminal">
            <p class="commande">
                Ici s'affiche les commandes de l'avion
            </p>
        </div>
        <div class="vueavion">
            
        </div>
        <script src="js/scripts.js"></script>
    </body>
</html>