function fibonacci(n){
	let seed = 1;
	return [...Array(n)].reduce(p => {
		let temp = p + seed; 
		seed = p;
		return temp;
	},0)
}
