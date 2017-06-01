function up(a, b) {
    return a > b;
}

function down(a, b) {
    return a < b;
}

function sort_AZ() {
    let op = document.getElementsByTagName("option");
    let a = [];
    for (let i = 0; i < op.length; i++){
        a.push(op[i].innerHTML);
    }
    a.sort(up);
    let sel = document.getElementById("select");
    sel.innerHTML = "";
    for (let i = 0; i < a.length; i++){
        let elem = document.createElement("option");
        elem.innerHTML = a[i];
        sel.appendChild(elem);
    }

}

function sort_ZA() {
    let op = document.getElementsByTagName("option");
    let a = [];
    for (let i = 0; i < op.length; i++){
        a.push(op[i].innerHTML);
    }
    a.sort(down);
    let sel = document.getElementById("select");
    sel.innerHTML = "";
    for (let i = 0; i < a.length; i++){
        let elem = document.createElement("option");
        elem.innerHTML = a[i];
        sel.appendChild(elem);
    }

}