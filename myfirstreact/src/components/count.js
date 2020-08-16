import React, {Component} from 'react';

class Count extends Component {

constructor() {
    super()
    this.state = {
        value: 0
    }
}

increment() {
    // this.setState({
    //     value: this.state.value + 1
    // }, () => 
    // {
    //     console.log( "value", this.state.value )
    // })
    // console.log(this.state.value)

    this.setState(prevState =>({
        value: prevState.value + 1
    }))
}

increment3() {
    this.increment()
    this.increment()
    this.increment()
}


  render() {
    return (
      <div>
        <h1>Count - {this.state.value}</h1>
        <button onClick = {() =>this.increment()}>increment</button>
        <button onClick = {() => this.increment3()}>increment3</button>
      </div>
    );
  }
}

export default Count;
