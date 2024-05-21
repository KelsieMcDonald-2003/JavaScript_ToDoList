import React from 'react';

const WelcomeComponent = function(props) {
    var job = props.job;

    return (
        <div id="introduction">
            <h1>To-Do List</h1>
            <p>
                Welcome to the To-Do List application! To begin, start typing a 
                task in the input field down below and click enter or the save button. 
                Entered a wrong task? No need to fear! You can click the x button on the 
                far right of each task!
            </p>
        </div>
    )
}

export default WelcomeComponent;