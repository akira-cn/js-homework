function AZ() {
    //  const a = document.getElementById('123');
    const a = document.getElementsByTagName('select');

    console.log(a[0].options.length);
};

function ZA() {
    const a = document.all('123')
    sort1(a);
};

function sort1(osel) {
    var length = osel.options.length;
    var arr = new Array;
    for (var i = 0; i < length; i++) {
        arr[i] = osel.options[i].text;

    }
    arr.sort();
    for (var i = 0; i < length; i++) {
        osel.options[i].text = arr[i];
    }
}
document.getElementsByTagName

function sort2(osel) {
    var length = osel.options.length;
    var arr = new Array;
    for (var i = 0; i < length; i++) {
        arr[i] = osel.options[i].text;

    }
    arr.sort();
    for (var i = 0; i < length; i++) {
        osel.options[length - 1 - i].text = arr[i];
    }
}