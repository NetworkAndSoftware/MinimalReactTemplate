import React from 'react'
import { connect } from 'react-redux'
import {updateDateTime} from '../actionCreators'
import './helloWorldStyles.scss'

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
      <React.Fragment>
        <div className="page-header">
          <h1>Hello You!</h1>
        </div>
        <div className="jumbotron">
          <p>The current date and time are { this.props.date.toString('en-us') }</p>
          <button type="button" class="btn btn-primary" onClick={this.buttonClick}>Update</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  date: state.date
})

const HelloWorldContainer = connect(mapStateToProps, { updateDateTime })(helloWorldComponent)

export default HelloWorldContainer
