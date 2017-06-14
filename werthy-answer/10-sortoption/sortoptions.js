let select=document.getElementById('sel');
let option=select.getElementsByTagName('option');
let btn1=document.getElementById('up');
let btn2=document.getElementById('down');

btn1.onclick=function
{
	let temp='';
	for(let i=0;i<option.length-1;i++)
	{
		for(let j=i;j<option.length;j++)
		{
			if(option[i].innerHtml>option[j].innerHtml)
			{
				temp=option[j].innerHtml;
				option[j].innerHtml=option[i].innerHtml;
				option[i].innerHtml=temp;
			}
		}
	}
}
btn2.onclick=function()
{
    let temp='';
	for(let i=0;i<option.length-1;i++)
	{
		for(let j=i;j<option.length;j++)
		{
			if(option[i].innerHTML<option[j].innerHTML)
			{
				temp=option[j].innerHTML;
				option[j].innerHTML=option[i].innerHTML;
				option[i].innerHTML=temp;
			}
		}
	} 
}