import React, {Component} from 'react'
import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import api from '../../../services/api';
import {getInfo, getToken} from '../../../services/auth';
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
                <h1>SERVIÇOS</h1>
            </div>
            <div className="cards">
            {this.state.loading?<FontAwesomeIcon className="icon" icon={faCircleNotch} size="3x" spin/>
                    :this.state.services.map((c)=>
                    <div key={c.id} className="card">
                        <img className="imagemCurso" src={c.url} alt={`Servico ${c.id}`} />
                        <div className="title" >{c.name}</div>
                        <abbr title={c.description}><div className="divInfoCurso">{cortar(c.description)}</div></abbr>

                        {/* <div>Livro {c.book}</div> */}
                        <div className="bottom">
                            <div className="price">R$ {c.price}</div>
                            {getToken()&&getInfo().type!==2?<button className="btnComprarServico" onClick={()=>this.buyCourse(getInfo().id,c.id)}>Comprar</button>:<div></div>}
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
            <div className="containerAprovacao">
                <Navbar />
                <div className="conteudoAprovacao">
                    <h2>COMPRA REALIZADA COM SUCESSO</h2>
                    <button onClick={()=>window.location.assign(this.state.link)}>IR PARA O FORMULARIO</button>
                </div>

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
            <div className="containerAprovacao">
                <Navbar />
                <div className="conteudoAprovacao">
                    <h2>COMPRA PENDENTE, AGUARDANDO APROVAÇÃO DO ADMINISTRADOR</h2>
                    <h3>Enviar comprovante de pagamento/depósito para o email</h3>
                    <h2>cavaleirosdecristostaff@gmail.com</h2>
                    <h4>O link para o formulário será enviado ao seu email assim que o administrador confirmar seu pagamento</h4>
                    <NavLink to={'/servicos'}><button className="botaoVoltar">VOLTAR</button></NavLink>
                </div>

                <Footer/>
            </div>
        )
    }
}
export function ServicoReprovado (){
    return(
        <div className="containerAprovacao">
                <Navbar />
                <div className="conteudoAprovacao">
                    <h2>COMPRA RECUSADA</h2>
                    <h3>Revise suas informações de pagamento e tente novamente</h3>
                    <NavLink to={'/servicos'}><button className="botaoVoltar">VOLTAR</button></NavLink>
                </div>

                <Footer/>
        </div>
    )
    
}