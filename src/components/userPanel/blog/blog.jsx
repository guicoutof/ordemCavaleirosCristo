import React, {Component} from 'react'
import './blog.css'
import api from '../../../services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';



export default class Blog extends Component{
    constructor(){
        super()
        this.state={
            posts:[],
            pages:1,
            limite:false,
            loading:true
        }
    }

    async exibirCursos(id){
        this.setState({loading:true})
        const params = {
            page:id,
        }
        await api.get(`/publications`,{params})
        .then(res=>{
            res.data.length<5?this.setState({posts:res.data,page:id,limite:true,loading:false}):this.setState({posts:res.data,page:id,limite:false,loading:false})
        })
        
    }

    componentDidMount(){
        this.exibirCursos(1)
    }

    render(){
        return(
        <div>
            {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                :this.state.posts.map(post=>
                <div key={post.id}>
                    <img className="art0" src={post.url} alt={post.title} />
                    <h1 className="artname0">{post.title}</h1>
                    <div dangerouslySetInnerHTML={{__html: post.text}}></div>
                </div>
                )
            }
            <div>
                {this.state.page>1?<button onClick={()=>this.exibirCursos(this.state.page-1)}>Pagina Anterior</button>:<div></div>}
                {!this.state.limite?<button onClick={()=>this.exibirCursos(this.state.page+1)}>Proxima Pagina</button>:<div></div>}
            </div>
        </div>
        )
    }
}



// export default (props) => {

//     return(
        
//         <div className="backimg">
//             <div className='blog'>
//                     <h1 className='blogTitulo'>BLOG</h1>
//             </div>
//             <div className="divsblog">
//                 <div className="item1">
//                     <div className="imagem1">
                        
//                     </div>
//                     <div className="text1">
//                     <h1 className="tit1">No princípio D'us crious os Céus e a Terra - Trecho do livro "A Queda do Homem Celestial" de Aleph Yaakov, será lançado dia 21 de dezembro</h1>
//                     <p className="cont1">“[...] A teoria aceita hoje pela maioria dos cientistas é a teoria do Big Bang, apresentada em 1946 por George Gamow e que pode ser assim expressa: num dado instante, nosso Universo não existia, e no instante seguinte, passou a existir. Segundo a teoria, há 15 bilhões de anos, apareceu subitamente do nada uma colossal fonte de energia, chamada de “bola de fogo primordial”. Sabemos também, através da teoria da relatividade do físico Albert Einstein, que o espaço é curvo e se comporta como o movimento das águas, devido a força da gravidade que pressiona a matéria para baixo, de acordo com a sua massa; quanto maior a massa, menor será sua volatilidade, e vice-versa, e maior será o seu campo gravitacional e e vice-versa. Portanto, o Espírito de D’us pairava sobre a matéria escura, criou os céus (o espaço) e a terra (apesar de conter massa - matéria - é sem forma e vazia. A mesma classificação que um astrofísico faria para um buraco negro) [...]” </p>
//                     </div>

//                 </div>
//                 <div className="item2">
//                     <div className="imagem2">
                        
//                     </div>
//                     <div className="text2">
//                     <h1 className="tit2">No princípio D'us crious os Céus e a Terra - Trecho do livro "A Queda do Homem Celestial" de Aleph Yaakov, será lançado dia 21 de dezembro</h1>
//                     <p className="cont2">“[...] A teoria aceita hoje pela maioria dos cientistas é a teoria do Big Bang, apresentada em 1946 por George Gamow e que pode ser assim expressa: num dado instante, nosso Universo não existia, e no instante seguinte, passou a existir. Segundo a teoria, há 15 bilhões de anos, apareceu subitamente do nada uma colossal fonte de energia, chamada de “bola de fogo primordial”. Sabemos também, através da teoria da relatividade do físico Albert Einstein, que o espaço é curvo e se comporta como o movimento das águas, devido a força da gravidade que pressiona a matéria para baixo, de acordo com a sua massa; quanto maior a massa, menor será sua volatilidade, e vice-versa, e maior será o seu campo gravitacional e e vice-versa. Portanto, o Espírito de D’us pairava sobre a matéria escura, criou os céus (o espaço) e a terra (apesar de conter massa - matéria - é sem forma e vazia. A mesma classificação que um astrofísico faria para um buraco negro) [...]” </p>
                    

//                     </div>

    
//                 </div>
//                 <div className="item3">
//                     <div className="imagem3">

//                     </div>
//                     <div className="text3">
//                     <h1 className="tit3">No princípio D'us crious os Céus e a Terra - Trecho do livro "A Queda do Homem Celestial" de Aleph Yaakov, será lançado dia 21 de dezembro</h1>
//                     <p className="cont3">“[...] A teoria aceita hoje pela maioria dos cientistas é a teoria do Big Bang, apresentada em 1946 por George Gamow e que pode ser assim expressa: num dado instante, nosso Universo não existia, e no instante seguinte, passou a existir. Segundo a teoria, há 15 bilhões de anos, apareceu subitamente do nada uma colossal fonte de energia, chamada de “bola de fogo primordial”. Sabemos também, através da teoria da relatividade do físico Albert Einstein, que o espaço é curvo e se comporta como o movimento das águas, devido a força da gravidade que pressiona a matéria para baixo, de acordo com a sua massa; quanto maior a massa, menor será sua volatilidade, e vice-versa, e maior será o seu campo gravitacional e e vice-versa. Portanto, o Espírito de D’us pairava sobre a matéria escura, criou os céus (o espaço) e a terra (apesar de conter massa - matéria - é sem forma e vazia. A mesma classificação que um astrofísico faria para um buraco negro) [...]” </p>
                    
                        
//                     </div>
                    
//                 </div>
//                 <div className="item4">
//                     <div className="imagem4">   

//                     </div>
//                     <div className="text4">
//                     <h1 className="tit4">No princípio D'us crious os Céus e a Terra - Trecho do livro "A Queda do Homem Celestial" de Aleph Yaakov, será lançado dia 21 de dezembro</h1>
//                     <p className="cont4">“[...] A teoria aceita hoje pela maioria dos cientistas é a teoria do Big Bang, apresentada em 1946 por George Gamow e que pode ser assim expressa: num dado instante, nosso Universo não existia, e no instante seguinte, passou a existir. Segundo a teoria, há 15 bilhões de anos, apareceu subitamente do nada uma colossal fonte de energia, chamada de “bola de fogo primordial”. Sabemos também, através da teoria da relatividade do físico Albert Einstein, que o espaço é curvo e se comporta como o movimento das águas, devido a força da gravidade que pressiona a matéria para baixo, de acordo com a sua massa; quanto maior a massa, menor será sua volatilidade, e vice-versa, e maior será o seu campo gravitacional e e vice-versa. Portanto, o Espírito de D’us pairava sobre a matéria escura, criou os céus (o espaço) e a terra (apesar de conter massa - matéria - é sem forma e vazia. A mesma classificação que um astrofísico faria para um buraco negro) [...]” </p>
                    

//                     </div>
//                 </div>

//             </div>

//         </div>
    
    
//     )
// }