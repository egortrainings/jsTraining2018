var arr = [ 1, 2, 1, 2, 3.14, 4, 2, 1];

var valuesCount = arr.reduce(function (uniqueValues, value) {
    uniqueValues[value] = (uniqueValues[value] || 0 ) + 1;
    return uniqueValues;
}, {});
console.log(valuesCount);