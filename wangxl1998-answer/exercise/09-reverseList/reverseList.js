function reverseList(el){
  var len = el.length;
  for(var i=0;i<len/2;i++){
    var element = el[i].innerHTML;
    el[i].innerHTML = el[len-i-1].innerHTML;
    el[len-i-1].innerHTML = element;
  }
}
