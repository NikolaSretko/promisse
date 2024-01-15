// Funktion ume ein Promise zurück zu geben 
function promiseZahl(zahl) {
    return new Promise((resolve) => {
        resolve(zahl * zahl);
    })
}
// Funktion die die erste drei mal aufruft 
function wiederholungMulti(startZahl) {
    promiseZahl(startZahl)
        .then(result1 => {
            console.log(`Erstes Ergebnis: ${result1}`);
            return promiseZahl(result1);
        })
        .then(result2 => {
            console.log(`Zweites Ergebnis: ${result2}`);
            return promiseZahl(result2);
        })
        .then(result3 => {
            console.log(`Drittes Ergebnis: ${result3}`);
            return promiseZahl(result3);
        })
        .catch(err => {
            console.log(`Ein fehler ist aufgetrete: ${err}`);
        });
}
//Funktions aufruf

wiederholungMulti(3)