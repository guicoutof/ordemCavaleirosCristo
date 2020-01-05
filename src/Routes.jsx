import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from "./services/auth";
import indexHome, { indexDonate, indexContato, indexCadastro, indexCourses, indexServices } from './components/home/indexHome'
import PanelAdm from './components/admPanel/panelAdm'
import PanelUser, { UserBlog, UserCursos, UserServices, UserDonation, UserContato } from './components/userPanel/panelUser'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

export default function routes() {
    return (
        <BrowserRouter>
            <Switch>
            {/* Admin */}
            <PrivateRoute exact path="/admin" component={PanelAdm} />


            {/* User */}
            <PrivateRoute exact path="/home" component={PanelUser} />
            <PrivateRoute exact path="/blog" component={UserBlog} />
            <PrivateRoute exact path="/cursos" component={UserCursos} />
            <PrivateRoute exact path="/servicos" component={UserServices}/>
            <PrivateRoute exact path="/doacoes" component={UserDonation} />
            <PrivateRoute exact path="/contato" component={UserContato} />



            <Route exact path="/" component={indexHome} />
            <Route exact path="/cursos" component={indexCourses} />
            <Route exact path="/doacoes" component={indexDonate} />
            <Route exact path="/contato" component={indexContato} />
            <Route exact path="/cadastro" component={indexCadastro}/>
            <Route exact path="/servicos" component={indexServices}/>


            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}