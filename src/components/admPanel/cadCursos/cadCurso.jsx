import React from 'react'
import './cadCurso.css'
import Navbar from '../../home/navbar/navbar'
import Footer from '../../home/footer/footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


export default () => {
    return(
        <div className="divPrincipal">
            <Navbar controle={1}></Navbar>
            <div className="divContainerTitulo">
                <div className="divArrowLeft">
                    <FontAwesomeIcon icon={faArrowLeft} className="seta" onClick={()=>{console.log("Clicou, rapaz!")}}/>
                </div>
                <div className="divTitulo">
                    <h1 className="tituloPagina">Cadastro de Curso</h1>
                </div>
            </div>
            <form action="" className="formularioCurso">
                <div className="infoBasica">
                    <input type="text" name="nomeCurso" placeholder="Nome do Curso" className="nomeCurso"/>
                    <input type="text" name="moduloCurso" placeholder="Módulo do Curso" className="moduloCurso"/>
                </div>
                <div className="divDescricao">
                    <textarea name="nomeCurso" placeholder="Descrição do Curso" className="descricaoCurso"></textarea>
                    <div className="imagem">
                        <label for='files' id='labelCarregarImagem'>Carregar imagem de capa</label>
                        <input type="file" id="files" name="files[]" onChange={handleFileSelect} placeholder="eae filhao" />
                        <output id="list"></output>
                    </div>
                </div>
                <div className="quantidadesAulaValor">
                    <input type="text" className="aulasCurso" name="aulasCurso" placeholder="Nº Aulas"/>
                    <input type="text" className="valorCurso" name="valorCurso" placeholder="Valor"/>
                    <input type="submit" value="Salvar Curso"  className="submitCurso"/>
                </div>
            </form>

            <Footer></Footer>
        </div>
    )
}

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    
    for (var i = 0, f; f = files[i]; i++) {
      // Fazendo apenas imagens serem processadas
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      reader.onload = (function(theFile) {
        return function(e) {
            // renderizando imagem.
            var span = document.createElement('span');
            span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
            document.getElementById("list").innerHTML = ""; //deletando imagem que possa estar no elemento
            document.getElementById('list').insertBefore(span, null);
        };
      })(f);

      // Lê a imagem como URL
      reader.readAsDataURL(f);
    }
  }
