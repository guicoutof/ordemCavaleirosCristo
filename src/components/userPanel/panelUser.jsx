import React from 'react'
import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'
import {courses, services} from '../../services/api'

import Curso from './curso/curso'
import Blog from './blog/blog'
import Artigo from './artigo/artigo'
import Title from '../home/title/title'
import Cursos from '../home/courses/courses'
import Donate from '../home/donate/donate'
import Contato from '../home/contato/contato'

import './panelUser.css'

export default function PanelUser(){
    const nome = "SOKOMO KUDIOMI DADH DAKHDSAD HAKHD AKDWH DUKWA DHAUKWDH AWKUD HAKU"
    return(
        <div className='principalUSR'>
            <Navbar controle={0}></Navbar>
            <div className="containerUSR">
            <Title titulo={`Bem vindo`}  subtitulo={nome}/>
            {/* <Curso></Curso> */}
            {/* <Artigo/> */}
            {/* <Blog/> */}
            
            </div>
            <Footer></Footer>
        </div>
    )
} 

export function UserBlog(){
    return(
        <div className='principalUSR'>
            <Navbar controle={0}></Navbar>
            <div className="containerUSR">
            <Blog></Blog>
            </div>
            <Footer></Footer>
        </div>
    )
}
export function UserCursos(){
    return(
        <div className='principalUSR'>
            <Navbar controle={0}></Navbar>
            <div className="containerUSR">
            <Cursos title={'CURSOS'} courses={courses}/>
            </div>
            <Footer></Footer>
        </div>
    )
}
export function UserServices(){
    return(
        <div className='principalUSR'>
            <Navbar controle={0}></Navbar>
            <div className="containerUSR">
            <Cursos title={'SERVIÇOS'} courses={services}/>
            </div>
            <Footer></Footer>
        </div>
    )
}
export function UserDonation(){
    return(
        <div className='principalUSR'>
            <Navbar controle={0}></Navbar>
            <div className="containerUSR">
            <Donate titulo="DOAÇÕES" conteudo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book." 
            />
            </div>
            <Footer></Footer>
        </div>
    )
}
export function UserContato(){
    return(
        <div className='principalUSR'>
            <Navbar controle={0}></Navbar>
            <div className="containerUSR">
            <Contato />
            </div>
            <Footer></Footer>
        </div>
    )
}