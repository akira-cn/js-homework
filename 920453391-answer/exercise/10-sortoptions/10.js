
function sortSelect(el,flag) {
	var op = el.getElementsByTagName("option");
    var country = [];
    for (var i=0;i<op.length;i++) 
        country.push(op[i].innerHTML);
    el.innerHTML = "";
    country.sort();
    console.log(country);
    if(flag){
    	 for (var i=0;i<country.length;i++) {
        var opnew = document.createElement("option");
        opnew.innerHTML = country[i];
        el.appendChild(opnew);
   		}
    }
    else{
    	for (var i=country.length-1;i>-1;i--) {
        var opnew = document.createElement("option");
        opnew.innerHTML = country[i];
        el.appendChild(opnew);
   		}
    }
}