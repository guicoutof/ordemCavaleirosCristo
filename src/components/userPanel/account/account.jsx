import React, {Component} from 'react'
import './account.css'
import api from "../../../services/api";
import {login,logout} from '../../../services/auth'
import Confirm from '../../admPanel/confirm/confirm'
import {getInfo} from '../../../services/auth'
import Navbar from '../../home/navbar/navbar'
import Footer from '../../home/footer/footer'
import {NavLink} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default class Account extends Component{
    constructor(){
        super()
        this.state={
            id:0,
            name:'',
            email:'',
            oldPassword:'',
            password:'',
            confirmPassword:'',
            phone_number:'',
            birth_date:'',
            city:'',
            state:'',
            country:'',
            type:0,
            modalC:false,
            numberOfFees:1,
            affiliate:false,
            msg:''
        }

        this.close = this.close.bind(this)
        this.confirm = this.confirm.bind(this)
    }
    
    async componentDidMount(){
        await api.get('/getUser')
            .then(res=>{
                this.setState({
                    id:res.data.id,
                    name:res.data.name,
                    email:res.data.email,
                    phone_number:res.data.phone_number,
                    birth_date:res.data.birth_date,
                    city:res.data.city,
                    state:res.data.state,
                    country:res.data.country,
                    type:res.data.type,
                })
            })

    }

    async submitUser(){

        const {email,oldPassword,password,confirmPassword,name,birth_date,city,state,country,phone_number,type} = this.state
        if(oldPassword && (!password || !confirmPassword)){
            this.setState({msg: "Preencha a nova senha para continuar!"})
          }else{
            try{
                if(password === confirmPassword){
                    await api.put("/users",{email,oldPassword,password,confirmPassword,name,birth_date,city,state,country,phone_number,type});
                    this.setState({msg:"Usuário atualizado"})
                    const response = await api.post("/sessions",{email,password});
                    login(response.data.token,response.data.user);
                    window.location.reload();
                }else{
                    this.setState({msg:'As senhas não conferem'})
                }
            }catch(err){
                // console.log(err)
                this.setState({msg:'Usuário não pode ser atualizado'})
            }  
          }
    }

    close(){
        this.setState({modalC:false})
    }

    async confirm(){
        this.setState({modalC:false})
        await api.delete(`/users`)
        logout()
    }

    async payment(){
        alert('Concordo que ao me afiliar, perco acesso ao sistema devido a personalização dos afiliados')
        try{
          const {numberOfFees} = this.state
          const id = getInfo().id
          const type = true
          console.log(numberOfFees,id)
          const response = await api.post('/affiliatePayment',{numberOfFees,type})
          window.location.assign(response.data)
        }catch(err){
          this.setState({msg:'Algo de errado aconteceu'})
        }
      }

    render(){
        return(
            <div className="divContainerInfoConta">
                <div className="headerInfoConta">
                    <h1 className="titleInfoConta">Informações da Conta</h1>
                </div>
                <div>{this.state.msg}
                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="name">Nome</label>
                        <input className="inputInfoConta" id="name" type="text" value={this.state.name} onChange={e => this.setState({name:e.target.value})} />
                    </div>
                    
                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="email">Email</label>
                        <input className="inputInfoConta" id="email" type="email" value={this.state.email} onChange={e => this.setState({email:e.target.value})} />
                    </div>

                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="oldsenha">Senha Antiga</label>
                        <input className="inputInfoConta" id="oldsenha" type="password" value={this.state.oldPassword} onChange={e => this.setState({oldPassword:e.target.value})} />
                    </div>

                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="senha">Senha Nova</label>
                        <input className="inputInfoConta" id="senha" type="password" value={this.state.password} onChange={e => this.setState({password:e.target.value})} />
                    </div>

                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="confsenha">Confirmar Senha</label>
                        <input className="inputInfoConta" id="confsenha" type="password" value={this.state.confirmPassword} onChange={e => this.setState({confirmPassword:e.target.value})} />
                    </div>

                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="phone">Telefone</label>
                        <input className="inputInfoConta" id="phone" type="text" value={this.state.phone_number||''} onChange={e => this.setState({phone_number:e.target.value})} />
                    </div>

                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="birth">Data de Nascimento</label>
                        <input className="inputInfoConta" id="birth" type="date" value={this.state.birth_date||''} onChange={e => this.setState({birth_date:e.target.value})} />
                    </div>

                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="city">Cidade</label>
                        <input className="inputInfoConta" id="city" type="text" value={this.state.city||''} onChange={e => this.setState({city:e.target.value})} />
                    </div>

                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="state">Estado</label>
                        <input className="inputInfoConta" id="state" type="text" value={this.state.state||''} onChange={e => this.setState({state:e.target.value})} />
                    </div>

                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="country">País</label>
                        <input className="inputInfoConta" id="country" type="text" value={this.state.country||''} onChange={e => this.setState({country:e.target.value})} />                       
                    </div>

                    <div className="divInfoConta">
                        <label className="labelInfoConta" htmlFor="">Cadastro</label>
                        <div>{this.state.type?this.state.type===2?'Afiliado':'Pendente':'Gratuito'}</div>                      
                    </div>

                    <div className="divBotoesInfoConta">
                        <abbr title="Salvar"><button className="botaoInfoConta verde" onClick={()=>this.submitUser()}>
                            <FontAwesomeIcon className="icon" icon={faSave} size="2x"/>
                        </button></abbr>
                        <abbr title="Excluir conta"><button className="botaoInfoConta vermelho" onClick={()=>this.setState({modalC:true})}>
                            <FontAwesomeIcon className="icon" icon={faTrashAlt} size="2x"/>
                        </button></abbr>
                    </div>
                    <Confirm open={this.state.modalC}  title={'Deseja realmente excluir sua conta? Você perderá todos os seus cursos comprados'} close={this.close} confirm={this.confirm}/>
                </div>
                <div>
                    {!this.state.type?
                    <div className="divUpgradeInfoConta">
                        <p className="descVantagens"><strong>Vantagens da afiliação:</strong> Acesso a Artigos, Acesso a Cursos, Acompanhamento via WhatsApp ou Skype,
                         Acesso ao grupo fechado da Ordem no WhatsApp, Certificado de Estudante de Mistérios ao concluir o cronograma, Poderá participar dos encontros anuais da OCC, onde ocorrem palestras, rituais, orientações filosóficas e vivência espiritual</p>
                        <button className="botaoUpgradeInfoConta" onClick={()=>this.setState({affiliate:!this.state.affiliate})}>Upgrade para afiliado</button>

                        {this.state.affiliate?
                            <div className="divUpgradeInfoConta">
                                <h3>Mensalidade - R$ 90,00</h3>
                                <div>
                                    <p className="cad-detalhes">O pagamento pode ser feito com ou sem conta no mercado pago, cartão, boleto ou depósito na conta <br/><br/>
                                    <strong>Bruno Brisola Gonçalves Claro</strong><br/>
                                            <strong>Banco do Brasil</strong><br/>
                                            <strong>CPF :</strong> 417.248.418-23<br/>
                                            <strong>Agencia :</strong> 203-8<br/>
                                            <strong>Conta corrente :</strong>  44602-5<br/></p>
                                </div>
                                <h3>Número de mêses</h3>
                                <input className="inputInfoConta" type="number" placeholder="Numero de meses" min="1" value={this.state.numberOfFees} onChange={e => this.setState({numberOfFees:e.target.value})}/>
                                {this.state.numberOfFees?<div><button className="botaoUpgradeInfoConta" onClick={()=>this.payment()}>Afiliar-se</button></div>:<div></div>}
                            </div>
                        :<div></div>}
                        
                    </div>
                    :<div></div>}

                </div>
            </div>
        )
    }
}

