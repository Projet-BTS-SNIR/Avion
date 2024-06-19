#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClient.h>
#include <ArduinoJson.h>
#include <pwmWrite.h>

#define Taxi 32
#define DbFlshLgt 33
#define StrbLgtG 25
#define StrbLgtD 26
#define AftStrb 27
#define ElevatorG 5
#define ElevatorD 15
#define Flap 21
#define NavLgtG 13
#define NavLgtD 23
#define Rudder 18
#define Aileron 22
#define AftLG 4
#define FwdLgD 12
#define FwdLgG 19
#define DirFwdLg 14

String ServeurName = "http://192.168.4.1:80/Avion/"; // Définition de l'URL du serveur
String trame; // Déclaration d'une variable pour stocker la réponse du serveur (trame JSON)

JsonDocument doc;

Pwm pwm;

const char *ssid = "Avion";
const char *passphrase = "ESP@vi0n";

IPAddress local_IP(192,168,4,22);
IPAddress gateway(192,168,4,254);
IPAddress subnet(255,255,255,0);

void setup()
{
  Serial.begin(115200);
  pinMode(32, OUTPUT);
  pinMode(33, OUTPUT);  
  pinMode(25, OUTPUT);
  pinMode(26, OUTPUT);
  pinMode(27, OUTPUT);
  pinMode(15, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(19, OUTPUT);
  pinMode(18, OUTPUT);
  pinMode(23, OUTPUT);
  pinMode(22, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(14, OUTPUT);
  pinMode(13, OUTPUT);

  Serial.println();
  Serial.print("Setting soft-AP configuration ... ");
  Serial.println(WiFi.softAPConfig(local_IP, gateway, subnet) ? "Ready" : "Failed!");
  Serial.print("Setting soft-AP ... ");
  Serial.println(WiFi.softAP(ssid,passphrase) ? "Ready" : "Failed!");
  WiFi.softAP(ssid, passphrase);     
  Serial.print("Soft-AP IP address = ");
  Serial.println(WiFi.softAPIP());
}

void loop() 
{
  Serial.print("[Server Connected] ");
  Serial.println(WiFi.softAPIP());
  delay(500);  

  HTTPClient http; 

  String serverPath = ServeurName + "trame.json";  
  
  http.begin(serverPath.c_str()); 

  int httpResponseCode = http.GET();

  if(httpResponseCode > 0) 
  {
    trame = http.getString();     

    deserializeJson(doc, trame);  

    if (doc["light"]["strobelight"] == true)
   {
       digitalWrite(StrbLgtG, HIGH);
       digitalWrite(StrbLgtD, HIGH);
    }
    else
    {

      digitalWrite(StrbLgtG, LOW);
      digitalWrite(StrbLgtD, LOW);
    }



    if (doc["light"]["navelight"] == true)
    {  
		    digitalWrite(NavLgtG, HIGH);
		    digitalWrite(NavLgtD, HIGH);
        delay(500);
		    digitalWrite(NavLgtG, LOW);
		    digitalWrite(NavLgtD, LOW);
        delay(500);
    }
    else
    {
      digitalWrite(NavLgtG, LOW);
      digitalWrite(NavLgtD, LOW);
    }


    if (doc["light"]["ledtaxi"] == true)
    {
        digitalWrite(Taxi, HIGH);      
    }
    else
    {
        digitalWrite(Taxi, LOW);  
    }

    if (doc["light"]["leddoubleflash"] == true)
    {
        digitalWrite(DbFlshLgt, HIGH);      
    }
    else
    {
        digitalWrite(DbFlshLgt, LOW);
  
    }

    if (doc["light"]["ledaftstrobe"] == true)
    {
        digitalWrite(AftStrb, HIGH);      
    }
    else
    {
        digitalWrite(AftStrb, LOW);
  
    }





  if(doc["taxi"]["enable"] == true)
  {
      pwm.writeServo(AftLG, 170);
      pwm.writeServo(FwdLgG, 170); 
      pwm.writeServo(FwdLgD, 170); 


  }
  else
  {
      pwm.writeServo(AftLG, 0);
      pwm.writeServo(FwdLgD, 0);
      pwm.writeServo(FwdLgG, 0); 

  }




    if(doc["flaps"] == 0)
    {
      pwm.writeServo(Flap, 10); 
    }
    else if(doc["flaps"] == 90)
    {
      pwm.writeServo(Flap, 90); 
    }
    else if(doc["flaps"] == 180)
    {
      pwm.writeServo(Flap, 170); 
    }


    if (doc.containsKey("elevator")) {
      int elevatorValue = doc["elevator"];
      int transformedElevatorValue = map(elevatorValue, 0, 100, 0, 180);
      pwm.writeServo(ElevatorG, transformedElevatorValue);
      pwm.writeServo(ElevatorD, transformedElevatorValue);
    }

    if (doc.containsKey("taxi") && doc["taxi"].containsKey("direction")) {
      int rudderAngle = doc["rudder"];
      int DirAngle = doc["taxi"]["direction"];
      if(DirAngle == 100)
      {
        pwm.writeServo(Rudder, 170);
        pwm.writeServo(DirFwdLg, 170);
      }
      else if (DirAngle == 0)
      {
        pwm.writeServo(Rudder, 10);
        pwm.writeServo(DirFwdLg, 10);
      }
      else
      {
        int transformRudderAngle = map(rudderAngle, 0, 100, 0, 180);
        int transformDirAngle = map(DirAngle, 0, 100, 0, 180);
        pwm.writeServo(Rudder, transformRudderAngle);
        pwm.writeServo(DirFwdLg, transformDirAngle);
      }

    }
    if (doc["wings"].containsKey("aileronright")) {
      int Aile = doc["wings"]["aileronright"];
      if(Aile > 161)
      {
      pwm.writeServo(Aileron, 160);
      }
      else if (Aile < 19)
      {
      pwm.writeServo(Aileron, 20);
      }
      else
      {
        pwm.writeServo(Aileron, Aile);
      }
    }
  }
  else
  {
    Serial.print("Error code: ");
    Serial.println(httpResponseCode);
  }
  http.end();
}