import React from 'react'
import { connect } from 'react-redux'
import {updateDateTime} from '../actionCreators'


class helloWorldComponent extends React.Component {
  constructor(props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick() {
    this.props.updateDateTime(new Date())
  }

  render() {
    return (
      <div>
        <h1>Hello you</h1>
        <p>The current date and time are { this.props.date.toString('en-us') }</p>
        <button onClick={this.buttonClick}>Update</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  date: state.date
})

const HelloWorldContainer = connect(mapStateToProps, { updateDateTime })(helloWorldComponent)

export default HelloWorldContainer
