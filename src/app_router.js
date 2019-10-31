import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import customHistory from './router/history'
import Content from './components/content/content.jsx'
import Booklist from './components/booklist/booklist.jsx'
import Details from './components/details/details.jsx'


export default class AppRouter extends Component {
  render () {
    return (
      <Router history={customHistory}>
        <Content {...this.props}>
          <Switch>
            <Route path='/:id/details' exact render={(routerProps) => <Details {...this.props} {...routerProps} />} />
            <Route path='/' render={(routerProps) => <Booklist {...this.props} {...routerProps} />} />
          </Switch>
        </Content>
      </Router >
    )
  }
}
