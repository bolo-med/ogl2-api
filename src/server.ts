import serverInstance from './app';

const port: number = 3000;

serverInstance.listen(port, () => {
    console.log(`Uspjesno povezivanje sa veb-serverom!`);
}).on('error', err => {
    console.log('Doslo je do greske pri povezevanju na veb-server!');
});

// Ovako vise ne radi. Ne znam gdje pravim gresku. U prethodnom projektu radi.
// serverInstance.listen(3000, (err) => {
//     if (err) {
//         console.log('Greska prilikom pokretanja veb-servera!');
//     }
//     else {
//         console.log('Server je uspjesno pokrenut na portu 3000!');
//     }
// });

