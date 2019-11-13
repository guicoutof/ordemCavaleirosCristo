import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import indexHome from './components/home/indexHome'
import PanelAdm from './components/admPanel/panelAdm'

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={indexHome} />
            <Route exact path="/admin" component={PanelAdm} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}