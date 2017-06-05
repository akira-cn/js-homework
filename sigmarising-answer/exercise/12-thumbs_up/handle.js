function clearing() {
    let list = document.getElementsByTagName("a");
    for (let i = 0; i < list.length; i++){
        let arr = list[i].className.split(' ');
        list[i].className = arr[0];
    }
}

function init() {
    let str = localStorage.getItem("No");
    if (str == null)
        str = "";    
    let list_item = document.getElementsByTagName("a");
    for (let i = 0; i < str.length; i++){

        list_item[parseInt(str[i])].className += " ok";
    }
}

document.getElementsByTagName("button")[0].addEventListener("click", evt => {
    localStorage.clear();
    clearing();
});


init();
let list_item = document.getElementsByTagName("a");
for (let i = 0; i < list_item.length; i++){
    list_item[i].addEventListener("click", evt => {
        list_item[i].className += " ok";

        let str = localStorage.getItem("No");
        if (str == null)
            str = "";   

        str = str + i.toString();

        localStorage.setItem("No", str);
    }, true);
}