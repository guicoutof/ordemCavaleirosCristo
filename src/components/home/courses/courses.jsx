import React,{Component} from 'react'
import './courses.css'
import api from '../../../services/api'
import {getInfo, getToken} from '../../../services/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {NavLink} from 'react-router-dom'
import Modal from 'react-modal';

export default class Courses extends Component{
    constructor(){
        super()
        this.state={
            courses:[],
            loading:true,
            button:null,
            page:1,
            limite:false,

            modal:false,
            idModal:1,
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
        if(getToken()){
            let modulo = getInfo().module;
            const response = await api.get('/modules');
            modulo  = response.data[modulo-1].module.id;

            await api.get(`/courses/module/${modulo}`,{params})
                .then(
                    res=>{
                        res.data.length<3?this.setState({courses:res.data,page:id,limite:true,loading:false}):this.setState({courses:res.data,page:id,limite:false,loading:false})
                    }
                )
        }else{
            let modulo = 1;
            const response = await api.get('/modules');
            if(response.data)modulo  = response.data[modulo-1].module.id;
            
            await api.get(`/courses/module/${modulo}`,{params})
                .then(
                    res=>{
                        res.data.length<3?this.setState({courses:res.data,page:id,limite:true,loading:false}):this.setState({courses:res.data,page:id,limite:false,loading:false})
                    }
                )
        }
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
                    :this.state.courses.length>0?
                    this.state.courses.map((c)=>
                    <div key={c.id} className="card">
                        <img className="imagemCurso" src={c.url} alt={` ${c.name}`} />
                        {c.module?<div className="module">Modulo {c.module_id}</div>:<div></div>}
                        <div className="title" >{c.name}</div>
                        <Modal className="modalTamanho" isOpen={this.state.modal} onRequestClose={()=>this.setState({modal:false})} ariaHideApp={false} >
                            <img className="imagemCurso" src={this.state.courses[this.state.idModal-1].url} alt={` ${this.state.courses[this.state.idModal-1].name}`} />
                            <div className="title" >{this.state.courses[this.state.idModal-1].name}</div>
                            <div className="divInfoCurso">{this.state.courses[this.state.idModal-1].description}</div>
                            <div className="divInfoCurso">Duração: {this.state.courses[this.state.idModal-1].hours} horas</div>
                            <div className="divInfoCurso">Assistencia: {this.state.courses[this.state.idModal-1].assistance}</div>
                            <div className="divInfoCurso">Livro: {c.book}</div>
                            <div className="modalModulo">
                                <button className={'abrirModulo'} onClick={()=>this.setState({modal:false})}>Voltar</button>
                            </div>
                        </Modal>
                        {/* <appr title={c.description}> */}
                            <div className="divInfoCurso">{cortar(c.description)}</div>
                            {c.description.length>40?<div className=" divInfoCurso verMais" onClick={()=>this.setState({modal:true,idModal:c.id})}>Ver mais</div>:<div></div>}
                            {/* </appr> */}
                        <div>
                            <div className="divInfoCurso">Livro: {c.book}</div>
                            <div className="divInfoCurso">Duração: {c.hours} horas</div>
                            <div className="divInfoCurso">Assistencia: {c.assistance}</div>
                        </div>
                        {/* <div>Livro {c.book}</div> */}
                        <div className="bottom">
                            <div className="price">R$ {c.price}</div>
                            {/* <div>
                            <a className="btn" href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=237102186-12e0c26e-66dc-4d47-b812-268c84c2ea1a" target="_blank" rel="noopener noreferrer">Pagar</a>
                        </div> */}

                            {getToken()&&getInfo().type!==2?<button className="btn" onClick={()=>this.buyCourse(getInfo().id,c.id)}>Comprar</button>:<div></div>}
                        </div>
                    </div>
                ):<h3>Ainda não há nenhum curso</h3>
            }
            </div>
            <div className="divBotoesProxPagCursos">
                {this.state.page>1?<button className="botaoVoltarCursos" onClick={()=>this.exibirCursos(this.state.page-1)}>Página Anterior</button>:<div></div>}
                {!this.state.limite?<button className="botaoVoltarCursos" onClick={()=>this.exibirCursos(this.state.page+1)}>Próxima Página</button>:<div></div>}
            </div>
            <div>
                <p className="cad-detalhes">O pagamento pode ser feito com ou sem conta no mercado pago, cartão, boleto ou depósito na conta <br/><br/>
                <strong>Bruno Brisola Gonçalves Claro</strong><br/>
                        <strong>Banco do Brasil</strong><br/>
                        <strong>CPF :</strong> 417.248.418-23<br/>
                        <strong>Agencia :</strong> 203-8<br/>
                        <strong>Conta corrente :</strong>  44602-5<br/></p>
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
            <div className="containerAprovacao">
                <Navbar />
                <div className="conteudoAprovacao">
                    <h2>COMPRA REALIZADA COM SUCESSO</h2>
                    <NavLink to={'/biblioteca'}><button className="toLibrary">IR PARA BIBLIOTECA</button></NavLink>
                    <NavLink to={'/cursos'}><button className="botaoVoltar">VOLTAR</button></NavLink>
                </div>
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
            <div className="containerAprovacao">
                <Navbar />
                <div className="conteudoAprovacao">
                    <h2>COMPRA PENDENTE, AGUARDANDO APROVAÇÃO DO ADMINISTRADOR</h2>
                    <h3>Enviar comprovante de pagamento/depósito para o email</h3>
                    <h2>cavaleirosdecristostaff@gmail.com</h2>
                    <NavLink to={'/biblioteca'}><button className="toLibrary">IR PARA BIBLIOTECA</button></NavLink>
                    <NavLink to={'/cursos'}><button className="botaoVoltar">VOLTAR</button></NavLink>
                </div>

                <Footer/>
            </div>
        )
    }
}
export function CursoReprovado (){
    return(
        <div className="containerAprovacao">
                <Navbar />
                <div className="conteudoAprovacao">
                    <h2>COMPRA RECUSADA</h2>
                    <h3>Revise suas informações de pagamento e tente novamente</h3>
                    <NavLink to={'/biblioteca'}><button className="toLibrary">IR PARA BIBLIOTECA</button></NavLink>
                    <NavLink to={'/cursos'}><button className="botaoVoltar">VOLTAR</button></NavLink>
                </div>

                <Footer/>
        </div>
    )
    
}