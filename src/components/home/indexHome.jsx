import React from 'react'
import {NavLink} from 'react-router-dom'
import './indexHome.css'

import Navbar from './navbar/navbar'
import Footer from './footer/footer'
import Title from './title/title'
import UserReviews from './reviews/userReviews'
import FeaturedCourses from './featuredCourses/featuredCourses'
import Article from './articlespreview/articlespreview'
import Donate from './donate/donate'
import Contacts from './contato/contato'
import Cadastro from './cadastro/cadastro'
import Courses from './courses/courses'
import Services from './services/services'

export default function index(){
    return(
        <div className='index'>
            <Navbar/>
            <Title titulo='ORDEM DOS CAVALEIROS DE CRISTO!' subtitulo='TREINAMENTO ESPIRITUAL E FILOSÓFICO'/>
            <Article />
            <FeaturedCourses />
            <UserReviews />
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
export function indexDonateAprovado(){
    return(
        <div className="conteudoAprovacao">
            <Navbar/>
            <div className="conteudoAprovacao">
                <h2>Doação aprovada, muito obrigado pela sua doação!</h2>
                <NavLink to={"/doacoes"}><button className="botaoVoltar">Voltar</button></NavLink>
            </div>
            <Footer/>
        </div>
    )
}
export function indexDonatePendente(){
    return(
        <div className="conteudoAprovacao">
            <Navbar/>
            <div className="conteudoAprovacao">
                <h2>Aguardaremos ansiosamente a sua doação!</h2>
                <NavLink to={"/doacoes"}><button className="botaoVoltar">Voltar</button></NavLink>
            </div>
            <Footer/>
        </div>
    )
}
export function indexDonateReprovado(){
    return(
        <div className="conteudoAprovacao">
            <Navbar/>
            <div className="conteudoAprovacao">
                <h2>Infelizmente sua doação não foi consolidada</h2>
                <h3>Confira suas informações de pagamento e tente novamente!</h3>
                <NavLink to={"/doacoes"}><button className="botaoVoltar">Voltar</button></NavLink>
            </div>
            <Footer/>
        </div>
    )
}