import React, {Component} from 'react'
import './panelAdm.css'
import api from '../../services/api'
import Navbar from '../home/navbar/navbar'
import Title from '../home/title/title'
import AdmArtigos from './admarticles/admarticles'
// import PainelUsuarios from './users/users'
import PainelUsuarios from './users/painelUsuarios'
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
export function AdmUser(){
    return(
        <div className='principalADM'>
        <Navbar/>
        <div className='containerADM'>
            <PainelUsuarios />
        </div>
    </div>
    )
}
export function AdmModule(){
    return(
        <div className='principalADM'>
        <Navbar/>
        <div className='containerADM'>
            <AdmModulos />
        </div>
    </div>
    )
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