import React from 'react'
import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'
import {courses, services} from '../../services/api'
import {getNome} from '../../services/auth'

import Curso from './curso/curso'
import Blog from './blog/blog'
import Artigo from './artigo/artigo'
import Title from '../home/title/title'
import Cursos from '../home/courses/courses'
import Donate from '../home/donate/donate'
import Contato from '../home/contato/contato'

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

export function UserBlog(){
    return(
        <div className='principalUSR'>
            <Navbar/>
            <div className="containerUSR">
            <Blog/>
            </div>
            <Footer/>
        </div>
    )
}