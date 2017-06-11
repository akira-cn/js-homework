const mKey = 'Array';
var th = document.getElementsByClassName('thumbs_up');
document.styleSheets[document.styleSheets.length-1].addRule('.change:after','content:"[已赞]";margin-right:10px;color:red');
if(!!localStorage.getItem(mKey)){
  var b = localStorage.getItem(mKey);
  var c = b.split(',');
  var a =[];
  for(let i in c)
    {
      a[i]=parseInt(c[i]);
    }
}
else{
  var a=[];
}

for(let i in a)
  {
    th[a[i]].classList.add('change');
  }

for(var i =0;i<th.length;i++){
  (function(i){
    th[i].addEventListener('click',function(evt){
     if(a.indexOf(i)<0)
                       { th[i].classList.add('change');
                       console.log(i);
                        a.push(i);
                        localStorage.setItem(mKey,a.toString());
                       }

    })
  })(i);
}
//localStorage.clear();
