var flag = {
    error : false,
    warning : false,
    info : false
}
var color = {
    error : 'red',
    warning : 'orange',
    info : 'green'
}


var ul = document.getElementById('list');
/////////////////////////API
function refresh(ul){//刷新状态
    ul.childNodes.forEach(li=>{
        for (let elclassname in flag){
            if (li.className == elclassname && flag[elclassname] === true){
                li.firstChild.style.backgroundColor = 'black';
                li.firstChild.style.color = 'white';
            }
            else if (li.className == elclassname && flag[elclassname] === false){
                li.firstChild.style.backgroundColor = '';
                li.firstChild.style.color = color[li.className];
            }
        }
    })
}

function changecolor(el){//改变颜色
    if (el.tagName === 'A'){
        for (let elclassname in flag){
            if (elclassname === el.parentNode.className){
                flag[elclassname] = !flag[elclassname];
            }
        }
    }
    refresh(ul)
}
function backcolor(){//还原颜色
    for (let elclassname in flag){
        flag[elclassname] = false;
    }
    refresh(ul);
}

///////////////////////////////控制流
ul.addEventListener('click',evt=>{
    let el = evt.target;
    changecolor(el);
    evt.stopPropagation();
})

document.addEventListener('click',evt=>{
    backcolor();
})
