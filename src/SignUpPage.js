import React, { Component } from 'react'

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

    handleSubmit = (e) => {
        e.preventDefault();

        alert(this.state.email);
        alert(this.state.password);
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
