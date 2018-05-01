var A = [1, -1, 2, -2, 3];

var B = A.filter(function(number) {
    return number > 0;
});

var C = A.filter(function(number) {
    return number < 0;
});

console.log('Array B: ' + B);
console.log('Array C: ' + C);