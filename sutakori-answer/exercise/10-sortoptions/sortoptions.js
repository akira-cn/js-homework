let items=document.querySelectorAll('select>option');

function sortNodeList(items,smallThan)
{
	for(let i=0;i<items.length;i++)
	{
		for(let j=1;j<items.length-i;j++)
		{
			if(smallThan(items[j].innerHTML,items[j-1].innerHTML))
			{
				let temp=items[j].innerHTML;
				items[j].innerHTML=items[j-1].innerHTML;
				items[j-1].innerHTML=temp;
			}
		}
	}
}

let buttons=document.querySelectorAll('button');

buttons[0].addEventListener('click',function(){
sortNodeList(items,function(i,j){return i<j;});
});

buttons[1].addEventListener('click',function(){
sortNodeList(items,function(i,j){return i>j;});
});