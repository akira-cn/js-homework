//function demo(){
function reverse(str) {
	var str2="";
	for(var i=0;i<str.length;i++){
         str2+=str.charAt(str.length-i-1);
    }
    window.alert(str2);
}
 //  var str="abcde";
  // reverse(str);
//}