import React, { Component } from 'react'

export default class ToDo extends Component {
    render() {
        console.log(this.props.token, 'the token lives in todo now');
        return (
            <div>
                Todo Page!
            </div>
        )
    }
}

