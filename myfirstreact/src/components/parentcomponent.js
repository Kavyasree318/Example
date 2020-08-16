import React, { Component } from 'react'
import ChildComponent from './childcomponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName : 'amma'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(childName) {
        alert(`hello ${this.state.parentName} from ${childName}`)
    }

render() {
    return(
        <div>
            <ChildComponent greetHandler = {this.clickHandler}/>
        </div>
    )
}
}
export default ParentComponent;