import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import indexHome, { indexDonate, indexContato, indexCadastro, indexCourses, indexServices } from './components/home/indexHome'
import PanelAdm from './components/admPanel/panelAdm'
import PanelUser from './components/userPanel/panelUser'

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={indexHome} />
            <Route exact path="/cursos" component={indexCourses} />
            <Route exact path="/doacoes" component={indexDonate} />
            <Route exact path="/contato" component={indexContato} />
            <Route exact path="/cadastro" component={indexCadastro}/>
            <Route exact path="/servicos" component={indexServices}/>

            {/* Admin */}
            <Route exact path="/admin" component={PanelAdm} />


            {/* User */}
            <Route exact path="/user" component={PanelUser} />

            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}