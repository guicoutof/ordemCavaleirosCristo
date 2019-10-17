import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './userReviews.css'

/*
const slider = (
    <AwesomeSlider>
        
    </AwesomeSlider>
);*/

export default function review() {
    return (
        <div className="slideshow-container">
            <AwesomeSlider className="aws-btn">
                <div data-src="./src/assets/img/1.jpg" />
                <div data-src="./src/assets/img/1.jpg" />
                <div data-src="./src/assets/img/1.jpg" />
            </AwesomeSlider>
        </div>
    );
}