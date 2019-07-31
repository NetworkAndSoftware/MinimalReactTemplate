import ReactDOM from 'react-dom'
import React from 'react'
import HelloWorldComponent from 'HelloWorldComponent'

ReactDOM.render(
  <HelloWorldComponent date={new Date()} />
  , document.getElementById('application')
)