# Bachelorarbeit - Implementationsdokumentation

Repository für den Webserver verfügbar unter https://github.com/marioschmidt94/bachelorthesis

## Voraussetzungen Software
### Android App
* Unity3d _Version: 2017.2.0f3_ verwendet unter macOS High Sierra Version 10.13.2
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

## Informationen zur Architektur
### Android App
Um das Video mit Hilfe der Controller bewegen zu können wurden die folgenden beiden Skripte aus http://lwivs38.gm.fh-koeln.de/students/MansoorRahmati/index.php übernommen:
* ButtonEventHandler
* ButtonEvents
* Touchgesten werden mit Hilfe des LeanTouch Assets adressiert

Um auf die Cloud Recognition Funktionen zurückgreifen zu können werden der ``CloudHandler`` und der ``VideoController`` aus der Vuforia Dokumentation übernommen. 

Die Interaktion mit dem Webserver findet über den ``ServerController`` statt. Der ``ServerController`` enthält Post Methoden für die Registrierung und Anmeldung beim Webserver.

Beim Zugriff auf den Webserver werden alle VideoURLs des Benutzers in einer Array Liste gespeichert. Vom ``VideoManager`` wird auf diese Array Liste zugegriffen. Die ``ChangeVideo()`` Funktion wird über einen Button aufgerufen, wodurch über die Array Liste iteriert werden kann.

Um die Initialisierung des Vuforia Frameworks zu Beginn jeder einzelnen Szene zu verhindern, wird der Aufruf der Vuforia Funktionalitäten im ``NoARPlease`` Skript verhindert. 

Das Wechseln einer Szene, das Schließen der Applikation, das Anzeigen und Verstecken von Elementen und das Öffnen einer Website erfolgen über den ``InputManager``

Die Szenen müssen in nummerierter Reihenfolge in den BuildSettings hinzugefügt werden, wobei die erste Szene die LoginSzene ist.

### Webserver
* Import aller Module und Routen in [app.js](app.js)
* Routen befinden sich im Ordner [routes](routes)
  * In [users.js](/routes/users.js) wird Anmeldung, Registration und Abmeldung vollzogen
  * In [videos.js](/routes/videos.js) wird das Hochladen der Videolinks adressiert
* Datenbankmodelle, sowie Funktionen sind im Ordner [models](models) zu finden
* [public](public) enthält stylesheets und Bootstrap Funktionen
* Layouts sind im Ordner [views](views) zu finden

