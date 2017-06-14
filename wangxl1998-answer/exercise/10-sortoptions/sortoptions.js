function up_Sort() {
    var option = document.getElementsByTagName('option');
    var a = [];
    for (var i = 0; i < option.length; i++){
       a.push(option[i].innerHTML);
    }
    a.sort();  //没有使用参数，将按字母顺序对数组中的元素进行排序
    for (var j = 0; j < a.length; j++){
      option[j].innerHTML = a[j];
    }
}

function down_Sort() {
    var option = document.getElementsByTagName('option');
    var a = [];
    for (var i = 0; i < option.length; i++){
       a.push(option[i].innerHTML);
    }
    var b = a.sort();
    a = b.reverse();
    for (var j = 0; j < a.length; j++){
      option[j].innerHTML = a[j];
    }
}
