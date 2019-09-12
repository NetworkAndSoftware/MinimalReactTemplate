import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Spinner} from 'react-bootstrap'

import { getWeather } from '../actionCreators'
import './Time.scss'

class WeatherComponent extends React.Component {
  constructor(props) {
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick() {
    this.props.getWeather()
  }

  render() {
    if (this.props.loading)
      return <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>

    let text
    if ('forecast' in this.props && 'properties' in this.props.forecast) {
      let periods = this.props.forecast.properties.periods
      let name = periods[0].name
      let detailedForecast = periods[0].detailedForecast
      text = `${name}: ${detailedForecast}`
    } else
      text = ''

    return (
      <React.Fragment>
        <div className="page-header">
          <h1>Weather Forecast</h1>
        </div>
        <div className="jumbotron">
          <button type="button" className="btn btn-primary" onClick={this.buttonClick}>Get the local forecast</button>
        </div>
        <div>
          {text}
        </div>
      </React.Fragment>
    )
  }
}

WeatherComponent.propTypes = {
  getWeather: PropTypes.func.isRequired,
  forecast: PropTypes.object,
  loading: PropTypes.bool
}

const mapStateToProps = state => {
  console.log('mapStateToProps')
  return { ...(state.weather) }
}

const WeatherContainer = connect(mapStateToProps, { getWeather })(WeatherComponent)

export default WeatherContainer
