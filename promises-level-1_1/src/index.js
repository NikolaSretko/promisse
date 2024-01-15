function verdoppelZahl(zahl) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(zahl * 2)
        }, 2000)
    });
}

//Beispiel
verdoppelZahl(5)
    .then(result => {
        console.log(`Ergebniss: ${result}`);
    }).catch(err => {
        console.error(`Ein fehler ist aufgetreten: ${err}`);
    });