export default class Input {
    constructor() {
        this.form = document.getElementsByClassName('form').item(0);
        this.text = document.getElementById('text');
    }

    submitListener(e, tasks) {
        e.preventDefault();
        if(this.text.value === 'Give the task') this.text.value = '';
        if(this.text.value) {
            this.createEl(tasks.box, this.text.value);
            tasks.arr.push(this.text.value);
            this.text.value = '';
        } else {
            this.text.value = 'Give the task'
        }                       
    }
   
    createEl(items, value) {
        items.insertAdjacentHTML('beforeend',`
            <li class='tasks__item'>
                <span class='tasks__name'>${value}</span>
                <button class='tasks__button button'>
            </li>
        `);
    }

    filter(tasks) { 
        tasks.box.innerHTML = '';
        const taskToDisplay = [];
        tasks.arr.forEach(el => {
            if(el.toLowerCase().indexOf(this.text.value.toLowerCase()) !== -1) taskToDisplay.push(el);
        });
        
        if(taskToDisplay.length === 0) 
            return tasks.arr.forEach(el => this.createEl(tasks.box, el));
        
        taskToDisplay.forEach(el => this.createEl(tasks.box, el));
    }
}