import {useState, useEffect} from 'react';

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let isCancelled = false;

        const fetchData = async () =>{

            setIsLoading(true);
            setData([]); // Reset data when the fetch starts
            setError(null);

            try{
                const response = await fetch(`${url}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                if (!isCancelled) {
                    setData(data); // Only update state if not cancelled
                }
            }
            catch(e){
                if (!isCancelled) {
                    setError(e.message); // Only update state if not cancelled
                }
            }
            finally{
                if (!isCancelled) {
                    setIsLoading(false); // Only update state if not cancelled
                }
            }
        };
        
        fetchData();

        return () => {
            isCancelled = true; // Cleanup to avoid state updates after unmount
        };

    }, [url]);

    return {data, isLoading, error}
}


export default useFetch;