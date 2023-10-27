
# Duomondo FullStack Demo

AR experience build with Angular, NETCore and SqlServer using Endymion Browser an Endymion library



## Features

- Register an account
- Collect clues finding Little Spirit


## Getting Started

For run demo you have to perform this step:   

1 - Download with your device (Android) the Endymion Browser apk scanning this qr code and clicking on "Download Beta"        
    (registration is required)   

![Endymion Browser](https://endymion.tech/endymion-address-qrcode-300x300.png)      



2 - Install Docker on your computer, download available here: [Docker Download](https://docs.docker.com/desktop/)

3 - open your computer firewall for 8080 tcp port   
        port 3001 tcp for backend communication     
        port 1414 tcp for connecto to database

for linux
```bash
    sudo ufw allow 8080
    sudo ufw allow 3001
    sudo ufw allow 1414
```
for windows using powershell with admin privilege
```powershell
netsh advfirewall firewall add rule name="duomondo-fullstack-demo" dir=in action=allow protocol=TCP localport=8080
netsh advfirewall firewall add rule name="duomondo-fullstack-backend" dir=in action=allow protocol=TCP localport=3001
netsh advfirewall firewall add rule name="duomondo-fullstack-database" dir=in action=allow protocol=TCP localport=1414
```
    
## Run Locally

Clone the project, go to the project directory, install dependencies and run demo

```bash
git clonehttps://github.com/EndymionDemo/duomondo-fullstack-demo.git
cd duomondo-fullstack-demo    
npm install   
npm run start   

```
Ensure that your smartphone and your computer are connected to same wifi/LAN        
And Finally scan QR Code that appear in terminal with Endymion Browser App and visualize assets


To stop demo    

```bash
  npm run stop
```

## Usage/Examples
In terminal will appear 4 QRCodes       
the first one is used to start application      
other ones is used to collect little spirits following clues.  

Here scan page that use Endymion library
```html
<!doctype html>
<html lang="it">
<head>
  <title>Scan</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="./assets/images/endymion-logo.png">
  <link rel="stylesheet" href="./assets/css/scan.css" />
  <script src="./assets/js/endymion.js"></script>
</head>
<body>
       
    <div class="button-container">
        <div id="button"    class="listen"></div>
        <div id="indietro"  class="indietro">Indietro</div>
    </div>
    <audio id="spiritelloVoice"></audio>
</body>
<script>


    window.onload = () =>{
        var listen = "Ascolta lo spiritello"
        var end = "Concludi"
        var animation = 1;
        var spiritelloVoice = document.getElementById('spiritelloVoice');
        var button = document.getElementById('button');
        var indietro = document.getElementById('indietro');

        
        var spiritello = endymion.loadAsset('assets/3D/spiritello.glb')
                        .setRotation(0, -195, 0)
                        .setScale(5)
                        .render();

        let params = (new URL(document.location)).searchParams;
        let indizio = params.get("indizio");


        switch(parseInt(indizio)){
            case 1:
                button.innerHTML = listen;
                animation = 1;
                spiritelloVoice.src = "./assets/audio/primo_indizio.mp3";
                break;
            case 2:
                button.innerHTML = listen;
                animation = 1;
                spiritelloVoice.src = "./assets/audio/secondo_indizio.mp3";
                break;
            case 3:
                button.innerHTML = listen;
                animation = 1;
                spiritelloVoice.src = "./assets/audio/terzo_indizio.mp3";
                break;
            case 4:
                button.innerHTML = end;
                animation = 2;
                spiritelloVoice.src = "./assets/audio/conclusione.mp3";
                break;

        }

        listenToSpirit = () =>{
            endymion.with(spiritello).playAnimation(animation).apply();
            spiritelloVoice.play();
        }

        button.addEventListener('click', listenToSpirit);
        indietro.addEventListener('click', (event)=>{
                    var id = JSON.parse(localStorage.getItem('user')).id;
                    var host = window.location.hostname;
                    var port = window.location.port;
                    var protocol = window.location.protocol;
                    let url = new URL('/collections/' + id, protocol + host + ':' + port);
                    window.location.assign(url);
        })
        
        spiritelloVoice.addEventListener('ended', ()=>{
            setTimeout(()=>{
               var jwt = localStorage.getItem('jwt');
               var id = JSON.parse(localStorage.getItem('user')).id;
                var host = window.location.hostname;
                var port = window.location.port;
                var portBackEnd = 3001;
                var protocol = window.location.protocol;
                let url = new URL('/api/collezione/registra/indizio', protocol + host + ':' + portBackEnd);
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + jwt
                    },
                    body: JSON.stringify({
                        UserId: id,
                        CollezioneId: 1,
                        IndizioId: parseInt(indizio)
                    })
                }).then(res => {
                })
                
            }, 1000)
        });
    }
</script>
</html>
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

