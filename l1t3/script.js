var n=4;

if (n === 0){
    console.log('n cannot be 0');
} else {
    var s=0;
    var N=Math.abs(n);
    for (i = 1; i <= N; i++) {
        if (n < 0) {
            s = s - 1/i;            
        } else {
            s = s + 1/i;            
        }
    }
    console.log(s);    
}