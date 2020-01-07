import React, { Component } from 'react';

import './cadastro.css';
import api from "../../../services/api";
import MdPersonFree from 'react-ionicons/lib/MdPerson'
import MdPersonPremium from 'react-ionicons/lib/MdPersonAdd'

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
    type: "",
    error:"",
  };
  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    const{email,password,confsenha,name,city,state,country,phone_number,type,birth_date} = this.state;
    if(!email || !password ||  !confsenha || !name || !(type == 0 || type == 2)){
      this.setState({error: "Preencha todos os campos para continuar!"})
    }else{
      if(password !== confsenha){
        this.setState({error: "Senhas não conferem!"})
      }else{
        try{
          console.log(this.state);
          const response = await api.post("/users",{email,password,name,state,country,phone_number,type,module:1});
          console.log(response)
          this.setState({error:"Criado com sucesso"});
        }catch(err){
          console.log(err)
        }
      }
    }
    
  }


  render() {
    return (
      <div className="App">
        
        <div className="wrapper">

          <div className="cad-container">
            <form className="cad-form">
              <div className="cad-input-group">
                <ul>
                  <li>
                    <label className="label-input">Nome Completo: </label>
                    <input id="name" className="cad-input-lss" type="text" value={this.state.name} onChange={e => this.setState({name:e.target.value})} required/>
                  </li>
                  <li>
                    <label className="label-input">Data de Nascimento: </label>
                    <input id="birth_date" className="cad-input-sm" type="date" value={this.state.birth_date} onChange={e => this.setState({birth_date:e.target.value})}/>

                    <label className="label-input">Cidade: </label>
                    <input id="city" className="cad-input-sm" type="text" value={this.state.city} onChange={e => this.setState({city:e.target.value})}/>

                    <label className="label-input">Estado: </label>
                    <input id="state" className="cad-input-sm" type="text" value={this.state.state} onChange={e => this.setState({state:e.target.value})}/>

                    <label className="label-input">País: </label>
                    <input id="country" className="cad-input-ssm" type="text" value={this.state.country} onChange={e => this.setState({country:e.target.value})}/>

                    <label className="label-input">Celular: </label>
                    <input id="phone_number" className="cad-input-ssm" type="text" value={this.state.phone_number} onChange={e => this.setState({phone_number:e.target.value})}/>
                  </li>
                  <li>
                    <label className="label-input">E-mail: </label>
                    <input id="email" className="cad-input-sm" type="email" value={this.state.email} onChange={e => this.setState({email:e.target.value})} required/>

                    <label className="label-input">Senha: </label>
                    <input id="password" className="cad-input-ssm" type="password" value={this.state.password} onChange={e => this.setState({password:e.target.value})} required/>

                    <label className="label-input">Confirmar Senha: </label>
                    <input id="confsenha" className="cad-input-ssm" type="password" value={this.state.confsenha} onChange={e => this.setState({confsenha:e.target.value})} required/>
                  </li>
                </ul>
              </div>
              <h2 className="cad-type-header">Tipo de cadastro:</h2>
              <div className="cad-option-group">
                <div className="cad-option">
                  <ul style={{ display: "inline" }}>
                    <li>
                      <span className="icon-free">
                        <MdPersonFree color="#000000" fontSize="3.1em" />
                        </span>
                      <span className="icon-premium">
                        <MdPersonPremium color="#000000" fontSize="3.1em" />
                        </span>
                      <span className="cad-option-view-header">Vantagens:</span>
                    </li>
                    <li>
                      <span className="icon-check">&#10003;</span>
                      <span className="icon-check">&#10003;</span>
                      <span className="cad-option-view">Acesso a Artigos</span>
                    </li>
                    <li>
                      <span className="icon-check">&#10003;</span>
                      <span className="icon-check">&#10003;</span>
                      <span className="cad-option-view">Acesso a Cursos</span>

                    </li>
                    <li>
                      <span >X</span>
                      <span className="icon-check">&#10003;</span>
                      <span className="cad-option-view">Acompanhamento via WhatsApp ou Skype</span>

                    </li>
                    <li>
                      <span>X</span>
                      <span className="icon-check">&#10003;</span>
                      <span className="cad-option-view">Acesso ao grupo fechado da Ordem ( WhatsApp )</span>

                    </li>
                    <li>
                      <span >X</span>
                      <span className="icon-check">&#10003;</span>
                      <span className="cad-option-view">Certificado de Estudante de Mistérios ao concluir o cronograma</span>

                    </li>
                    <li>
                      <span >X</span>
                      <span className="icon-check">&#10003;</span>
                      <span className="cad-option-view">Poderá participar dos encontros anuais da OCC, onde ocorrem palestras, rituais, orientações filosóficas e vivência espiritual</span>

                    </li>
                    <li>
                      <input id="cad-free" className="checkboxe" type="radio" name="accountType" onClick={e => this.setState({type:0})}/>
                      <input id="cad-free" className="checkboxe" type="radio" name="accountType" onClick={e => this.setState({type:2})}/>

                    </li>
                  </ul>
                </div>
              </div>
                {this.state.error}
              <button type="submit" className="cad-btn" onClick={this.handleSubmit}>Concluir</button>
            </form>
          </div>

        </div>
        
      </div>
    );
  }
}

