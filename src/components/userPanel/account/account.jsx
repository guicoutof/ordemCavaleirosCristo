import React, {useState} from 'react'
import './account.css'
import api from "../../../services/api";

export default function Account(props){
    const [name,setName] = useState(props.user.name||'')
    const [email,setEmail] = useState(props.user.email||'')
    const [password,setPassword] = useState('')
    const [confirmPassword,setCPasswordd] = useState('')
    const [phone_number,setPhone] = useState(props.user.phone_number||'')
    const [birth,setBirth] = useState(props.user.birth_date||'')
    const [city,setCity] = useState(props.user.city||'')
    const [state,setState] = useState(props.user.state||'')
    const [country,setCountry] = useState(props.user.country||'')

    async function submitUser(){
        //update info user
        console.log(props.user.id)
        // const response = await api.post("//users",{email,password});
    }

    return(
        <div>
            <div>Nome</div>
            <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} />
            <div>Email</div>
            <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <div>Senha</div>
            <input id="senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <div>Confirmar Senha</div>
            <input id="confsenha" type="password" value={confirmPassword} onChange={e => setCPasswordd(e.target.value)} />
            <div>Numero</div>
            <input id="phone" type="text" value={phone_number} onChange={e => setPhone(e.target.value)} />
            <div>Data de nascimento</div>
            <input id="birth" type="date" value={birth} onChange={e => setBirth(e.target.value)} />
            <div>Cidade</div>
            <input id="city" type="text" value={city} onChange={e => setCity(e.target.value)} />
            <div>Estado</div>
            <input id="state" type="text" value={state} onChange={e => setState(e.target.value)} />
            <div>Pais</div>
            <input id="country" type="text" value={country} onChange={e => setCountry(e.target.value)} />
            <button onClick={()=>submitUser()}>Salvar</button>
        </div>
    )
}