import React, { Component } from 'react'
import './indexHome.css'
import api, {feedbacks} from '../../services/api'

import Navbar from './navbar/navbar'
import Title from './title/title'
import Footer from './footer/footer'
import UserReviews from './reviews/userReviews'
import FeaturedCourses from './featuredCourses/featuredCourses'
import Article from './articlespreview/articlespreview'
import Donate from './donate/donate'
import Contacts from './contato/contato'
import Cadastro from './cadastro/cadastro'
import Courses from './courses/courses'
import Services from './services/services'

export default class index extends Component{
    state = {
        coursesSpotlight:[],
        feedbacks:feedbacks,
        publication:[],
    }

    componentDidMount = async ()=>{
        await api.get("/publications")
            .then(
                res=>{
                    this.setState({publication:res.data[0]})
                }
            )
        await api.get("/modules")
            .then(
                res=>{
                    res.data.map(m=>{
                    m.courses.map(course=>{
                            if(course.highlight)
                                this.setState(state=>{
                                    const coursesSpotlight = [...state.coursesSpotlight,course]

                                    return {coursesSpotlight}
                                })
                            else return null
                            return null
                        });return null
                    });
                    
                }
            )
    }

    render(){
        return(
            <div className='index'>
            <Navbar/>
            <Title titulo='ORDEM DOS CAVALEIROS DE CRISTO!' subtitulo='TREINAMENTO ESPIRITUAL E FILOSÓFICO'/>
            <Article publication={this.state.publication} />
            <FeaturedCourses cards={this.state.coursesSpotlight} />
            <UserReviews feedbacks={this.state.feedbacks} />
            <Footer/> 
        </div>
        )
    }
}
export function indexDonate(){
    return(
        <div className='index'>
            <Navbar/>
            <Donate titulo="DOAÇÕES" conteudo="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theindustry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book." 
            />
            <Footer/>
        </div>
    )
}

export function indexContato(){
    return(
        <div className='index'>
            <Navbar/>
            <Contacts/>
            <Footer/>
        </div>
    )
}

export function indexCadastro(){

    return(
        <div className='index'>
            <Navbar/>
            <Cadastro/>
            <Footer/>
        </div>
    )
}
export function indexCourses(){
    return(
        <div className='index'>
        <Navbar/>
        <Courses />
        <Footer/>
    </div>
    )
}
export function indexServices (){
    return(
        <div className='index'>
        <Navbar/>
        <Services />
        <Footer/>
    </div>
    )

}