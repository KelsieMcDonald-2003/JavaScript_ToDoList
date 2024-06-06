import '../css/style1.css';
import FormComponent from '../components/FormComponent.js';
import WelcomeComponent from '../components/WelcomeComponent.js';
import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';

class Controller {
    constructor() {
        // Assign tasks to to JSON.parse to save the array to the local machine
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.task = document.getElementById('task'); // Assign task to receive user input
        // Assign listContainer to select the first HTML element with the class name 'listcontainer'
        this.listContainer = document.querySelector('.listcontainer'); 

        // Calls displayTasks method
        this.displayTasks();
        // Calls renderForm
        this.renderForm();
    }

    addTasks(event) {
        // Prevents refreshing the page
        event.preventDefault();
        this.task = document.getElementById('task'); // Assign task to receive user input
        // If task value equals an empty string or null, call removeTasks
        if (this.task.value == '' || this.task.value == null) {
            this.removeTasks();
        } else {
            this.tasks.push(this.task.value); // Push value of task inside tasks
            this.saveTasks(); // Call saveTasks
            this.displayTasks(); // Call displayTasks
            this.clearTasks(); // Call clearTasks
        }
    }    

    removeTasks(task) {
        const index = this.tasks.indexOf(task); // Assign index to the index of a task
        // If there are more than one task, splice the index and value
        if (index > -1) { 
            this.tasks.splice(index, 1);
        }
        this.saveTasks(); // Call saveTasks
        this.displayTasks(); // Call displayTasks
    }

    displayTasks() {
        // Assigns listContainer to ''
        this.listContainer.innerHTML = '';
        // Assign i to 0, for every i less than tasks length, add an i
        for(let i = 0; i < this.tasks.length; i++) {
            // Assign item to creating an li html element
            var item = document.createElement("li");
            // Assign item's context to a task inside tasks
            item.textContent = this.tasks[i];
            // Appent item in listContainer
            this.listContainer.appendChild(item);

            item.addEventListener('click', () => {
                item.classList.toggle('completed');
            })

            // Assign removeButton to an html button
            var removeButton = document.createElement("button");
            // removeButton context is a x value
            removeButton.textContent = "x";
            // For every time the button is clicked, it calls removeTasks on a specific task
            removeButton.onclick = () => {
                this.removeTasks(this.tasks[i]);
            };

            // Append removeButton and item
            item.appendChild(removeButton);
            this.listContainer.appendChild(item);
        }
    }

    clearTasks() {
        // Assigns task to an empty string
        this.task.value = '';
    }

    saveTasks() {
        // Stores data in the web browser's local storage
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    renderForm() {
        // Calls the JavaScript components of FormComponent and WelcomeComponent
        ReactDOM.createRoot(document.getElementById('formcontainer')).render(<FormComponent />);
        ReactDOM.createRoot(document.getElementById('welcome')).render(<WelcomeComponent />);
        /*
        See src/components to view how to code the FormComponent and WelcomeComponent
        */
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    window.controller = new Controller();
})
