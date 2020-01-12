import React, {Component} from 'react'
import './panelAdm.css'
import api from '../../services/api'

import Navbar from '../home/navbar/navbar'
import Title from '../home/title/title'
import AdmArtigos from './admarticles/admarticles'
import PainelUsuarios from './users/users'
import AdmModulos from './modules/modules'
import AdmServicos from './admServicos/admServicos'



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
                    this.setState({modulos:res.data})
                }
            )
    }

    render(){
        return(
            <div className='principalADM'>
            <Navbar/>
            <div className='containerADM'>
                <AdmModulos modulos={this.state.modulos}/>
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