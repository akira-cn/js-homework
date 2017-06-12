let list=document.querySelectorAll('ul>li');
for(let i=0;i<list.length/2;i++)
{
	let temp=list[i].innerHTML;
	list[i].innerHTML=list[list.length-i-1].innerHTML;
	list[list.length-i-1].innerHTML=temp;
}