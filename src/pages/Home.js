/* eslint-disable react/react-in-jsx-scope */
import React, {Component} from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchTodos} from '../actions/todoActions';

class Home extends Component{

    componentDidMount(){
        this.props.fetchTodos();
    }

    render(){
        return(
            <div className="main-container">
                <div className="container">
                    <h4>Your Tasks</h4>
                    <TaskForm />
                    <hr/>
                    <TaskList todos={this.props.todos.todos} />
                    
                </div>
            </div>            
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default withRouter(connect(mapStateToProps, {fetchTodos})(Home));