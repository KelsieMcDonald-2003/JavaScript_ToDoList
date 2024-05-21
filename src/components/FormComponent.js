import React from 'react';

const FormComponent = function(props) {
    var job = props.job;

    return (
        <div className="formcontainer" id="formcontainer">
            <form className="form">
                <input id="task" type="text" placeholder="Enter tasks here" />
                <br />
                <button id="" onClick={(event) => window.controller.addTasks(event)} type="submit">Save</button>
                <button type="button">Cancel</button>
            </form>
        </div>
    );
};

export default FormComponent;