import React from 'react';

const Typography = ({action = () => {}, type: Element, className, children}) => {
    
    const handleAction = () =>{
        action();
    }
    return (
        <Element onClick={handleAction} className={className}>{children}</Element>
    );
}



export default Typography;