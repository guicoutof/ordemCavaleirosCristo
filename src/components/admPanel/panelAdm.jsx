import React, {Component} from 'react'
import './panelAdm.css'
import api from '../../services/api'

import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'
import Title from '../home/title/title'
import AdmArtigos from './admarticles/admarticles'
import PainelUsuarios from './users/users'

import AdmServicos from './admServicos/admServicos'
import { render } from 'react-dom'



export default class panelAdm extends Component{
    
    render(){

        return(
            <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
            <Title titulo={`Bem vindo Administrador`}/>
            {/* <CadastrarArtigoBlog></CadastrarArtigoBlog> */}
            {/* <AdmArtigos/> */}
            {/* <PainelUsuarios /> */}
            {/* <PainelCurso/> */}
            {/* <AdmAulas/> */}
            {/* <Aula></Aula> */}
            </div>
        </div>
        )
    }
}
export class AdmUser extends Component{
    state={
        users:[]
    }
    
    componentDidMount = async ()=>{
        await api.get("/getUsers")
            .then(
                res=>{
                    this.setState({users:res.data})
                }
            )
    }

    render(){
        return(
            <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
                <PainelUsuarios users={this.state.users}/>
            </div>
        </div>
        )
    }
}
export class AdmModule extends Component{
    state={
        modulos:[]
    }

    componentDidMount = async ()=>{
        await api.get("/modules")
            .then(
                res=>{
                    console.log(res)
                    this.setState({modulos:res.data})
                }
            )
    }

    render(){
        return(
            <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
                {
                    this.state.modulos.map((m) =>
                    <div key={m.module.id}className='cardModulo'>
                        <h3 className='nomeCurso'>{m.module.name}</h3>
                        <p className='qtdCurso'>Cursos: {m.module.courses_quantity}</p>
                        <div className="botoes">
                            <button className="abrirModulo">Abrir</button>
                            <button className="removerModulo">Remover</button>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
        )
    }
}

export function AdmService(){
    return(
        <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
                <AdmServicos/>
            </div>
        </div>
    )
}
export class AdmBlog extends Component{
    state={
        publications:[]
    }

    componentDidMount = async ()=>{
        await api.get("/publications")
            .then(
                res=>{
                    this.setState({publications:res.data})
                }
            )
    }

    render(){
        return(
            <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
                <AdmArtigos publications={this.state.publications}/>
            </div>
        </div>
        )
    }
}