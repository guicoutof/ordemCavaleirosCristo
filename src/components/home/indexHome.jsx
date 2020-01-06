import React from 'react'
import './indexHome.css'
import {courses, services, feedbacks} from '../../services/api'

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

export default function index(){
    const coursesSpotlight = courses;
    return(
        <div className='index'>
            <Navbar/>
            <Title titulo='ORDEM DOS CAVALEIROS DE CRISTO!' subtitulo='TREINAMENTO ESPIRITUAL E FILOSÓFICO'/>
            <Article title="No princípio D'us crious os Céus e a Terra"
                        text='“[...] A teoria aceita hoje pela maioria dos cientistas é a teoria do Big Bang, apresentada em 1946 por George Gamow e que pode ser assim expressa: num dado instante, nosso Universo não existia, e no instante seguinte, passou a existir. Segundo a teoria, há 15 bilhões de anos, apareceu subitamente do nada uma colossal fonte de energia, chamada de “bola de fogo primordial”. Sabemos também, através da teoria da relatividade do físico Albert Einstein, que o espaço é curvo e se comporta como o movimento das águas, devido a força da gravidade que pressiona a matéria para baixo, de acordo com a sua massa; quanto maior a massa, menor será sua volatilidade, e vice-versa, e maior será o seu campo gravitacional e e vice-versa. Portanto, o Espírito de D’us pairava sobre a matéria escura, criou os céus (o espaço) e a terra (apesar de conter massa - matéria - é sem forma e vazia. A mesma classificação que um astrofísico faria para um buraco negro) [...]” ' 
                        references="Trecho do livro “A Queda do Homem Celestial” de Aleph Yaakov, será lançado dia 21 de dezembro."
                        />
            <FeaturedCourses cards={coursesSpotlight} />
            <UserReviews feedbacks={feedbacks} />
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
            <Courses title={'CURSOS'} courses={courses}/>
            <Footer/>
        </div>
    )
}
export function indexServices(){

    return(
        <div className='index'>
            <Navbar/>
            <Courses title={'SERVIÇOS'}courses={services}/>
            <Footer/>
        </div>
    )
}