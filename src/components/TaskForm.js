import React, {Fragment, useState, useEffect} from "react";
import {connect} from 'react-redux';
import {addTodo} from '../actions/todoActions';

const TaskForm = (props) =>{

    const [task, setTask] = useState('');

    const addTask = (e) =>{        
        console.log(task);
        props.addTodo(task)

    }

    useEffect(() => {
        console.log("calling effect");
    });

    return(
        <Fragment>
                <input type="text" name="task_name" id="task_name" value={task} onChange={(e)=>setTask(e.target.value)}/>
                <button onClick={(e)=>addTask(e)}>Add</button>
        </Fragment>
    );
};

export default connect(null, {addTodo})(TaskForm);