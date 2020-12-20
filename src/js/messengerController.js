export default class MessengerController {
    constructor(pinned, tasks, input) {
        this.input = input;
        this.pinned = pinned;
        this.tasks = tasks;
    }

    init() {
        this.input.text.addEventListener('keyup', () => this.input.filter(this.tasks));
        
        this.input.form.addEventListener('submit', e => {
            this.input.submitListener(e, this.tasks);
            this.showOrHidden();
        });
        
        this.tasks.items.addEventListener('click', e => {
            this.tasks.tasksButtonListener(e, this.pinned);
            this.showOrHidden();
        });

        this.pinned.items.addEventListener('click', e => {
            this.pinned.pinnedButtonListener(e, this.tasks);
            this.showOrHidden();
        });
    }
    
    showOrHidden() {
        if(this.tasks.arr.length > 0) this.tasks.noTasks.classList.add('hidden');
        if(this.tasks.arr.length === 0) this.tasks.noTasks.classList.remove('hidden');  
        if(this.pinned.box.children.length > 0) this.pinned.noPinned.classList.add('hidden');
        if(this.pinned.box.children.length === 0) this.pinned.noPinned.classList.remove('hidden');
    }
}