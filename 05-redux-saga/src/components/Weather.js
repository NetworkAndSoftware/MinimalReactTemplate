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
    let content
    if (this.props.loading)
      content=<div style={ {position: 'absolute', top:'50%', left:'50%', marginLeft: '-10px', marginTop: '-10px' }}><Spinner animation="border" role="status">
        <span className="sr-only">Laoading...</span>
      </Spinner></div>
    else {

      let text
      if (this.props.error)
        text=<p>{this.props.error.message}</p>
      else
      if ('forecast' in this.props && 'properties' in this.props.forecast) {
        let periods = this.props.forecast.properties.periods
        let name = periods[0].name
        let detailedForecast = periods[0].detailedForecast
        text = <p className="display-4">{name}: {detailedForecast}</p>
      } else
        text = ''


      content = <React.Fragment>{ text }
        <button type="button" className="btn btn-primary float-right" onClick={this.buttonClick}>Get the local forecast</button></React.Fragment>
    }
    return (
      <React.Fragment>
        <div className="page-header">
          <h1>Weather Forecast</h1>
        </div>
        <div className="jumbotron" style= {{minHeight: '480px', position: 'relative'}}>
          {content}
        </div>
      </React.Fragment>
    )
  }
}

WeatherComponent.propTypes = {
  getWeather: PropTypes.func.isRequired,
  forecast: PropTypes.object,
  error: PropTypes.object,
  loading: PropTypes.bool
}

const mapStateToProps = state => {
  console.log('mapStateToProps')
  return { ...(state.weather) }
}

const WeatherContainer = connect(mapStateToProps, { getWeather })(WeatherComponent)

export default WeatherContainer
