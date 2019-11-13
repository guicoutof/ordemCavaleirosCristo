import React from 'react'
import './primary.css'

import Navbar from './navbar/navbar'
import Home from './home/home'
import Footer from './footer/footer'
import UserReviews from './reviews/userReviews'
import Courses from './courses/courses'

import Image from '../assets/img/test.png'

export default function index(){
    const courses = [
        {pk:0,title:'Misticismo Católico A Fé em Ação',image:Image},
        {pk:1,title:'Kabbalah',image:Image},
        {pk:2,title:'Alquimia',image:Image},
        {pk:3,title:'Alquimia',image:Image},
        {pk:4,title:'Alquimia',image:Image},
        {pk:5,title:'Alquimia',image:Image},
        {pk:6,title:'Alquimia',image:Image},
        {pk:7,title:'Alquimia',image:Image},
        {pk:8,title:'Alquimia',image:Image},
        {pk:9,title:'Alquimia',image:Image},
        {pk:10,title:'Alquimia',image:Image},
                ];

    return(
        <div>
            {/* <a href="https://wa.me/5514996903532" target='_blank' rel="noopener noreferrer">
                <img src={require('../assets/img/wpp.png')} alt="Background" className="whats" />
            </a> */}
            <div className='index'>
                <Navbar/>
                <Home titulo='ORDEM DOS CAVALEIROS DE CRISTO!' subtitulo='TREINAMENTO ESPIRITUAL E FILOSÓFICO'/>
                <Courses cards={courses}/>
                <UserReviews/>
                <Footer/>
            </div>

        </div>
    )
}