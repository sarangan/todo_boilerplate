import React , {Fragment} from 'react';

const TaskList = (props) => {

    console.log(props.todos);


    return(
        <Fragment>
            <p>tasks</p>
            { props.todos && props.todos.map( (task, index) =>{
                    return <div key={index}>{task}</div>
                })
            }
        </Fragment>
    );
}

export default TaskList;