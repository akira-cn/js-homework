function getSecond(arr){
    var arr1=arr.sort();
    return arr1[arr1.length-2];
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
alert("The second largest number is:"+getSecond(n));