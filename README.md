
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



## License

[MIT](https://choosealicense.com/licenses/mit/)

