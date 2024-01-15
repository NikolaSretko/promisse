function zufallsZahlPromise() {
    return new Promise((resolve, reject) => {
        let zufallsZahl = Math.floor(Math.random() * 10) + 1;
        if (zufallsZahl < 6) {
            reject(zufallsZahl);
        } else {
            resolve(zufallsZahl);
        }
    })
}

zufallsZahlPromise()
    .then(zahl => {
        console.log(`Erfolg! Die Zahl ist ${zahl}`);
    }).catch(zahl => {
        console.error(`Abgelehnt deine Zahl war ${zahl}`);
    })