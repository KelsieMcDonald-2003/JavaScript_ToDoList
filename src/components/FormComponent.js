import React from 'react';

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

export default FormComponent;