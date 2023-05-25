/*
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };
*/

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// funcion para convertir de euro a dolar

const fromEuroToDollar = function (euro){
    return euro * oneEuroIs.USD  ;
}

const fromDollarToYen = function (dollar){
    return (oneEuroIs.JPY / oneEuroIs.USD) * dollar  ;
}

const fromYenToPound = function (yen){
    return (oneEuroIs.GBP / oneEuroIs.JPY) * yen ;
}


module.exports = { fromEuroToDollar,fromDollarToYen,fromYenToPound };
