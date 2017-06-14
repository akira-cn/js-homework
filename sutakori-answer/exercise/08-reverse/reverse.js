function reverse(str){
	let ret='';
	for(let i=0;i<str.length;i++){
		ret=str[i]+ret;
	}
	return ret;
}

let s='asffdg';
console.log(s);
console.log(reverse(s));