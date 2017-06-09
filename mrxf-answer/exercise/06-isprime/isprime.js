function isPrime(n){
  for(let i = 2; i<= Math.sqrt(n);i++){
    if(n%i == 0){
      return false;
    }
  }
  return true;
}

/*
 * Test 
*/

console.assert(isPrime(6)===false,'6 is not a prime number');
console.assert(isPrime(10014659) === true, '109 is a prime number');
