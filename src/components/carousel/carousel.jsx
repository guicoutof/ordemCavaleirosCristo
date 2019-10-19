import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './carousel.css'

let sectionStyle = {
    //backgroundImage: "require(`urlEmelent`)",  
    backgroundImage: "url('../../assets/img/pergaminho.png')",   
};

class Carrossel extends React.Component{
    render (){
        return (
            <AwesomeSlider className="aws-btn" bullets="false">
                <div id="review">
                    <img src={require('')} className="imagem" />
                    <h1 className="review-title">Lorem Ipsum</h1>
                    <p id="review-coments">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac hendrerit massa. Vestibulum tincidunt at odio quis egestas. Duis non aliquet diam. Praesent pulvinar mauris sit amet augue fringilla commodo. Aliquam ultricies, ligula eu ullamcorper posuere, magna orci molestie nunc, sit amet vulputate ipsum vel</p>
                </div>
            </AwesomeSlider>
        );
    }
}

export default Carrossel;




    