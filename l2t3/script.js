const splitToPosAndNeg = arr => {
    
    let positiveArr = arr.filter(number => number > 0);
    
    let negativeArr = arr.filter(number => number < 0);

    console.log(`Array B positive: ${positiveArr}`);
    console.log(`Array C negative: ${negativeArr}`);
}

const countArrValues = arr => {
    let valuesCount = arr.reduce((uniqueValues, value) => {
    uniqueValues[value] = (uniqueValues[value] || 0 ) + 1;
    return uniqueValues;
    }, {});
    
    console.log(valuesCount);
}

let arr = [3.14, 2, 1, -1, 2, -2, 1, 3, 4, 1];

splitToPosAndNeg(arr);
countArrValues(arr);