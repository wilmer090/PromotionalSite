import React from 'react';
import './Icons.css'

const BurgerIcon = ({action}) => {
    return (
        <div className="burger-container" onClick={action}>
            <div className="burger-item-bar"></div>
            <div className="burger-item-bar"></div>
            <div className="burger-item-bar"></div>
        </div>
    );
}



export default BurgerIcon;