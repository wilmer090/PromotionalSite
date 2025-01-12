import React, { useEffect } from 'react';
import Form from '../../components/ui/Form/Form';
import useForm from '../../hooks/useForm';

const OurPeopleSearch = ({handleAction}) => {

    const [formValues, handleInputChange] = useForm({search: ''});
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    
    useEffect(() =>{
            handleAction(formValues.search);
    }, [formValues.search, handleAction])
    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Input 
                type="text" 
                name="search" 
                value={formValues.search} 
                onChange={handleInputChange} 
                placeholder="Name..." />
        </Form>
        </>
    );
}

export default OurPeopleSearch;