function isprime(n){
  if(n>1){
    var i;
    for(i=2;i<n;i++){
      if(n%i ===  0){
        return false;
      }
    }
    if(i===n) return true;
  }
  else  return false;
}
