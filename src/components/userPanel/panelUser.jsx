import React from 'react'
import Navbar from '../home/navbar/navbar'
import Footer from '../home/footer/footer'

import Curso from './curso/curso'
import Blog from './blog/blog'

import './panelUser.css'

export default function PanelUser(){
    return(
        <div className='principalUSR'>
            <Navbar controle={0}></Navbar>
            <div className="containerUSR">
            <Curso></Curso>
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