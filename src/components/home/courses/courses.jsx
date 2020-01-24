import React,{Component} from 'react'
import './courses.css'
import api from '../../../services/api'
import {getInfo} from '../../../services/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {NavLink} from 'react-router-dom'

export default class Courses extends Component{
    constructor(){
        super()
        this.state={
            courses:[],
            loading:true,
            button:null,
            page:1,
            limite:false
        }
    }

    componentDidMount = ()=>{
        this.exibirCursos(1)
    }

    async exibirCursos(id){
        this.setState({loading:true})
        const params = {
            page:id,
        }
        const modulo = getInfo().module;
        await api.get(`/courses/module/${modulo}`,{params})
            .then(
                res=>{
                    res.data.length<3?this.setState({courses:res.data,page:id,limite:true,loading:false}):this.setState({courses:res.data,page:id,limite:false,loading:false})
                }
            )
    }

    async buyCourse(course_id){
        const response = await api.post(`/coursePayment/${course_id}`)
        window.location.assign(response.data)
    }

    render(){
        return(
        <div className="courses">
            <div className='title'>
                <h1>CURSOS</h1>
            </div>
            <div className="cards">
                {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                    :this.state.courses.map((c)=>
                    <div key={c.id} className="card">
                        <img className="imagemCurso" src={c.url} alt={`Curso ${c.id}`} />
                        {c.module?<div className="module">Modulo {c.module_id}</div>:<div></div>}
                        <div className="title" >{c.name}</div>
                        <appr title={c.description}><div className="divInfoCurso">{cortar(c.description)}</div></appr>
                        <div>
                            <div className="divInfoCurso">Duração: {c.hours} horas</div>
                            <div className="divInfoCurso">Assistencia: {c.assistance}</div>
                        </div>
                        {/* <div>Livro {c.book}</div> */}
                        <div className="bottom">
                            <div className="price">R$ {c.price}</div>
                            {/* <div>
                            <a className="btn" href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=237102186-12e0c26e-66dc-4d47-b812-268c84c2ea1a" target="_blank" rel="noopener noreferrer">Pagar</a>
                        </div> */}

                            <button className="btn" onClick={()=>this.buyCourse(getInfo().id,c.id)}>Comprar</button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                {this.state.page>1?<button onClick={()=>this.exibirCursos(this.state.page-1)}>Pagina Anterior</button>:<div></div>}
                {!this.state.limite?<button onClick={()=>this.exibirCursos(this.state.page+1)}>Proxima Pagina</button>:<div></div>}
            </div>
            <div>
                <h4 className="cad-detalhes">Os pagamento pode ser feito com ou sem conta no mercado pago, cartão, boleto ou depósito na conta </h4>
                    Bruno Brisola Gonçalves Claro <br/>
                    Banco do Brasil <br/>
                    <strong>CPF :</strong> 417.248.418-23 <br/>
                    <strong>Agencia :</strong> 203-8 <br/>
                    <strong>Conta corrente :</strong>  44602-5 <br/>
            </div>
        </div>
        )
    }
}

function cortar(minhaString){
    if (minhaString.length > 40) 
        return minhaString.slice(0, 40)+'...' 
    else return minhaString
}

export class CursoAprovado extends Component{
    async componentDidMount(){
        const course_id = this.props.match.params.id
        const user_id = getInfo().id
        await api.post('/student_courses',{user_id,course_id,paid:true})
    }
    render(){
        return(
            <div>
                <Navbar />
                <div>
                    <h2>COMPRA REALIZADA COM SUCESSO</h2>
                </div>
                <NavLink to={'/biblioteca'}><button>IR PARA BIBLIOTECA</button></NavLink>
                <NavLink to={'/cursos'}><button>VOLTAR</button></NavLink>

                <Footer/>
            </div>
        )
    }
}
export class CursoPendente extends Component{
    async componentDidMount(){
        const course_id = this.props.match.params.id
        const user_id = getInfo().id
        await api.post('/student_courses',{user_id,course_id,paid:false})
    }
    render(){
        return(
            <div>
                <Navbar />
                <div>
                    <h2>COMPRA PENDENTE, AGUARDANDO APROVAÇÃO DO ADMINISTRADOR</h2>
                    <h3>Enviar comprovante de pagamento/depósito para o email</h3>
                    <h2>cavaleirosdecristostaff@gmail.com</h2>
                </div>
                <NavLink to={'/biblioteca'}><button>IR PARA BIBLIOTECA</button></NavLink>
                <NavLink to={'/cursos'}><button>VOLTAR</button></NavLink>

                <Footer/>
            </div>
        )
    }
}
export function CursoReprovado (){
    return(
        <div>
            <div>
                <Navbar />
                <div>
                    <h2>COMPRA RECUSADA</h2>
                    <h3>Revise suas informações de pagamento e tente novamente</h3>
                </div>
                <NavLink to={'/biblioteca'}><button>IR PARA BIBLIOTECA</button></NavLink>
                <NavLink to={'/cursos'}><button>VOLTAR</button></NavLink>

                <Footer/>
            </div>
        </div>
    )
    
}