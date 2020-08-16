import React, { Component } from "react";

class State extends Component {

    constructor() {
        super()
            this.state= {
                message: 'component'
        }
    }

    handleChange() {
        this.setState({
            message: 'changed using setState'
        })
    }

  render() {
    return (
      <div>
        <h1>state {this.state.message} </h1>
        <button onClick = {() => this.handleChange()}>use setstate</button>
      </div>
    );
  }
}

export default State;
