function minimum(){
    var min = arguments[0];
    for (var i=1; i<arguments.length; i++) {
      if(min > arguments[i]){
          min = arguments[i];
      }
    return min;
    }
}

var n=new Array();
var a;
var s=0;
do {
    s = prompt("Input a number:");
    a = parseFloat(s);
    if (a!=s)
    	break;
    n.push(a);
} while(1==1);
alert("The minimum is:"+minimum(...n));

