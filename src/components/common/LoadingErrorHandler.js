import React from 'react';
import LoadingScreen from './LoadingScreen/LoadingScreen';
import ErrorScreen from './LoadingScreen/ErrorScreen';

const LoadingErrorHandler = ({isLoading, error, data, children}) => {

    if(isLoading){
        return <LoadingScreen />
    }
    if(error){
        return <ErrorScreen message={error} />
    }
    if (!data) {
        return <ErrorScreen message="No data available" />;
    }

    return children;
}



export default LoadingErrorHandler;