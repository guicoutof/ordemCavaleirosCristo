import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar'
import Articlespreview from './components/articlespreview/articlespreview'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import UserReviews from './components/reviews/userReviews'
import Courses from './components/courses/courses'
import Donate from './components/donate/donate'

export default () => {
  return (
    <div className="app">
      <Navbar/>
      <Articlespreview/>
      <Home/>
      <Courses title="CURSO1" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker."
        title2="CURSO1" text2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker."
        title3="CURSO1" text3="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker."/>
      <UserReviews/>
      <Donate/>
      <Footer/>
    </div>
  )
} 