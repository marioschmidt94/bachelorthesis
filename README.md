# Bachelorarbeit - Implementationsdokumentation

## Voraussetzungen Software
### Android App
* Unity3d _Version: 2017.2.0f3_
* Vuforia _Version: 6.5.22_
* Verwendete IDE: Visual Studio Community _Version 7.3_

### Webserver
* node.js _Version: 6.11.0_
* MongoDB _Version: _3.4.5_
* Verwendete Module: Siehe [package.json](package.json)

### Test / Debugging
* Applikation getestet auf Samsung Galaxy NOTE 10.1 SM-P600 _Android Version 5.1.1_
* Web-Interface getestet mit Safari _Version 11.0.2_

## Installationsanleitung

**Die Verbindung kann zum Webserver kann auschließlich aus dem Netz der TH Köln erfolgen.**

Zum Testen der mobilen Applikation die FinalBuild.apk auf einem Testgerät installieren, Testgerät muss sich im Netz der TH Köln befinden.
Webserver ist erreichbar unter: http://lwivs16.gm.fh-koeln.de:3000

Folgende Schritte bei der lokalen Installation des Webservers einhalten:
1. Repository importieren
2. Alle notwendigen Module installieren mit ``npm install``
3. MongoDB starten über ``mongod``
4. Server starten über ``npm start`` oder ``nodemon start``
5. Abruf des Servers unter http://localhost:3000

