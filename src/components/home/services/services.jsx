import React, {Component} from 'react'
import './services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import api from '../../../services/api';
import {getInfo} from '../../../services/auth';

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
                            <button className="btn" onClick={()=>this.buyCourse(getInfo().id,c)}>Comprar</button>
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