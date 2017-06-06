//el=ul;
var reverseList = function(el) {
    var li = el.getElementsByTagName("li");
    for(var i = li.length-1; i > -1; i--){
        el.appendChild(li[i]);
    }
}
