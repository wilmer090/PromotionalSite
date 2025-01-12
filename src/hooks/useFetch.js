import {useState, useEffect} from 'react';

const useFetch = (url) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () =>{

            try{
                const response = await fetch(`${url}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                setData(data);
            }
            catch(e){
                setError(e.message)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchData();
    }, [url]);

    return {data, isLoading, error}
}


export default useFetch;