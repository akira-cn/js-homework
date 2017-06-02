function reverse(str){
var str1="";
  for(var i=0;i<str.length;i++){
    str1+=str.charAt(str.length-i-1);
  }
  document.write("原字符串为："+str+"<br />"+"反转后为："+str1);
  console.log("原字符串为："+str+" "+"反转后为："+str1);
}
