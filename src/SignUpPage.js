import React, { Component } from 'react';
import { signup } from './fetch-utils.js';

export default class SignUpPage extends Component {

    state = {
        email: '',
        password: ''

    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });

    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const token = await signup(this.state.email, this.state.password);
        this.props.login(token);
        this.props.history.push('/todo');

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:<input type="email" onChange={this.handleEmailChange}/>
                    </label>
                    <label>
                        Password:<input type="password" onChange={this.handlePasswordChange} />
                    </label>
                    <button>Create Account</button>
                </form>
            </div>
        )
    }
}
