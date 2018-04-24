var n = 3;
var isPrime = true;

if (n < 0) {
    console.log('Negative integers can not be prime');
} else {
    switch (n) {
    case 0:
        isPrime = false;
        break;

    case 1: 
        isPrime = false;
        break;
        
    case 2: 
        isPrime = true;
        break;
        
    default: {
        var sqrtN = Math.sqrt(n);
        for (var i = 2; i < sqrtN + 1; i++){
            if ((n % i) === 0) {
                isPrime = false;
                break;
            }
        }
    }
}
    console.log(n + ' is prime? ' + isPrime);
}