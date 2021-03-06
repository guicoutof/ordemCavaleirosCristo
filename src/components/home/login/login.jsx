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
      tokenOpen: false,
      alterPassOpen:false,

      id:0,
      email: "",
      password: "",
      confirmPassword: "",
      code:"",
      loginErrorMessage: "",

    };
    this.showTokenField = this.showTokenField.bind(this)
    this.showAlterPassField = this.showAlterPassField.bind(this)

  }

  showLoginField(){
    this.setState({ isForgotPSWDOpen: false, isLoginOpen: true, tokenOpen:false, alterPassOpen: false })
  }

  showForgotPasswordField(){
    this.setState({ isForgotPSWDOpen: true, isLoginOpen: false, tokenOpen:false, alterPassOpen: false })
  }

  showTokenField(){
    this.setState({ isForgotPSWDOpen: false, isLoginOpen: false, tokenOpen:true, alterPassOpen: false })
  }

  showAlterPassField(){
    this.setState({ isForgotPSWDOpen: false, isLoginOpen: false, tokenOpen:false, alterPassOpen: true })
  }
  
  handleSignIn = async e=>{
    e.preventDefault();
    const {email,password} = this.state;
    this.setState({loginErrorMessage:''})
    if(!email || !password ){
      this.setState({loginErrorMessage: "Preencha e-mail e senha para continuar!"})
    }else{
      try{
        const response = await api.post("/sessions",{email,password});
        const info = {
          email:response.data.user.email,
          id:response.data.user.id,
          name:response.data.user.name,
          module:response.data.user.module,
          type:response.data.user.type
        }
        login(response.data.token,info);
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

  async submitEmail(){
    console.log(this.state.email)
    const {email} = this.state
    try{

      await api.post('forgotPassword',{email})
      this.showTokenField()
      }catch(err){
        console.log(err)
        this.setState({loginErrorMessage:'Email nao encontrado'})
      }
    


  }
  async submitToken(){
    const {code} = this.state
    try{
      const response = await api.post('verifyCode',{code})
      this.setState({id:response.data})
      this.showAlterPassField()
    }catch(err){
      this.setState({loginErrorMessage:'Token incorreto'})
    }
  }
  async submitPass(){
    const {password,confirmPassword,id} = this.state
    if(password !== confirmPassword)this.setState({loginErrorMessage:'Senhas não conferem'})
    else{
      console.log(this.state)
      try{
        await api.post(`/changePassword/${id}`,{password,confirmPassword})
        this.setState({loginErrorMessage:'',password:''})
        this.showLoginField()
      }catch(err){
        console.log(err)
      this.setState({loginErrorMessage:'Erro inesperado'})
      }
    }
  }

  LoginForm() {
    if(this.state.isLoginOpen)
      return (
        <div className="login-form" >
          <div className="logo-img">
            <img  src={require('../../../assets/img/logo.png')} alt="Logo"/>
          </div>
          <p>{this.state.loginErrorMessage}</p>
          <div className="input-group">
            <div className="login-input-email">
              <input id="login-email" className="login-input" type="text" name="email" placeholder="Email" onChange={e=> this.setState({email:e.target.value})}></input>
            </div>
            <div className="login-input-password">
              <input id="login-password" className="login-input" type="password" name="password" placeholder="Senha" onChange={e=> this.setState({password:e.target.value})}></input>
            </div>
          </div>
          <div className="button-group">
            <button className="login-btn" onClick={this.handleSignIn}>Entrar</button>
          </div>
          <li className="login-forgot-password" onClick={this.showForgotPasswordField.bind(this)}>Esqueceu a senha ?</li>
        </div>
      );
  }

  ForgotPasswordForm(){
    if(this.state.isForgotPSWDOpen)
    return (
      <div id="forgot-password-form">
        <h3 className="forgot-password-title"> Digite abaixo seu email para trocar sua senha</h3>
        {/* <p className="forgot-password-warning">Você apenas receberá o email, caso o email digitado abaixo seja válido e que esteja cadastrado no site</p> */}
        <p className="forgot-password-warning"><strong>{this.state.loginErrorMessage}</strong></p>
        <div className="input-group">
          <div className="forgot-password-input-email">
            <input id="forgot-email" className="forgot-password-input" type="text" name="email" placeholder="Email" value={this.state.email} onChange={e=> this.setState({email:e.target.value})}></input>
          </div>
        </div>
        <div className="button-group">
          <button className="back-to-login-btn" onClick={this.showLoginField.bind(this)}>Voltar ao Login</button>
          <button className="forgot-password-btn" onClick={()=>this.submitEmail()}>Enviar o formulario</button>
        </div>
      </div>
    );
  }

  TokenForm(){
    if(this.state.tokenOpen)
    return(
        <div className="login-form">
        <h3 className="token-title"> Digite abaixo o token que você recebeu por email</h3>
        <p className="token-warning">O token fica ativo até <strong>10</strong> minutos após o envio do email</p>
        <p className="token-warning"><strong>{this.state.loginErrorMessage}</strong></p>
        <div className="input-group">
          <div className="forgot-password-input">
            <input id="forgot-email" className="forgot-password-input" type="text" name="email" placeholder="TOKEN" value={this.state.code} onChange={e=> this.setState({code:e.target.value})}></input>
          </div>
        </div>
        <div className="button-group">
          <button className="login-btn" onClick={()=>this.submitToken()}>Enviar Token</button>
        </div>
      </div>
    )
  }

  AlterPassForm(){
    if(this.state.alterPassOpen)
    return(
      <div id="forgot-password-form">
        <h3 className="forgot-password-title">Atualize sua senha</h3>
        <p className="forgot-password-warning"><strong>{this.state.loginErrorMessage}</strong></p>
        <div className="input-group">
          <div className="forgot-password-input-email">
            <input id="forgot-email" className="forgot-password-input" type="password" name="password" placeholder="Senha" value={this.state.password} onChange={e=> this.setState({password:e.target.value})}></input>
            <input id="forgot-email" className="forgot-password-input" type="password" name="confirmPassword" placeholder="Confirmar Senha" value={this.state.confirmPassword} onChange={e=> this.setState({confirmPassword:e.target.value})}></input>
          </div>
        </div>
        <div className="button-group">
          <button className="login-btn" onClick={()=>this.submitPass()}>Enviar senha</button>
        </div>
    </div>
    )
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
          
          {this.LoginForm()}
          {this.ForgotPasswordForm()}
          {this.TokenForm()}
          {this.AlterPassForm()}
        </Modal>
      </div>
    );
  }
}

export default withRouter(Login);
