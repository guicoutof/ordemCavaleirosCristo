import React from 'react';
import './contato.css'

export default function contato() {
    return(
        <div className="backimg">
            <div className='contato'>
                <h1 className='contatoTitulo'>CONTATO</h1>
            </div>
            <form action="" className='formulario'>
                <input type="text" placeholder='Nome' className='inputSimples'/>
                <input type="text" placeholder='Email' className='inputSimples'/>
                <input type="text" placeholder='Assunto' className='inputSimples'/>
                <textarea placeholder='Mensagem' className='inputTexto'></textarea>

                <input type="submit" className='submit'/>
            </form>            
        </div>
    ) 
}