function reverseList(el) {
    let ul = document.getElementById(el);
    let li = document.getElementsByTagName("li");

    for (let i = li.length - 1; i >= 0; i--){
        ul.appendChild(li[i]);
    }
}