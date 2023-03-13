import React, { Component } from 'react'

export default class Count extends Component<{}, {count: number}> {
  state= {
    count: 0
  }  

  onIncrement = () => {
    this.setState(prevstate => ({count:prevstate.count + 1}))
  } 

  onDecrement = () => {
    this.setState(prevstate => ({count:prevstate.count - 1}))
  }  

  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    )
  }
}
