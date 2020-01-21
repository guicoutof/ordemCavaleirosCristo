import React, { Component } from 'react';

import './cadastro.css';
import api from "../../../services/api";
import MdPersonFree from 'react-ionicons/lib/MdPerson'
import MdPersonPremium from 'react-ionicons/lib/MdPersonAdd'
import { withRouter } from 'react-router-dom'

class CadScreen extends Component {
  state = {
    name: "",
    birth_date: "",
    email: "",
    password: "",
    confsenha:"",
    city: "",
    state: "",
    country: "",
    phone_number: "",
    type: 0,
    numberOfFees:0,
    id:0,
    button:null,
    error:"",
  };
  async handleSubmit(){
    const{email,password,confsenha,name,city,state,country,phone_number,type,birth_date} = this.state;
    if(!email || !password ||  !confsenha || !name || !(type == 0 || type == 2)){
      this.setState({error: "Preencha todos os campos para continuar!"})
    }else{
      if(password !== confsenha){
        this.setState({error: "Senhas não conferem!"})
      }else{
        try{
          const res = await api.post("/users",{email,password,name,city,birth_date,state,country,phone_number,type:0,module:1});
          this.setState({
            error:"Criado com sucesso",
            name: "",
            birth_date: "",
            email: "",
            password: "",
            confsenha:"",
            city: "",
            state: "",
            country: "",
            phone_number: "",
            type: 0,
            numberOfFees:0,
            id:res.data.id
          });
        }catch(err){
          this.setState({error:'Problema ao criar a conta'})
        }
      }
    }
    
  }
  
