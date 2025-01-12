import React, { useState } from 'react';
import "./OurPeople.css";
import People from './People';
import useFetch from '../../hooks/useFetch';
import OurPeopleHero from './OurPeopleHero';
import LoadingErrorHandler from '../../components/common/LoadingErrorHandler';

const OurPeople = React.memo (() => {
    const {data, isLoading, error } = useFetch(`https://jsonplaceholder.org/users`);
    const [query, setQuery] = useState("");

    const handleQuery = (value) =>{
        setQuery(value)
    }
    const modifiedData = data.filter(item => item.firstname.toLowerCase().includes(query) || item.lastname.toLowerCase().includes(query));
    return (
    <LoadingErrorHandler data={data} isLoading={isLoading} error={error}>
        <div className='people_container'>
            <OurPeopleHero />
            <People people={modifiedData} />
        </div>
    </LoadingErrorHandler>
    
    );
})


export default OurPeople;