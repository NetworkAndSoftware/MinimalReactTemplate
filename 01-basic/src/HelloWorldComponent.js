import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: props.date }
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick() {
    this.setState({date: new Date()})

  }

  render() {
    return (
      <div>
        <h1>Hello you</h1>
        <p>The current date and time are { this.state.date.toString('en-us') }</p>
        <button onClick={this.buttonClick}>Update</button>
      </div>
    )
  }
}
