const sum = (a,b) => {
    return a+b
}

console.log(sum(14,9));

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInEuro = valueInDollar / 1.2;
    let valueInYen = valueInEuro * 127.9;
    return valueInYen

}

const fromYenToPound = function(valueInYen){
    let valueInEuro = valueInYen / 127.9;
    let valueIPound = valueInEuro * 0.8;
    return valueIPound
}

console.log(fromYenToPound(1));
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


