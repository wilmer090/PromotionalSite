import React from 'react';

const Form = ({children, onSubmit}) => {

    return <form onSubmit={onSubmit}>{children}</form>;
}

const Input = ({type, name, value, onChange, placeholder, className}) =>{
    return <input className={className} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder}/>
}

Form.Input = Input;

export default Form;