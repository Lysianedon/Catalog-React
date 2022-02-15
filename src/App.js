import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from '../src/views/Home'

export default class App extends Component {
  render() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home}/> 
               
            </Switch>

        </BrowserRouter>
    )
  }
}