  async payment(){
    alert('Concordo que ao me afiliar, perco acesso ao sistema devido a personalização dos afiliados')
    try{
      await this.handleSubmit()
      const {numberOfFees,id} = this.state
      const type = false
      const response = await api.post('/affiliatePayment',{numberOfFees,type})
      console.log(response)
      this.setState({button:response.data})
    }catch(err){
      this.setState({error:'Algo de errado aconteceu'})
    }
  }
  render() {
    return (
      <div className="App">
        <div className="cad-container">
          <div className="cad-form">
            <div className="cad-input-group">
              <h1>Cadastro</h1>    
                  <div className="divNomeData">
                    <div className="divInputCadastroNome">
                      <label htmlFor="name" className="label-input">Nome Completo</label>
                      <input id="name" className="cad-input-lss" type="text" value={this.state.name} onChange={e => this.setState({name:e.target.value})} required/>
                    </div>

                    <div className="divInputCadastroData">
                      <label htmlFor="birth_date" className="label-input">Data de Nascimento</label>
                      <input id="birth_date" className="cad-input-sm" type="date" value={this.state.birth_date} onChange={e => this.setState({birth_date:e.target.value})}/>
                    </div>
                  </div>

                  <div className="divCadastroEndereco">
                    <div className="divInputCadastroCidade">
                      <label htmlFor="city" className="label-input">Cidade</label>
                      <input id="city" className="cad-input-sm" type="text" value={this.state.city} onChange={e => this.setState({city:e.target.value})}/>
                    </div>
                    
                    <div className="divInputCadastroEstado">
                      <label htmlFor="state" className="label-input">Estado</label>
                      <input id="state" className="cad-input-sm" type="text" value={this.state.state} onChange={e => this.setState({state:e.target.value})}/>
                    </div>
                  </div>
                  
                  <div className="divInputCadastro">
                    <label htmlFor="country" className="label-input">País</label>
                    <input id="country" className="cad-input-ssm" type="text" value={this.state.country} onChange={e => this.setState({country:e.target.value})}/>
                  </div>
                  
                  <div className="divContato">
                    <div className="divInputCadastroContato">
                      <label htmlFor="phone_number" className="label-input">Celular</label>
                      <input id="phone_number" className="cad-input-ssm" type="text" value={this.state.phone_number} onChange={e => this.setState({phone_number:e.target.value})}/>
                    </div>

                    <div className="divInputCadastroContato">
                      <label htmlFor="email" className="label-input">E-mail</label>
                      <input id="email" className="cad-input-sm" type="email" value={this.state.email} onChange={e => this.setState({email:e.target.value})} required/>
                    </div>  
                  </div>

                  <div className="divSenha">
                    <div className="divInputCadastroSenha">
                      <label htmlFor="password" className="label-input">Senha</label>
                      <input id="password" className="cad-input-ssm" type="password" value={this.state.password} onChange={e => this.setState({password:e.target.value})} required/>
                    </div>

                    <div className="divInputCadastroSenha">
                      <label htmlFor="confsenha" className="label-input">Confirmar Senha</label>
                      <input id="confsenha" className="cad-input-ssm" type="password" value={this.state.confsenha} onChange={e => this.setState({confsenha:e.target.value})} required/>     
                    </div>
                  </div>
            </div>
            <h2 className="cad-type-header">Tipo de cadastro:</h2>
            <div className="cad-option-group">
              <div className="cad-option">
                    <div className="divVantagens">
                      <span className="icon-check">
                        <MdPersonFree color="#000000" fontSize="3rem" />
                        </span>
                      <span className="icon-check">
                        <MdPersonPremium color="#000000" fontSize="3rem" />
                        </span>
                      <span className="cad-option-view-header">Vantagens:</span>
                    </div>
                  
                    <div className="divVantagens">
                      <span className="icon-check"><b>&#10003;</b></span>
                      <span className="icon-check"><b>&#10003;</b></span>
                      <span className="cad-option-view">Acesso a Artigos</span>  
                    </div>                                        

                    <div className="divVantagens">
                      <span className="icon-check"><b>&#10003;</b></span>
                      <span className="icon-check"><b>&#10003;</b></span>
                      <span className="cad-option-view">Acesso a Cursos</span>  
                    </div>                                      

                    <div className="divVantagens">
                      <span className="icon-check">&#10008;</span>
                      <span className="icon-check"><b>&#10003;</b></span>
                      <span className="cad-option-view">Acompanhamento via WhatsApp ou Skype</span>  
                    </div>                        

                    <div className="divVantagens">
                      <span className="icon-check">&#10008;</span>
                      <span className="icon-check"><b>&#10003;</b></span>
                      <span className="cad-option-view">Acesso ao grupo fechado da Ordem ( WhatsApp )</span>  
                    </div>                        

                    <div className="divVantagens">
                      <span className="icon-check">&#10008;</span>
                      <span className="icon-check"><b>&#10003;</b></span>
                      <span className="cad-option-view">Certificado de Estudante de Mistérios ao concluir o cronograma</span>  
                    </div>                        

                    <div className="divVantagens">
                      <span className="icon-check">&#10008;</span>
                      <span className="icon-check"><b>&#10003;</b></span>
                      <span className="cad-option-view">Poderá participar dos encontros anuais da OCC, onde ocorrem palestras, rituais, orientações filosóficas e vivência espiritual</span>  
                    </div>                          

                    <div className="divCheckBox">
                      <div className="divInputCheckBox">
                        <input id="cad-free" className="checkmark" type="radio" name="accountType" onClick={e => this.setState({type:0})}/>
                      </div>
                      <div className="divInputCheckBox">
                        <input id="cad-afiliado" className="checkmark" type="radio" name="accountType" onClick={e => this.setState({type:2})}/>  
                      </div>
                    </div>
                    <div>{this.state.error}</div>
                    {this.state.type===2?
                    <div>
                      <div>R$90 (mensalidade)</div>
                      <input type="number" placeholder="Numero de meses" min="1" value={this.state.numberOfFees} onChange={e => this.setState({numberOfFees:e.target.value})}/>
                      {this.state.numberOfFees?<div><button onClick={()=>this.payment()}>Afiliar-se</button></div>:<div></div>}
                    </div>
                    :<div></div>}         
                    {this.state.button?
                    <div>
                      <a className="btn" href={this.state.button} target="_blank" rel="noopener noreferrer">Pagar</a>
                    </div>
                    :<div></div>}
              </div>
            </div>
            {this.state.type===0?<button type="submit" className="cad-btn" onClick={()=>this.handleSubmit()}>Concluir</button>:<div></div>}

          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(CadScreen);

export class CadastroAprovado extends Component{
  constructor(){
    super()
  }
  async componentDidMount(){
    // const resaponse = await api.post('approve')
    // console.log(response)
  }
  render(){

    return(
      <div>
       APROVADO
    </div>
    )
  }
}
export class CadastroPendente extends Component{
  constructor(){
    super()
  }
  async componentDidMount(){
    // const resaponse = await api.post('approve')
    // console.log(response)
  }
  render(){

    return(
      <div>
        PENDENTE
    </div>
    )
  }
}
export function CadastroReprovado(){
  return(
    <div>
      REPROVADO
    </div>
  )
}