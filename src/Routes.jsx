import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Primary from './components/primary'

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Primary} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}