var a = Number(prompt("Input a number:"));
while(1==1){
	if ((a%2)==0){
		alert("Even number!");
	}
	else if (((a-1)%2)==0){
		alert("Odd number!");
	}
	else{
		alert("Not int!");
	}
	a = Number(prompt("Input a number:"));
}
