//2 roots

var a = 1;
var b = -8;
var c = 12;


// 0 roots
/*
var a = 5;
var b = 3;
var c = 7;
*/

// 1 root
/*
var a = 1;
var b = -6;
var c = 9;
*/

var D = (b * b) - (4 * a * c);
console.log(D);

switch(true) {
    case (D < 0):
        console.log('Quadratic equation has no roots');
        break;
    case (D === 0):
        var x = (-b) / (2 * a);
        console.log('Quadratic equation has 1 root: x = ' + x);
        break;
    case (D > 0):
        sqrtD=Math.sqrt(D);
        var x1 = (-b) - sqrtD / (2 * a);
        var x2 = (-b) + sqrtD / (2 * a);
        console.log('Quadratic equation has 2 roots: x1 = ' + x1 + ', x2 = ' + x2);
        break;
}



