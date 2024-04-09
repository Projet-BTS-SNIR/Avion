#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClient.h>
#include <ArduinoJson.h>
#include <pwmWrite.h>

String ServeurName = "http://192.168.4.1:80/Avion/";
String trame;

JsonDocument doc;

Pwm pwm;

const char *ssid = "Avion";
const char *passphrase = "123456789";

IPAddress local_IP(192,168,4,22);
IPAddress gateway(192,168,4,254);
IPAddress subnet(255,255,255,0);

void setup()
{
  Serial.begin(115200);
  pinMode(12, OUTPUT);
  pinMode(22, OUTPUT);
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
    /*if (doc["light"]["ledwingright"] == true)
    {
      digitalWrite(12, HIGH);
    }
    else
    {
      digitalWrite(12, LOW);
    }*/
    /*if (doc["light"]["ledwingleft"] == true)
    {
      digitalWrite(22, HIGH);
    }
    else
    {
      digitalWrite(22, LOW);
    }*/
    if (doc["taxi"]["enable"] == true)
    {
      pwm.writeServo(22, 180);
      pwm.writeServo(12, 180);
    }
    else
    {
      pwm.writeServo(22, 0);
      pwm.writeServo(12, 0);
    }
  }
  else
  {
    Serial.print("Error code: ");
    Serial.println(httpResponseCode);
  }
  http.end();
}