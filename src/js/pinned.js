export default class Pinned {
    constructor() {
        this.items = document.getElementsByClassName('pinned__items').item(0);
        this.box = document.getElementsByClassName('pinned__box').item(0);
        this.noPinned = document.getElementById('no-pinned');
    }

    pinnedButtonListener(e, element) {
        if(e.target.classList.contains('pinned__button')) {
            e.target.innerText = '';
            e.target.classList.remove('pinned__button');
            e.target.classList.add('tasks__button');
            element.box.appendChild(e.target.parentElement);
            const value = e.path[1].children[0].textContent;
            element.arr.push(value);
        }
    }
}