import React, { Component } from 'react'

class ClasClick extends Component {

    clickHandler() {
        console.log('clicked button')
    }

    render() {
        return(
            <div>
                <button onClick = {this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClasClick;