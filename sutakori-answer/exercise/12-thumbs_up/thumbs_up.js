list.addEventListener('click',evt=>{
    if(evt.target && evt.target.nodeName=='A'){
        evt.target.className='thumbs_up--selected';
    }
});
