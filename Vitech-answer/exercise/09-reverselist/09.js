//----------------------------------\
//  Vitech(2015212149)的 js作业      |
//  https://github.com/liuzirui1122 |
//----------------------------------/
//
var reverseList = function(el) {
    //假设el为ul元素
    var li = el.getElementsByTagName("li");
    for(var i = li.length-1; i > -1; i--){
        el.appendChild(li[i]);
    }
}

//jquery版
var reverseList_jq = function(el) {
    //假设el为$(ul)
    var li = el.find("li");
    for(var i = li.length-1; i > -1; i--){
        el.append(li[i]);
    }
}