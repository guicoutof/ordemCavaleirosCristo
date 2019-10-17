import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Footer from './components/footer/footer'
import UserReviews from './components/reviews/userReviews'

export default () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <UserReviews/>
      <Footer/>
    </div>
  )
} 

