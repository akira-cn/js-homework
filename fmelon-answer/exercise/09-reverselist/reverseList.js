function reverseList(){
    var s=document .getElementById ("reverseUl");
    var ss=new Array();
    for (var i=0;i<s.childNodes.length;i++){
        ss[i]=s.childNodes[i].innerHTML;
    }
    for (var i=0;i<ss.length;i++){
        s.childNodes[i].innerHTML=ss[ss.length-1-i];
    }
}	