export class UserContaAprovado extends Component{

    async componentDidMount(){
        const response = await api.get('getUser')
        await api.put('/users',{name:response.data.name,email:response.data.email,type:2})
        setTimeout(logout(),20000)
    }

    render(){
        return(
            <div className="containerAprovacao">
                <Navbar />
                <div className="conteudoAprovacao">
                    <h2>AFILIAÇÃO REALIZADA COM SUCESSO</h2>
                    <h3>Realizamos seu logout</h3>
                </div>
                <Footer/>
            </div>
        )
    }
}
export class UserContaPendente extends Component{

    async componentDidMount(){
        let response = await api.get('getUser')
        await api.put('/users',{name:response.data.name,email:response.data.email,type:1})
    }

    render(){
        return(
            <div className="containerAprovacao">
                <Navbar />
                <div className="conteudoAprovacao">
                <h2>AFILIAÇÃO PENDENTE, AGUARDANDO APROVAÇÃO DO ADMINISTRADOR</h2>
                <h3>Enviar comprovante de pagamento/depósito para o email</h3>
                <h2>cavaleirosdecristostaff@gmail.com</h2>
                <NavLink to={'/conta'}><button className="botaoVoltar">VOLTAR</button></NavLink>
                </div>

                <Footer/>
            </div>
        )
    }
}
export function UserContaReprovado(){

    return(
        <div className="containerAprovacao">
                <Navbar />
                <div className="conteudoAprovacao">
                    <h2>COMPRA RECUSADA</h2>
                    <h3>Revise suas informações de pagamento e tente novamente</h3>
                    <NavLink to={'/conta'}><button className="botaoVoltar">VOLTAR</button></NavLink>
                </div>

                <Footer/>
            </div>
    )
}