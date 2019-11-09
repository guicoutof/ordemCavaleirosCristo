import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Index from './components/index'

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Index} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}