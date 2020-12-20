export default class Tasks {
    constructor() {
        this.items = document.getElementsByClassName('tasks__items').item(0);
        this.box = document.getElementsByClassName('tasks__box').item(0);
        this.itemsArr = document.getElementsByClassName('tasks__item');
        this.arr = [];
        this.button = document.getElementsByClassName('tasks__button');
        this.noTasks = document.getElementById('no-tasks');
    }

    tasksButtonListener(e, element) {
        if(e.target.classList.contains('tasks__button')) {
            e.target.innerText = 'V';
            e.target.classList.remove('tasks__button');
            e.target.classList.add('pinned__button');
            element.box.appendChild(e.target.parentElement);
            const index = this.arr.indexOf(e.path[1].children[0].textContent);
            this.arr.splice(index, 1);   
        }
    }  
}

