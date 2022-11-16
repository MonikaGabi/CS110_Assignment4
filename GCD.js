function gcd(a, b) {
    
  // a = Math.abs(a);  //The Math.abs() function returns the absolute value of a number
  // b = Math.abs(b);

  while ((a % b) > 0)  {
      R = a % b;
      a = b;
      b = R;
    }
    return b;
}
console.log(gcd(25, 30));