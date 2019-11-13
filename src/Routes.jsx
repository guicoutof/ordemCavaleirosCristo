import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import indexHome from './components/indexHome'

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={indexHome} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}