/*
<div className="cad-container">
          <form className="cad-form">
            <div className="cad-input-group">
              <label className="label-input" htmlFor="name">Nome: </label>
              <input id="nome" className="cad-input-lss" type="text" name="username" placeholder="Nome" />
              <br />
              <label className="label-input" htmlFor="email">Email: </label>
              <input id="email" className="cad-input-ls" type="email" name="email" placeholder="Email" />
              <br/>
              <label className="label-input" htmlFor="city">Cidade: </label>
              <input id="cad-cidade" className="cad-input-ms" type="text" placeholder="Digite o nome da cidade" />
              <label className="label-input" htmlFor="state">Estado: </label>
              <input id="cad-estado" className="cad-input-ms" type="text" placeholder="Digite o nome do estado" />
              <label className="label-input" htmlFor="country">País: </label>
              <input id="cad-pais" className="cad-input-sm" type="text" placeholder="Digite o nome do país" />
              <br/>
              <label className="label-input" htmlFor="cellphone">Celular: </label>
              <input id="cad-celular" className="cad-input-ms" type="text" placeholder="Digite o número do celular" />
              <br/>
              <label className="label-input" htmlFor="password">Senha: </label>
              <input id="senha" className="cad-input-ms" type="password" name="psw" placeholder="Senha" />
              <br />
              <label className="label-input" htmlFor="password">Confirme a senha: </label>
              <input id="senha-confirm" className="cad-input-ms" type="password" name="psw" placeholder="Confirme a senha" />
            </div>
            <div className="cad-option-group">
              <p className="tipo-cad">Tipo de cadastro:</p>
              <div  className="cad-option-view">
                <div id="cad-free-option" className="cad-option1">
                  <MdPersonFree color="#000000" />
                  <li className="li-no-dots">&#10003;</li>
                  <li className="li-no-dots">&#10003;</li>
                  <li className="li-no-dots">&#10005;</li>
                  <li className="li-no-dots">&#10005;</li>
                  <li className="li-no-dots">&#10005;</li>
                  <li className="li-no-dots">&#10005;</li>
                  <li className="li-no-dots">
                    <input id="cad-free" className="checkboxe" type="checkbox" />
                  </li>
                </div>
                <div id="cad-afiliado-option" className="cad-option2">
                  <MdPersonPremium color="#000000" />
                  <li className="li-no-dots">&#10003;</li>
                  <li className="li-no-dots">&#10003;</li>
                  <li className="li-no-dots">&#10003;</li>
                  <li className="li-no-dots">&#10003;</li>
                  <li className="li-no-dots">&#10003;</li>
                  <li className="li-no-dots">&#10003;</li>
                  <li className="li-no-dots">
                    <input id="cad-afiliado" className="checkboxe" type="checkbox" />
                  </li>
                </div>
                <div className="info-option">
                  <h4 className="cad-h3">Vantagens</h4>
                  <li>Acesso a Artigos</li>
                  <li>Acesso a Cursos</li>
                  <li>Acompanhamento via WhatsApp ou Skype</li>
                  <li>Acesso ao grupo fechado da Ordem ( WhatsApp )</li>
                  <li>Certificado de Estudante de Mistérios ao concluir o cronograma</li>
                  <li>Poderá participar dos encontros anuais dos membros da OCC, onde ocorrem palestras, rituais, orientações filosóficas e vivência espiritual</li>
                </div>
              </div>
            </div>
            <div className="cad-button-group">
              <button type="button" className="cad-btn">Concluir</button>
            </div>
          </form>
        </div>
*/

export default CadScreen;