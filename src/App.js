import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from '../src/views/Home'
import Film from '../src/views/Film'

export default class App extends Component {
  render() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route path="/film/:id" component={Film}/> 
               
            </Switch>

        </BrowserRouter>
    )
  }
}
