var qrcode = require('qrcode-terminal');
var myLocalIP = require('my-local-ip');
//var ip = myLocalIP();
var ip = '172.16.4.3';
console.log('')
console.log('')
console.log('')
console.log('Home page del gioco')
console.log('');
qrcode.generate('http://' + ip + ':8080/index.html', {small: true});

//primo indizio
console.log('')
console.log('')
console.log('')
console.log('QR code per il primo indizio')
console.log('');
qrcode.generate('http://' + ip + ':8080/scan.html?indizio=1', {small: true});
console.log('')
console.log('')
console.log('')
console.log('QR code per il secondo indizio')
console.log('');
//secondo indizio
qrcode.generate('http://' + ip + ':8080/scan.html?indizio=3', {small: true});
console.log('')
console.log('')
console.log('')
console.log('QR code per il terzo indizio')
console.log('');

//terzo indizio
qrcode.generate('http://' + ip + ':8080/scan.html?indizio=4', {small: true})