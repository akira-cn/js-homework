let  mli = document.getElementById('list');
let  merror = document.getElementsByClassName('error');
let  mwarning = document.getElementsByClassName('warning');
let  minfo = document.getElementsByClassName('info');
let n = 0;
document.styleSheets[document.styleSheets.length-1].addRule('#list li.att a','background-color:black; color:white');

for(let i = 0;i<merror.length;i++)
{
	merror[i].addEventListener('click',function(evt)
          {if(n==0)
          	{for(let j =0 ;j<merror.length;j++)
          		{merror[j].classList.toggle('att');}
          		evt.stopPropagation();
          		n=1;
          	}
          })

};

for(let i = 0;i<mwarning.length;i++)
{
	mwarning[i].addEventListener('click',function(evt)
          {if(n==0)
          	{for(let j =0 ;j<mwarning.length;j++)
          		{mwarning[j].classList.toggle('att');}
          		evt.stopPropagation();
          		n=2;
          	}
          })

};

for(let i = 0;i<minfo.length;i++)
{
	minfo[i].addEventListener('click',function(evt)
          {if(n==0)
          	{for(let j =0 ;j<minfo.length;j++)
          		{minfo[j].classList.toggle('att');}
          		evt.stopPropagation();
          		n=3;
          	}
          })

};

window.addEventListener('click',function()
{
	for(let i =0; i<9;i++)
	{
		mli.children[i].classList.remove('att');
		n=0;
	}
})