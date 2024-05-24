# JavaScript_ToDoList
 The JavaScript ToDoList is a To Do List where users can enter tasks from an HTML form, in which will generate tasks down below in an ordered list. If a user has completed a task or entered a wrong task, they will be able to click on a button that will remove the task. 

## Code Implemented
I used some JavaScript components to render some HTML implementation. An example would be the Form Component. In case the user closed the browser of their to do list, the controller has some code that would keep the list in the local browser.

### Form Component
```
const FormComponent = function(props) {
    var job = props.job;

    return (
        <div className="formcontainer" id="formcontainer">
            <form className="form">
                <input class="task" id="task" type="text" placeholder="Enter tasks here" />
                <button class="save" onClick={(event) => window.controller.addTasks(event)} type="submit">Save</button>
            </form>
        </div>
    );
};
```

### controller.js
saveTasks stores tasks inside local storage:
```
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
```

addTasks allows users to add tasks:
```
addTasks(event) {
        event.preventDefault();
        this.task = document.getElementById('task');
        if (this.task.value == '' || this.task.value == null) {
            this.removeTasks();
        } else {
            this.tasks.push(this.task.value);
            this.saveTasks(); 
            this.displayTasks();
            this.clearTasks();
        }
    }
```

removeTasks allows users to remove tasks:
```
removeTasks(task) {
        const index = this.tasks.indexOf(task);
        if (index > -1) { 
            this.tasks.splice(index, 1);
        }
        this.saveTasks();
        this.displayTasks();
    }
```