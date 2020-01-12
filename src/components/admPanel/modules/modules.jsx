import React, {Component} from 'react'
import './modules.css'
import { NavLink } from 'react-router-dom'

export default function admModules(props){

        return(

        <div className='containerADM'>
        {
            props.modulos.map((modulo) =>
            <div key={modulo.module.id}className='cardModulo'>
                    <h3 className='nomeCurso'>{modulo.module.name}</h3>
                    <p className='qtdCurso'>Cursos: {modulo.module.courses_quantity}</p>
                    <div className="botoes">
                        <NavLink to={`/module/${modulo.module.id}`}><button className="abrirModulo">Abrir</button></NavLink>
                        <button className="removerModulo">Remover</button>
                    </div>
                </div>
            )
        }
        </div>
        )
        
}