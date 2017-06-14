//----------------------------------\
//  Vitech(2015212149)的 js作业      |
//  https://github.com/liuzirui1122 |
//----------------------------------/
//
var sortSelect = function(el,order) {
    
    //假设el为select
    var op = el.getElementsByTagName("option");
    var country = [];
    for (var i=0;i<op.length;i++) 
        country.push(op[i].innerHTML);
    el.innerHTML = "";
    country.sort(function(a,b){
        if (order) return a>b;
        return a<b;
    });
    for (var i=0;i<country.length;i++) {
        var opnew = document.createElement("option");
        opnew.innerHTML = country[i];
        el.appendChild(opnew);
    }
}

