import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import LoadingScreen from '../../components/common/LoadingScreen/LoadingScreen';
import ErrorScreen from '../../components/common/LoadingScreen/ErrorScreen';
import IndeedIcon from '../../components/ui/Icons/IndeedIcon';
import LoadingErrorHandler from '../../components/common/LoadingErrorHandler';


const PersonDetails = ({firstname, lastname, company, email}) =>{
    return (
        <div className="person-details-container">
                <div className="person-grid-container">
                    <div>
                        <h1 className="person-heading-with-line">PEOPLE OF M2</h1>
                        
                        {/* Safely accessing data.firstname and using fallback text */}
                        <h1 className="person-name underline">{`${firstname || 'No Firstname'} ${lastname || 'No Lastname'}`}</h1>
                        
                        {/* Safely accessing company.bs with fallback */}
                        <h3 className="person-position">{`${company?.bs || 'No company information'}`}</h3>
                        
                        <p className="person-about">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div>
                        <div className="person-details-image"></div>
                        <div className="person-details-email">
                            <h5>Email</h5>
                            {/* Safely accessing data.email with fallback */}
                            <h5>{email || 'No email available'}</h5>
                            <div className="person-icon-container">
                                <IndeedIcon fill={"#fff"} width={30} height={25} />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

const OurPeopleDetails = () => {
    const url = new URL('https://jsonplaceholder.org/users/');
    const { id } = useParams();
    const { data, isLoading, error } = useFetch(`${url}${id}`);
  
    return (
        <LoadingErrorHandler isLoading={isLoading} error={error} data={data}>
            <PersonDetails key={id} firstname={data?.firstname} lastname={data?.lastname} company={data?.company} email={data?.email} />
        </LoadingErrorHandler>
    );
};

export default OurPeopleDetails;
