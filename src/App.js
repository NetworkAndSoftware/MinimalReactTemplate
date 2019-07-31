import React from 'react'
import HelloWorldComponent from 'HelloWorldComponent'

export default class extends React.Component {
  render() {
    return <HelloWorldComponent date={new Date()} />
  }
}