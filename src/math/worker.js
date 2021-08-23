/**
 * Checks if number is prime
 * @param n number
 */
 export function isPrime(n) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) {
        return false;
      }
     }
    
    return n > 1;
}

/**
 * Gets largest prime nubmer between two numbers exclusive
 * @param start start nubmer
 * @param end end number
 */
 export function getLargestPrimeNubmerBetween(
    start, end
  ) {
    // Start number is always odd
    let i = start % 2 === 0 ? start + 1 : start + 2;
  
    // Max prime number we found
    let pn = null;
  
    while (i < end) {
      if (isPrime(i)) {
        pn = i;
      }
  
      i += 2;
    }
  
    return pn;
  }
  
  export function calculate(
    a,b
  ) {
    return {
      sum: a+b,
      division: a/b,
      remainder: a%b,
      hpn: getLargestPrimeNubmerBetween(a,b),

      operands: {
        first: a,
        second: b
      },
    }
  }