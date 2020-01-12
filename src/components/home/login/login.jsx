import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom'
// import MdClose from 'react-ionicons/lib/MdClose'

import './login.css'
import api from "../../../services/api";
import { login, loginAdm } from "../../../services/auth";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid rgb(197, 151, 66)',
    boxShadow: '1px 1px 1.2px 0px rgb(245, 217, 166)',
    borderRadius: '6px'
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isForgotPSWDOpen: false,
      isLoginOpen: true,

      email: "",
      password: "",
      loginErrorMessage: [],

    };

  }

  showLoginField(){
    this.setState({ isForgotPSWDOpen: false, isLoginOpen: true })
  }

  showForgotPasswordField(){
    this.setState({ isForgotPSWDOpen: true, isLoginOpen: false })
  }
  
  handleSignIn = async e=>{
    e.preventDefault();
    const {email,password} = this.state;
    if(!email || !password ){
      this.setState({loginErrorMessage: "Preencha e-mail e senha para continuar!"})
    }else{
      try{
        const response = await api.post("/sessions",{email,password});
        login(response.data.token,response.data.user);
        this.props.history.push("/home");
        window.location.reload();
      }catch(err){
        try{
          const response = await api.post("/dashboard",{email,password});
          loginAdm(response.data.token);
          this.props.history.push("/admin");
          window.location.reload();
        }catch(err){
          this.setState({
            loginErrorMessage:
              "Houve um problema com o login, verifique suas credenciais."
          });
        }
      }
    }
  }

  LoginForm() {
    return (
      <form id="login-form" >
        <div className="logo-img">
          <img  src={require('../../../assets/img/logo.png')} alt="Logo"/>
        </div>
        <p>{this.state.loginErrorMessage}</p>
        <div className="input-group">
          <div className="login-input-email">
            <input id="login-email" className="login-input" type="text" name="email" placeholder="Email" onChange={e=> this.setState({email:e.target.value})}></input>
          </div>
          <div className="login-input-password">
            <input id="login-password" className="login-input" type="psd" name="password" placeholder="Senha" onChange={e=> this.setState({password:e.target.value})}></input>
          </div>
        </div>
        <div className="button-group">
          <button id="login" className="login-btn" onClick={this.handleSignIn}>Entrar</button>
        </div>
        <a className="login-forgot-password" onClick={this.showForgotPasswordField.bind(this)}>Esqueceu a senha ?</a>
      </form>
    );
  }

  ForgotPasswordForm(){
    return (
      <form id="forgot-password-form">
        <h3 className="forgot-password-title"> Digite abaixo o email para enviarmos o formulario para resetar a sua senha</h3>
        <p className="forgot-password-warning">Você apenas receberá o email, caso o email digitado abaixo seja válido e que esteja cadastrado no site</p>
        <div className="input-group">
          <div className="forgot-password-input-email">
            <input id="forgot-email" className="forgot-password-input" type="text" name="email" placeholder="Email"></input>
          </div>
        </div>
        <div className="button-group">
          <button id="login" className="back-to-login-btn" onClick={this.showLoginField.bind(this)}>Voltar ao Login</button>
          <button id="login" className="forgot-password-btn">Enviar o formulario</button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.open}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.props.close}
          style={customStyles}
          contentLabel="login-modal"
          ariaHideApp={false}
        >
          {/* <button className="close-btn" onClick={this.closeModal}>
            <MdClose />
          </button> */}
          
          {this.state.isLoginOpen ? this.LoginForm() : "" }
          {this.state.isForgotPSWDOpen ? this.ForgotPasswordForm() : "" }
        </Modal>
      </div>
    );
  }
}

export default withRouter(Login);
