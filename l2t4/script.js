function isAnagram (s1, s2) {
    s1 = s1.split('').sort().join('');
    s2 = s2.split('').sort().join(''); 
return (s1 === s2);
}

console.log(isAnagram('melon','lemon'));