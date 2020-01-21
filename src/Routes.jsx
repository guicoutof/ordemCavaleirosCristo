import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated, isAdm } from "./services/auth";
import PanelAdm, { AdmUser, AdmBlog, AdmModule, AdmService, AdmComments} from './components/admPanel/panelAdm'
import AdmCourses,{CoursePending} from './components/admPanel/cursos/panelCursos'
import AdmClass from './components/admPanel/admAulas/admAulas'
import CadCurso, {EditCurso} from './components/admPanel/cadCursos/cadCurso'
import CadClass, {CadClassEdit} from './components/admPanel/cadAula/cadAula'
import CadBlog, {CadBlogEdit} from './components/admPanel/blog/cadastrarArtigoBlog'
import CadServ, {EditServico} from './components/admPanel/admServicos/cadastrarServico/cadastrarServico'
import indexHome, { indexDonate, indexContato, indexCourses, indexServices } from './components/home/indexHome'
import {indexCadastro} from './components/home/indexHome'
import {CursoPendente, CursoReprovado, CursoAprovado } from './components/home/courses/courses'
import {ServicoPendente, ServicoReprovado, ServicoAprovado } from './components/home/services/services'
import {UserContaAprovado, UserContaPendente, UserContaReprovado } from './components/userPanel/account/account'
import PanelUser, { UserBlog, UserConta, UserBiblioteca,UserCurso} from './components/userPanel/panelUser'


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
      {/* 

        Curso:     /curso/id/aprovado
        Servico:   /servico/id/aprovado
        Doação:    /doacao/aprovado
        Afiliação: /cadastro/id/aprovado  
        Upgrade:   /conta/aprovado   

        Curso:     /curso/id/pendente
        Servico:   /servico/id/pendente
        Doação:    /doacao/pendente
        Afiliação: /cadastro/id/pendente
        Upgrade:   /conta/pendente   

        Curso:     /curso/reprovado
        Servico:   /servico/reprovado
        Doação:    /doacao/reprovado
        Afiliação: /cadastro/reprovado
        Upgrade:   /conta/reprovado     

      */}

            <Switch>
            {/* Admin */}
            <AdmRoute exact path="/admin" component={PanelAdm} />

            <AdmRoute exact path="/user" component={AdmUser} />
            {/* <AdmRoute exact path="/user/:id/course" component={UserCourse} /> */}
            
            <AdmRoute exact path="/modules" component={AdmModule} />
            <AdmRoute exact path="/module/:id" component={AdmCourses} />
            <AdmRoute exact path="/module/:id/create" component={CadCurso} />
            <AdmRoute exact path="/coursePending" component={CoursePending} />
            <AdmRoute exact path="/course/:id" component={AdmClass} />
            <AdmRoute exact path="/course/:id/edit" component={EditCurso} />
            <AdmRoute exact path="/course/:id/create" component={CadClass} />
            <AdmRoute exact path="/course/:idClass/class/:id/edit" component={CadClassEdit} />

            <AdmRoute exact path="/services" component={AdmService} />
            <AdmRoute exact path="/services/create" component={CadServ} />
            <AdmRoute exact path="/services/:id/edit" component={EditServico} />

            <AdmRoute exact path="/comments" component={AdmComments} />

            <AdmRoute exact path="/articles" component={AdmBlog} />
            <AdmRoute exact path="/post/create" component={CadBlog} />
            <AdmRoute exact path="/post/:id/edit" component={CadBlogEdit} />


            {/* User */}
            <PrivateRoute exact path="/home" component={PanelUser} />
            <PrivateRoute exact path="/blog" component={UserBlog} />
            <PrivateRoute exact path="/conta" component={UserConta} />
            <PrivateRoute exact path="/conta/aprovado" component={UserContaAprovado} />
            <PrivateRoute exact path="/conta/pendente" component={UserContaPendente} />
            <PrivateRoute exact path="/conta/reprovado" component={UserContaReprovado} />
            <PrivateRoute exact path="/biblioteca" component={UserBiblioteca} />
            <PrivateRoute exact path="/curso/:id/aprovado" component={CursoAprovado} />
            <PrivateRoute exact path="/curso/:id/pendente" component={CursoPendente} />
            <PrivateRoute exact path="/curso/reprovado" component={CursoReprovado} />
            <PrivateRoute exact path="/servico/:id/aprovado" component={ServicoAprovado} />
            <PrivateRoute exact path="/servico/:id/pendente" component={ServicoPendente} />
            <PrivateRoute exact path="/servico/reprovado" component={ServicoReprovado} />
            <PrivateRoute exact path="/curso/:id" component={UserCurso} />

            <Route exact path="/" component={indexHome} />
            <Route exact path="/cursos" component={indexCourses} />
            <Route exact path="/doacoes" component={indexDonate} />
            <Route exact path="/contato" component={indexContato} />
            <Route exact path="/cadastro" component={indexCadastro}/>
            <Route exact path="/cadastro/aprovado" component={UserContaAprovado}/>
            <Route exact path="/cadastro/pendente" component={UserContaPendente}/>
            <Route exact path="/cadastro/reprovado" component={UserContaReprovado}/>
            <Route exact path="/servicos" component={indexServices}/>


            <Route path="*" component={() => <h1>Page not found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}