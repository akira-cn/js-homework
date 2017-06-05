function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj, cls) {
    if (hasClass(obj, cls)) {
        removeClass(obj, cls);
    } else {
        addClass(obj, cls);
    }
}
const lists = document.getElementById("list");
const items = lists.getElementsByTagName('li');

Array.from(items).forEach(item => {
    item.addEventListener('click', evt => {
        let className = item.className
        for (let i = 0; i < items.length; i++) {
            if (items[i].className == className) {
                addClass(items[i], 'chicked');
            } else { removeClass(items[i], 'chicked'); }
        }
    });
});

document.body.addEventListener('click', a => {
    for (let i = 0; i < items.length; i++) {
        removeClass(items[i], 'chicked');
    }
}, true)