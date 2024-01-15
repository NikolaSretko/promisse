function warteUndGeneriere(time) {
    return new Promise((resolve,) => {
        if (typeof time !== "number" || isNaN(time) || time < 0) {
            reject(new Error(`Fehler ungülige eingabe `))
            return;
        }
        setTimeout(() => {
            const zufallsZahl = Math.floor(Math.random() * 1000) + 1;
            resolve(zufallsZahl)
        }, time)
    });
}
// Promise.all() verwenden, um mehrere Instanzen der Funktion parallel auszuführen
Promise.all([
    warteUndGeneriere(1000),
    warteUndGeneriere(3000),
])// in jedem fall erst nach 3 sek
    .then(result => {
        console.log(`Ergebniss: ${result[0]} und ${result[1]}`);
        console.log(result);
    }).catch(err => {
        console.error(`Fehler: ${err}`);
    });