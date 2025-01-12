import { useState } from 'react';


const useForm = (initialState = {}) =>{
    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    return [formValues, handleInputChange];

}

export default useForm;