import React, { Component } from 'react'

class EventBind extends Component {
 
    constructor() {
        super()
        this.state = {
            message: 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: 'goodbye'
        })
    }
    render() {
        return(
            <div>
                <h3>{this.state.message}</h3>
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                {/* <button onClick={() => this.clickHandler()}>click</button> */}
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind;