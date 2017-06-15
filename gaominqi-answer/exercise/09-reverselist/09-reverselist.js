function reverseList(el) 
{
    let dataList=list.childNodes;//let dataList=document.querySelectorAll('#list li');
    dataList=Array.from(dataList).reverse();
    //list.innerHTML=' ';
    dataList.forEach(item=>list.childNodes(item));
}