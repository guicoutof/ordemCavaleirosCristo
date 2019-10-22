import React from 'react'
import './courses.css'
export default (props) => {
    return(
        <div className="courses">
           <div className="cour">
               <h1 id="text">CURSOS</h1>
           </div>
            <div className="cards">
                <div className="coverimg">
                    {props.image}
                </div>
                <div className="title">
                    {props.title}
                </div>
                <div className="content">
                    {props.text}
                </div>
                {/* <button className="buttom">COMPRAR</button> */}
            </div>
            <div className="cards">
                <div className="coverimg">
                    {props.image2}
                </div>
                <div className="title">
                    {props.title2}
                </div>  
                <div className="content">
                    {props.text2}
                </div>
                {/* <button className="buttom">COMPRAR</button>   */}
            </div>
            <div className="cards">
                <div className="coverimg">
                    {props.image3}
                </div>
                <div className="title">
                    {props.title3}
                </div>
                <div className="content">
                    {props.text3}
                </div>
                {/* <button className="buttom">COMPRAR</button> */}
            </div>     
        </div>
    )
}