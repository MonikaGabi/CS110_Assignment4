function gcd(a, b) {

    while ((a % b) > 0)  {
        R = a % b;
        a = b;
        b = R;
      }
      return b;
}
console.log(gcd(25, 30));



function lcm(x, y) {
    let product=x*y;
    let gcd1 = gcd(x, y);
    lcm = product/gcd1;
}
console.log(lcm);
