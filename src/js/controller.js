import '../css/style1.css';
import FormComponent from '../components/FormComponent.js';
import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';

class Controller {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.task = document.getElementById('task');
        this.listContainer = document.querySelector('.listcontainer');

        this.displayTasks();
        this.renderForm();
    }

    // addTasks(event) {
    //     event.preventDefault();
    //     if (this.task.value == '') {
    //         this.removeTasks();
    //     } else {
    //         this.tasks.push(this.task.value);
    //         this.saveTasks();
    //         this.displayTasks();
    //         this.clearTasks();
    //     }
    // }

    addTasks(event) {
        event.preventDefault();
        this.task = document.getElementById('task');
        if (this.task.value == '') {
            this.removeTasks();
        } else {
            this.tasks.push(this.task.value);
            this.saveTasks();
            this.displayTasks();
            this.clearTasks();
        }
    }    

    removeTasks(task) {
        const index = this.tasks.indexOf(task);
        if (index > -1) {
            this.tasks.splice(index, 1);
        }
        this.saveTasks();
        this.displayTasks();
    }

    displayTasks() {
        this.listContainer.innerHTML = '';
        for(let i = 0; i < this.tasks.length; i++) {
            var item = document.createElement("li");
            item.textContent = this.tasks[i];
            this.listContainer.appendChild(item);

            var removeButton = document.createElement("button");
            removeButton.textContent = "x";
            removeButton.onclick = () => {
                this.removeTasks(this.tasks[i]);
            };

            item.appendChild(removeButton);
            this.listContainer.appendChild(item);
        }
    }

    clearTasks() {
        this.task.value = '';
    }

    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    renderForm() {
        ReactDOM.createRoot(document.getElementById('formcontainer')).render(<FormComponent />);
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    window.controller = new Controller();
})
