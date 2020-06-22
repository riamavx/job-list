import React, { Component } from 'react';
import "./button.css";


const Button = ({ texto, onClick}) => {
    return(
        <div className="btn__container">
            <button onClick= {onClick}>{texto}</button>
        </div>
    )

}


export default Button;
