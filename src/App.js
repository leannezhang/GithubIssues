import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'

import api from './api'

export default class App extends Component {
  componentDidMount () {
    api.getListIssues('npm','npm').then((npmJson) => {
      console.log(npmJson)
    })
  }

  render() {
    return (
      <Home />
    )
  }
}
