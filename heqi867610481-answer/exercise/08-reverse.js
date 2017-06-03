
function reverse(str){

	var len = str.length;

	var i = 0

	var rstr = '';

	for(i = len-1; i >= 0;i--){

		rstr = rstr+str[i]; 

	}

	return rstr;

}



console.log(reverse('abcde'))