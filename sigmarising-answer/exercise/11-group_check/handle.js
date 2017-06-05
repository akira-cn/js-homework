function cliking() {
    let list = document.getElementsByTagName("li");
    for (let i = 0; i < list.length; i++){
        let arr = list[i].className.split(' ');
        list[i].className = arr[0];
    }
}

function change(className) {
    let aim = document.getElementsByClassName(className);
    for (let i = 0; i < aim.length; i++){
        aim[i].className += " selected";
    }    
}

document.body.addEventListener("click", evt => {
    cliking();
}, true);

let list_item = document.getElementsByTagName("li");
for (let i = 0; i < list_item.length; i++){
    list_item[i].addEventListener("click", evt => {
        change(list_item[i].className);
    }, true);
}