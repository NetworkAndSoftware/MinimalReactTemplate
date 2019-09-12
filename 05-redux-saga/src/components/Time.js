import React from 'react'
import { connect } from 'react-redux'
import {updateDateTime} from '../actionCreators'
import './Time.scss'

class TimeComponent extends React.Component {
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
          <h1>Current Time</h1>
        </div>
        <div className="jumbotron">
          <p>The current date and time are { this.props.date.toString('en-us') }</p>
          <button type="button" className="btn btn-primary" onClick={this.buttonClick}>Update</button>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  date: state.date
})

const TimeContainer = connect(mapStateToProps, { updateDateTime })(TimeComponent)

export default TimeContainer
