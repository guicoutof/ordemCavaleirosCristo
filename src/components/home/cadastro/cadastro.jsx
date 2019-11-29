import React, { Component } from 'react';
import './cadastro.css'

// import MdPersonFree from 'react-ionicons/lib/MdPerson'
// import MdPersonPremium from 'react-ionicons/lib/MdPersonAdd'

class CadScreen extends Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaConfirmar: "",
    cidade: "",
    estado: "",
    pais: "",
    celular: "",
    afiliado: "",
  };
  
  render() {
    return(
      <div className="App">
        <div className="wrapper">
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
                    {/* <MdPersonFree color="#000000" /> */}
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
                    {/* <MdPersonPremium color="#000000" /> */}
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
                  <h4 className="cad-h3">Vantagens</h4>
                  <li>Acesso a Artigos</li>
                  <li>Acesso a Cursos</li>
                  <li>Acompanhamento via WhatsApp ou Skype</li>
                  <li>Acesso ao grupo fechado da Ordem ( WhatsApp )</li>
                  <li>Certificado de Estudante de Mistérios ao concluir o cronograma</li>
                  <li>Poderá participar dos encontros anuais dos membros da OCC, onde ocorrem palestras, rituais, orientações filosóficas e vivência espiritual</li>
                </div>
              </div>
              <div className="cad-button-group">
                <button type="button" className="cad-btn">Concluir</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CadScreen;