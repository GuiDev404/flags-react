import { useState , useEffect} from 'react';
import fetchData from '../services/fetchData';

export default function useApi(url = '') {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ response, setResponse ] = useState(null);  
  const [ error, setError ] = useState('');

  useEffect(() => {
    setIsLoading(true);

    fetchData({ url })
      .then(data=> setResponse(data))
      .catch(error=> setError(error))
      .finally(()=> setIsLoading(false))
  }, [url])

  return {
    response, 
    error, 
    isLoading
  }
}