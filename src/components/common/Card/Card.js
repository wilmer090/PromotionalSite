import React from 'react';
import "./card.css";


const Card = (props) => {
    const {className, children} = props;
    return (
    <div className={className}>
       {children}
    </div>
    );
}


 const Title = (props) =>{
    const {className, children, onClick} = props;
    const handleClickAction = (e) =>{
        if(!onClick){
            return null;
        }else{
            onClick(e)
        }
    }
    return (
        <>
            <h3 onClick={(e) => handleClickAction(e)} className={className}>{children}</h3>
        </>
    )
}
 const Description = ({children, className, ...props}) =>{
    
    return (
        <>
            <p className={className}>{children}​</p>
        </>
    )
}

 const Image = (props) =>{
    const { imageSrc } = props;

    return (
        <>
            <img src={`${imageSrc}`} />
        </>
    )
}

Card.Title = Title;
Card.Description = Description;
Card.Image = Image;

export default Card;