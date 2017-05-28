
function min233(arrayobj){
	var minnum = 10000000;
  	for(var i=0; i<arrayobj.length; i++){
  		if(arrayobj[i] < minnum)
  			minnum = arrayobj[i];
  	}
  	return minnum;
}

var a = [2,-1,22,3,4];
console.log(min233(a));