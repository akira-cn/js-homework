function Sort() {
    let options = document.getElementsByTagName('option');
    let values = [];

    for (var i = 0; i < options.length; i++)
        values.push(options[i].innerHTML);

    values.sort();
    for (var i = 0; i < options.length; i++)
        options[i].innerHTML = values[i];
}

function Sort_reverse() {
    let options = document.getElementsByTagName('option');
    let values = [];
    for (var i = 0; i < options.length; i++)
        values.push(options[i].innerHTML);
    values.sort().reverse();
    for (var i = 0; i < options.length; i++)
        options[i].innerHTML = values[i];
}
