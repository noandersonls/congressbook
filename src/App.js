
import React, { Component } from 'react'
import AppRouter from './app_router'
import './App.scss'

export default class App extends Component {
  render () {
    return (
      <AppRouter {...this.props} />
    )
  }
}