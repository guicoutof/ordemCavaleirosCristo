import React, {Component} from 'react'
import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'
import api from '../../services/api'
import {getNome} from '../../services/auth'
import Blog from './blog/blog'
import Title from '../home/title/title'

import './panelUser.css'

export default function PanelUser(){
    return(
        <div className='principalUSR'>
            <Navbar/>
            <div className="containerUSR">
            <Title titulo={`Bem vindo`}  subtitulo={getNome()}/>       
            </div>
            <Footer/>
        </div>
    )
} 

export class UserBlog extends Component{
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
        <div className='principalUSR'>
            <Navbar/>
            <div className="containerUSR">
            <Blog publications={this.state.publications}/>
            </div>
            <Footer/>
        </div>
        )
    }
}