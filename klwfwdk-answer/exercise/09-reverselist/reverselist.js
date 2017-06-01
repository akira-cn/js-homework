function reverseList(el) {
    var el1 = document.getElementById(el);
    var li = el1.getElementsByTagName('li');
    var n = li.length;
    for (var i = n - 1; n > -1; i--) {
        el1.appendChild(li[i]);
    }
}