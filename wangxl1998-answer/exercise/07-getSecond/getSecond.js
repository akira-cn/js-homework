function getSecond(n){
  var second = n[1];
  var max = n[0];
  for(var i = 0;i < n.length; i++){
    if(n[i]> max){
      second = max;
      max = n[i];
    }else{
      if(n[i]>second){
        second = n[i];
      }
    }
  }
    return second;
}
