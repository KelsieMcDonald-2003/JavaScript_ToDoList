import '../css/style1.css';

class Controller {
    constructor() {
        this.tasks = [];
        this.task = document.getElementById('task');
        this.listContainer = document.querySelector('.listcontainer');
    }

    addTasks(event) {
        event.preventDefault();
        this.tasks.push(this.task.value);
        this.displayTasks();
    }

    removeTasks(task) {
        const index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        this.displayTasks();
    }

    displayTasks() {
        this.listContainer.innerHTML = '';
        for(let i = 0; i < this.tasks.length; i++) {
            var p = document.createElement("p");
            p.textContent = this.tasks[i];
            this.listContainer.appendChild(p);
        }
    }
}

window.controller = new Controller();
