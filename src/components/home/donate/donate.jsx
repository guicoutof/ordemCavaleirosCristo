import React,{useState} from 'react'
import './donate.css'
import api from '../../../services/api'


export default (props) => {
    const [value,setValue] = useState(0.0)
    const [msg,setMsg] = useState('')

    async function donation(){
        if(value>0){
            setMsg('')
            const response = await api.post('/donation',{value})
            window.location.assign(response.data)
        }else{
            setMsg('Valor invalido')
        }
    }

    return(
        <div className="containerDoacao">
            <div className="option">
                <h1 className="tit">{props.titulo}</h1>
            </div>
            <div className="Content">
                <div className="introText">
                    <h4 className="texto">
                    Shalom Aleichem!
                    <br/><br/>
                    Se você gosta do trabalho que a Ordem dos Cavaleiros de Cristo está realizando para difundir os mistérios da Antiga Religião, colabore com um pequeno valor ou, seja um doador ativo! Desta forma nossos conteúdos estarão acessíveis para cada vez mais pessoas. Muito obrigado! 
                    <br/><br/>
                    Aleph Yaakov<br/>
                    Diretor Espiritual da O.C.C.</h4>
                </div>
                <div className="divDoacao">
                    <div>
                        <div className="doacaoName">Valor:</div> <input className="inputDoacao" type='number' step="0.01" min='0' value={value} onChange= {(e) => setValue(+e.target.value)}/>
                        {msg}
                    </div>
                    <button className="enviarDoacao" onClick={donation}>Doar</button>
                </div>
                {/* <img src={require('../../../assets/img/mercado-pago-logo.png')} alt="Doação Mercado Pago"/> */}
            </div>

        </div>
    
    
    )
}