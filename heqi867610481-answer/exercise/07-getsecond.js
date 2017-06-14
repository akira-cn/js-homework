function getSecond(arr){

	var first;

	var second;

	var len = arr.length;

	if(len<2){

		return "error";

	}else{



		if(arr[0]>arr[1]){

			first = arr[0];

			second = arr[1];

		}else{

			first = arr[1];

			second = arr[0];

		}

		

	}

	var i = 0;

	for(i=2;i<len;i++){

		

		if(arr[i]>second){

			if(arr[i]>=first){

				second = first;

				first = arr[i];

			}else if(arr[i]<first){

				second = arr[i];

			}

		}

		

	}

	return second;

}







var arr = new Array();

arr = [1,3,5,4,2];

console.log(getSecond(arr));

arr = [7,7,2,4,2];

console.log(getSecond(arr));

arr = [0,-3,5,467,1];

console.log(getSecond(arr));

arr = [6,3,43,233,2];

console.log(getSecond(arr));

arr = [100,35,58,46,34,29];

console.log(getSecond(arr));

arr = [109,803,344];

console.log(getSecond(arr));