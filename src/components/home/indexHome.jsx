import React from 'react'
import './indexHome.css'

import Navbar from './navbar/navbar'
import Title from './title/title'
import Footer from './footer/footer'
import UserReviews from './reviews/userReviews'
import Courses from './courses/courses'
import Article from './articlespreview/articlespreview'

import Image from '../../assets/img/test.png'

export default function index(){
    const courses = [
        {pk:0,title:'Misticismo Católico A Fé em Ação',image:Image},
        {pk:1,title:'Kabbalah',image:Image},
        {pk:2,title:'Alquimia',image:Image},
        {pk:3,title:'Alquimi',image:Image},
        {pk:4,title:'Alquim',image:Image},
        {pk:5,title:'Alqui',image:Image},
        {pk:6,title:'Alqu',image:Image},
        {pk:7,title:'Alq',image:Image},
        {pk:8,title:'Al',image:Image},
        {pk:9,title:'A',image:Image},
        {pk:10,title:'Alquimia',image:Image},
                ];

    const feedbacks = [
                    {pk:0,name:'Kauan',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
                    {pk:1,name:'Hugo',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
                    {pk:2,name:'Evandro',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
                    {pk:3,name:'Yago',text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum velit eget lectus. Sed vitae accumsan odio. Etiam porttitor, risus et accumsan bibendum, urna ante tempus nulla, sit amet dapibus lorem nisi et lorem. Integer nec placerat justo. Etiam volutpat iaculis lacus vitae lobortis.'},
                    ];

    return(
        <div>
            <a href="https://wa.me/5514996903532" target='_blank' rel="noopener noreferrer">
                <img src={require('../../assets/img/wpp.png')} alt="Background" className="whats" />
            </a>
            <div className='index'>
                <Navbar controle={-1}/>
                <Title titulo='ORDEM DOS CAVALEIROS DE CRISTO!' subtitulo='TREINAMENTO ESPIRITUAL E FILOSÓFICO'/>
                <Article title="No princípio D'us crious os Céus e a Terra"
                         text='“[...] A teoria aceita hoje pela maioria dos cientistas é a teoria do Big Bang, apresentada em 1946 por George Gamow e que pode ser assim expressa: num dado instante, nosso Universo não existia, e no instante seguinte, passou a existir. Segundo a teoria, há 15 bilhões de anos, apareceu subitamente do nada uma colossal fonte de energia, chamada de “bola de fogo primordial”. Sabemos também, através da teoria da relatividade do físico Albert Einstein, que o espaço é curvo e se comporta como o movimento das águas, devido a força da gravidade que pressiona a matéria para baixo, de acordo com a sua massa; quanto maior a massa, menor será sua volatilidade, e vice-versa, e maior será o seu campo gravitacional e e vice-versa. Portanto, o Espírito de D’us pairava sobre a matéria escura, criou os céus (o espaço) e a terra (apesar de conter massa - matéria - é sem forma e vazia. A mesma classificação que um astrofísico faria para um buraco negro) [...]” ' 
                         references="Trecho do livro “A Queda do Homem Celestial” de Aleph Yaakov, será lançado dia 21 de dezembro."
                         />
                <Courses cards={courses} />
                <UserReviews feedbacks={feedbacks} />
                <Footer/>
            </div>
        </div>
    )
}