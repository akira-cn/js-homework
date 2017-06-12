function reverseList()
{
	var ul=document.getElementsByTagName('ul')[0];
	var	li=document.getElementsByTagName('li');
	for(var i=0;i<li.length;i++)
		ul.appendChild(li[li.length-1-i]);

}