list.addEventListener('click',evt=>{
    if(evt.target && evt.target.nodeName=='A'){
        errors=document.querySelectorAll('.'+evt.target.parentNode.className);
        Array.from(errors).forEach(item=>{
            item.className=item.className+"--selected";
        });
    }
});
