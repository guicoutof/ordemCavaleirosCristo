import React from 'react'
import './primary.css'

import Navbar from './navbar/navbar'
import Home from './home/home'
import Footer from './footer/footer'
import UserReviews from './reviews/userReviews'
import Courses from './courses/courses'

import Image from '../assets/img/test.png'

export default function index(){
    const title = "CURSO1"
    const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker."
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
        <div className='index'>
            <a href="https://wa.me/5514996903532" target='_blank' rel="noopener noreferrer">
                <img src={require('../assets/img/wpp.png')} alt="Background" className="whats" />
            </a>
            <Navbar/>
            <Home/>
            <Courses cards={courses} 
                    title={title} text={text}
                    title2={title} text2={text}
                    title3={title} text3={text} />
            <UserReviews/>
            <Footer/>
        </div>
    )
}