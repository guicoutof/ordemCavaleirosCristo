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
                    <p className="texto">{props.conteudo}</p>
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