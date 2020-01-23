import React from 'react'
import './panelUser.css'

import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'
import {getInfo} from '../../services/auth'
import Blog from './blog/blog'
import Title from '../home/title/title'
import Account from './account/account'
import Library from './library/library'
import Curso from './curso/curso'


export default function PanelUser(){
    return(
        <div className='principalUSR'>
            <Navbar/>
            <div className="containerUSR">
            <Title titulo={`Bem vindo`}  subtitulo={getInfo().name}/>       
            </div>
            <Footer/>
        </div>
    )
} 

export function UserBlog (){
    
    return(
    <div className='principalUSR'>
        <Navbar/>
        <div className="containerUSR">
        <Blog />
        </div>
        <Footer/>
    </div>
    )
}


export function UserConta(){

        return(
        <div className='principalUSR'>
            <Navbar/>
            <div className="containerUSR">
            <Account />
            </div>
            <Footer/>
        </div>
        )
}

export function UserBiblioteca (){
    return(
        <div className='principalUSR'>
            <Navbar/>
            <div className="containerUSR">
            <Library  />
            </div>
            <Footer/>
        </div>
        )    
}

export function UserCurso(){
    return(
        <div className='principalUSR'>
            <Navbar/>
            <div className="containerUSR">
            <Curso />
            </div>
            <Footer/>
        </div>
    )
}