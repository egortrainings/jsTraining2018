function splitToPosAndNeg(arr) {
    
    var positiveArr = arr.filter(function(number) {
    return number > 0;
    });
    
    var negativeArr = arr.filter(function(number) {
    return number < 0;
    });

    console.log('Array B positive: ' + positiveArr);
    console.log('Array C negative: ' + negativeArr);
}

function countArrValues (arr) {
    var valuesCount = arr.reduce(function (uniqueValues, value) {
    uniqueValues[value] = (uniqueValues[value] || 0 ) + 1;
    return uniqueValues;
    }, {});
    
    console.log(valuesCount);
}

var arr = [3.14, 2, 1, -1, 2, -2, 1, 3, 4, 1];

splitToPosAndNeg(arr);
countArrValues(arr);