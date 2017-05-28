		var input;
			input=prompt("请输入数字");
			if(input%1!==0)
			{
				console.log("不是整数");
			}
			else
		{
				switch(input%2===0)
			{
		case true:
		console.log("偶数");
		break;
		case false:
		console.log("奇数");
		break;

			}
		}
			