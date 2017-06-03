function getsecond(list){
	return (list.sort())[1];
}

let test=[1,4,2,6,3];
console.log(getsecond(test));