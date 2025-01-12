import React from 'react';
import './Button.css'


const Button = ({children, icon, iconStart, iconEnd, btnAction, customClass, ...props}) => {

    const handleClick = () => {
        if (btnAction) {
            btnAction();
        }
    };

    return (
    <button className={`custom-button ${customClass}`} onClick={handleClick} {...props}>
         {iconStart && <span className="custom-button-icon">{iconStart}</span>}
            <span className="custom-button-label">{children}</span>
         {iconEnd && <span className="custom-button-icon">{iconEnd}</span>}
    </button>)
}



export default Button;