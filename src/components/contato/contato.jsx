import React from 'react';
import './contato.css'

export default function contato() {
    return(
        <div>
            <form action="" className='formulario'>
                <div className='contato'>
                    <h1 className='contatoTitulo'>CONTATO</h1>
                </div>
                
                <input type="text" placeholder='Nome' className='inputSimples'/>
                <input type="text" placeholder='Email' className='inputSimples'/>
                <input type="text" placeholder='Assunto' className='inputSimples'/>
                <textArea placeholder='Mensagem' className='inputTexto'></textArea>

                <input type="submit" className='submit'/>
            </form>            
        </div>
    ) 
}