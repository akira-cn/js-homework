const btn = document.querySelector('button');
const list = document.querySelector('ul');
const items = list.getElementsByTagName('li');

btn.addEventListener('click', evt => {
    let item = document.createElement('li');

    item.innerHTML = `${items.length + 1}`;
    list.appendChild(item);
});

Array.from(items).forEach(item => {
    item.addEventListener('click', evt => {
        evt.target.className = evt.target.className ?
            '' : 'selected';
    });
});