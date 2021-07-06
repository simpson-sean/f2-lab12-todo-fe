import React, { Component } from 'react';
import { addTodo, getTodo } from './fetch-utils.js';

export default class ToDo extends Component {
    state = {
        todos: [],
        task: '',
        importance: 0,
        is_completed: false,

    }
    
    componentDidMount = async () => {
        const todos = await getTodo(this.props.token);

        this.setState({ todos: todos })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await addTodo(this.state.task, this.props.token);

    }

    handleTaskChange = (e) => {
        this.setState({task: e.target.value});
    }

    handleImportance = async (e) => {
        this.state({ importance: e.target.value });
    }

    handleCompletedChange = async (e) => {
        this.state({ is_completed: e.target.value});
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Task
                        <input onChange={this.handleTaskChange} />
                    </label>
                    <label>
                        Importance
                        <input onChange={this.handleImportanceChange} />
                    </label>
                    <label>
                        Completed?
                        <input onChange={this.handleCompletedChange} />
                    </label>
                    <button>
                        Add ToDo
                    </button>
                </form>
            </div>
        )
    }
}

