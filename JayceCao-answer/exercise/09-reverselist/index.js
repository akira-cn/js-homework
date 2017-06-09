function reverseList(el) {
    let values = [];
    for (var i = 0; i < el.length; i++)
        values.push(el[i].innerHTML);
    values.reverse();
    for (var i = 0; i < el.length; i++)
        el[i].innerHTML = values[i];
}
