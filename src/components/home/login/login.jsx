import React from 'react';
import Modal from 'react-modal';
import MdClose from 'react-ionicons/lib/MdClose'

import './login.css'

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
  constructor() {
    super();

    this.state = {
      modalIsOpen: this.props.modal,
      isForgotPSWDOpen: false,
      isLoginOpen: true,

      loginEmail: "",
      loginPassword: "",
      loginErrorMessage: [],

    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  showLoginField(){
    this.setState({ isForgotPSWDOpen: false, isLoginOpen: true })
  }

  showForgotPasswordField(){
    this.setState({ isForgotPSWDOpen: true, isLoginOpen: false })
  }

  LoginForm() {
    return (
      <form id="login-form">
        <div className="logo-img"></div>
        <div className="input-group">
          <div className="login-input-email">
            <input id="login-email" className="login-input" type="text" name="email" placeholder="Email"></input>
          </div>
          <div className="login-input-password">
            <input id="login-password" className="login-input" type="psd" name="password" placeholder="Senha"></input>
          </div>
        </div>
        <div className="button-group">
          <button id="login" className="login-btn">Entrar</button>
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
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="login-modal"
          ariaHideApp={false}
        >
          <button className="close-btn" onClick={this.closeModal}>
            <MdClose />
          </button>
          
          {this.state.isLoginOpen ? this.LoginForm() : "" }
          {this.state.isForgotPSWDOpen ? this.ForgotPasswordForm() : "" }
        </Modal>
      </div>
    );
  }
}

export default Login;
