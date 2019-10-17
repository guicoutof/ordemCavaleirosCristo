import React from 'react';
import './ImageSlide.css'

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: `cover`,
        backgroundPosition: 'center',
    };

    return (
        <div className="image-slide"></div>
    );
}