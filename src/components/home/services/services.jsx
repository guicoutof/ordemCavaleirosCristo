import React, {Component} from 'react'
import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import api from '../../../services/api';
import {getInfo} from '../../../services/auth';
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import {NavLink} from 'react-router-dom'

export default class Services extends Component{
    constructor(){
        super()
        this.state={
            loading:true,
            services:[],
        }
    }
    
    async componentDidMount(){
        const response = await api.get('/services')
        this.setState({services:response.data,loading:false})
    }

    async buyCourse(user_id,service_id){
        const response = await api.post(`/servicePayment/${service_id}`)
        window.location.assign(response.data)
        // this.setState({button:response.data})
        // try{
        //     await api.post(`student_courses`,{user_id,course_id})
        //     .then(res=>{
        //         console.log(res)
        //     })
        // }catch(err){
        //     console.log(err)
        //     alert('Você já possui este curso')
        // }
    }

    render(){
        return(
        <div className="courses">
            <div className='title'>
                <h1>SERVICOS</h1>
            </div>
            <div className="cards">
            {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                    :this.state.services.map((c)=>
                    <div key={c.id} className="card">
                        <img className="imagemCurso" src={c.url} alt={`Servico ${c.id}`} />
                        <div className="title" >{c.name}</div>
                        <div className="divInfoCurso">{cortar(c.description)}</div>

                        {/* <div>Livro {c.book}</div> */}
                        <div className="bottom">
                            <div className="price">R$ {c.price}</div>
                            <button className="btn" onClick={()=>this.buyCourse(getInfo().id,c.id)}>Comprar</button>
                        </div>
                        <form action="/processar_pagamento" method="POST">
                        <script
                        src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
                        data-preference-id="$$init_point$$">
                        </script>
                        </form>
                    </div>
                )}
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
    
export class ServicoAprovado extends Component{
    constructor(){
        super()
        this.state={
            link:''
        }
    }
    async componentDidMount(){
        const service_id = this.props.match.params.id
        const user_id = getInfo().id
        await api.post('/service_purchase',{user_id,service_id,paid:true})
        const response = await api.get(`/services/${service_id}`)
        console.log(response)
        window.location.assign(response.data.link)
        this.setState({link:response.data.link})
    }
    render(){
        return(
            <div>
                <Navbar />
                <div>
                    <h2>COMPRA REALIZADA COM SUCESSO</h2>
                </div>
                <button onClick={()=>window.location.assign(this.state.link)}>IR PARA O FORMULARIO</button>

                <Footer/>
            </div>
        )
    }
}
export class ServicoPendente extends Component{

    async componentDidMount(){
        console.log('pendente')
        const service_id = this.props.match.params.id
        const user_id = getInfo().id
        const response = await api.post('/service_purchase',{user_id,service_id,paid:false})
        console.log(response)
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
                <NavLink to={'/servicos'}><button>VOLTAR</button></NavLink>

                <Footer/>
            </div>
        )
    }
}
export function ServicoReprovado (){
    return(
        <div>
            <div>
                <Navbar />
                <div>
                    <h2>COMPRA RECUSADA</h2>
                    <h3>Revise suas informações de pagamento e tente novamente</h3>
                </div>

                <NavLink to={'/servicos'}><button>VOLTAR</button></NavLink>

                <Footer/>
            </div>
        </div>
    )
    
}