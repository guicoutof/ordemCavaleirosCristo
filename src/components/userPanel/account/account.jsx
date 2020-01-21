import React, {Component} from 'react'
import './account.css'
import api from "../../../services/api";
import {login,logout} from '../../../services/auth'
import Confirm from '../../admPanel/confirm/confirm'
import {getInfo} from '../../../services/auth'
import Navbar from '../../home/navbar/navbar'
import Footer from '../../home/footer/footer'
import {NavLink} from 'react-router-dom'

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
            numberOfFees:0,
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
            <div>
                <div>{this.state.msg}
                    <div>Nome</div>
                    <input id="name" type="text" value={this.state.name} onChange={e => this.setState({name:e.target.value})} />
                    <div>Email</div>
                    <input id="email" type="email" value={this.state.email} onChange={e => this.setState({email:e.target.value})} />
                    <div>Senha Antiga</div>
                    <input id="oldsenha" type="password" value={this.state.oldPassword} onChange={e => this.setState({oldPassword:e.target.value})} />
                    <div>Nova Senha</div>
                    <input id="senha" type="password" value={this.state.password} onChange={e => this.setState({password:e.target.value})} />
                    <div>Confirmar Nova Senha</div>
                    <input id="confsenha" type="password" value={this.state.confirmPassword} onChange={e => this.setState({confirmPassword:e.target.value})} />
                    <div>Numero</div>
                    <input id="phone" type="text" value={this.state.phone_number||''} onChange={e => this.setState({phone_number:e.target.value})} />
                    <div>Data de nascimento</div>
                    <input id="birth" type="date" value={this.state.birth_date||''} onChange={e => this.setState({birth_date:e.target.value})} />
                    <div>Cidade</div>
                    <input id="city" type="text" value={this.state.city||''} onChange={e => this.setState({city:e.target.value})} />
                    <div>Estado</div>
                    <input id="state" type="text" value={this.state.state||''} onChange={e => this.setState({state:e.target.value})} />
                    <div>Pais</div>
                    <input id="country" type="text" value={this.state.country||''} onChange={e => this.setState({country:e.target.value})} />                       
                    <div>Tipo de Usuario</div>
                    <div>{this.state.type?this.state.type===2?'Afiliado':'Pendente':'Gratuito'}</div>                      

                    <button onClick={()=>this.submitUser()}>Salvar</button>
                    <button onClick={()=>this.setState({modalC:true})}>EXCLUIR CONTA</button>
                    <Confirm open={this.state.modalC}  title={'Deseja realmente excluir sua conta? Você perdera todos os seus cursos comprados'} close={this.close} confirm={this.confirm}/>
                </div>
                <div><p>Texto que mostra as vantagens de ser afiliado</p>
                    {!this.state.type?
                    <div>
                    <button onClick={()=>this.setState({affiliate:!this.state.affiliate})}>Upgrade para afiliado</button>

                    {this.state.affiliate?
                        <div>
                        <div>R$90 (mensalidade)</div>
                        <input type="number" placeholder="Numero de meses" min="1" value={this.state.numberOfFees} onChange={e => this.setState({numberOfFees:e.target.value})}/>
                        {this.state.numberOfFees?<div><button onClick={()=>this.payment()}>Afiliar-se</button></div>:<div></div>}
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
        // setTimeout(logout(),10000)
    }

    render(){
        return(
            <div>
                <Navbar />
                <div>
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
            <div>
                <Navbar />
                <div>
                <h2>AFILIAÇÃO PENDENTE, AGUARDANDO APROVAÇÃO DO ADMINISTRADOR</h2>
                <h3>Enviar comprovante de pagamento/depósito para o email</h3>
                <h2>cavaleirosdecristostaff@gmail.com</h2>
                </div>
                <NavLink to={'/conta'}><button >VOLTAR</button></NavLink>

                <Footer/>
            </div>
        )
    }
}
export function UserContaReprovado(){

    return(
        <div>
                <Navbar />
                <div>
                    <h2>COMPRA RECUSADA</h2>
                    <h3>Revise suas informações de pagamento e tente novamente</h3>
                </div>
                <NavLink to={'/conta'}><button >VOLTAR</button></NavLink>

                <Footer/>
            </div>
    )
}