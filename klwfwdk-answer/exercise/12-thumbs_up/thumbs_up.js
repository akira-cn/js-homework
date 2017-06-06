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

var counts = window.localStorage;
let items = document.getElementsByTagName('a');
const storageKey = 'count';

function getCounts() {
    return counts.getItem(storageKey).split(",");
}

function getCount(n) {
    return counts.getItem(storageKey).split(",")[n];
}

function clearCount() {
    let arr = new Array(items.length);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }
    counts.setItem(storageKey, arr.join(","));
}

function chageCount(b) {
    let arr = getCounts();
    arr[b] = 1;
    counts.setItem(storageKey, arr.join(","));
}
if (counts.getItem(storageKey) === null) {
    let arr = new Array(items.length);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = 0;
    }
    counts.setItem(storageKey, arr.join(","));
}
Array.from(items).forEach(function(item, index) {
    item.addEventListener('click', evt => {
        chageCount(index);
        addClass(item, 'chicked');
    })
}, false);


for (let i = 0; i < items.length; i++) {
    if (getCount(i) == 1) {
        addClass(items[i], 'chicked');
    }
}

removeStorage.onclick = function() {
    for (let i = 0; i < items.length; i++) {
        let arr = new Array(items.length);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = 0;
        }
        counts.setItem(storageKey, arr.join(","));
        removeClass(items[i], 'chicked');
    }
}