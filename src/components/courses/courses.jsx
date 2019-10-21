import React from 'react'
import './courses.css'
export default (props) => {
    return(
        <div className="courses">
           <div className="cour">
               <h1 id="text">CURSOS</h1>

           </div>
            <div className="cards">
                <div className="imageinsideone">
                    {props.image}
                </div>
                <div className="textinsideone">
                    {props.title}
                </div>
                <div className="textinsideonee">
                    {props.text}
                </div>
                <button className="buttom">COMPRAR</button>
            </div>
            <div className="cards">
                <div className="imageinsidetwo">
                    {props.image2}
                </div>
                <div className="textinsidetwo">
                    {props.title2}
                </div>  
                <div className="textinsidetwoo">
                    {props.text2}
                </div>
                <button className="buttom">COMPRAR</button>  
            </div>
            <div className="cards">
                <div className="imageinsidethree">
                    {props.image3}
                </div>
                <div className="textinsidethree">
                    {props.title3}
                </div>
                <div className="textinsidethreee">
                    {props.text3}
                </div>
                <button className="buttom">COMPRAR</button>
            </div>     
        </div>
    )
}