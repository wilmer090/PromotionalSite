import React from 'react';

const ErrorScreen = ({message}) => {
    return(
        <div className='error-screen-container'>
            <h1>{message}</h1>
        </div>
    );
}


export default ErrorScreen;