
function reverseList() {
       var s=document.getElementsByTagName("li");
       var a=new Array();
       console.log(s.length);
       for (var i=0;i<s.length;i++){
          a[i]=s[i].innerHTML;
       }
       for (var i=0;i<a.length;i++){
         s[i].innerHTML=a[a.length-i-1];
       }
     }
	// body...
