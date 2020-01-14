import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated, isAdm } from "./services/auth";
import indexHome, { indexDonate, indexContato, indexCadastro, indexCourses, indexServices } from './components/home/indexHome'
import PanelAdm, { AdmUser, AdmBlog, AdmModule, AdmService} from './components/admPanel/panelAdm'
import AdmCourses from './components/admPanel/cursos/panelCursos'
import AdmClass from './components/admPanel/admAulas/admAulas'
import PanelUser, { UserBlog, UserConta, UserBiblioteca, UserCurso } from './components/userPanel/panelUser'
import CadCurso from './components/admPanel/cadCursos/cadCurso'
import CadClass, {CadClassEdit} from './components/admPanel/cadAula/cadAula'

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
const AdmRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAdm() ? (
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
            <AdmRoute exact path="/admin" component={PanelAdm} />
            <AdmRoute exact path="/user" component={AdmUser} />
            <AdmRoute exact path="/articles" component={AdmBlog} />
            <AdmRoute exact path="/modules" component={AdmModule} />
            <AdmRoute exact path="/services" component={AdmService} />
            <AdmRoute exact path="/module/:id" component={AdmCourses} />
            <AdmRoute exact path="/course/:id" component={AdmClass} />
            <AdmRoute exact path="/module/:id/create" component={CadCurso} />
            <AdmRoute exact path="/course/:id/create" component={CadClass} />
            <AdmRoute exact path="/course/:idClass/class/:id/edit" component={CadClassEdit} />


            {/* User */}
            <PrivateRoute exact path="/home" component={PanelUser} />
            <PrivateRoute exact path="/blog" component={UserBlog} />
            <PrivateRoute exact path="/conta" component={UserConta} />
            <PrivateRoute exact path="/biblioteca" component={UserBiblioteca} />
            <PrivateRoute exact path="/curso/:id" component={UserCurso} />
            {/* <PrivateRoute exact path="/cursos" component={UserCursos} />
            <PrivateRoute exact path="/servicos" component={UserServices}/>
            <PrivateRoute exact path="/doacoes" component={UserDonation} />
            <PrivateRoute exact path="/contato" component={UserContato} /> */}



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