import { useState,useEffect } from "react";
import axios from 'axios'

export default function useFetch(endpoint, query) {
    const[data,setData]= useState([]);
  const[isLoading,setIsLoading]= useState(true);
    const [error,setError] = useState(null);

    
const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  params: {...query
  },
  headers: {
    'x-rapidapi-key': '576aaba455mshbca69993961a3b0p1685fejsn2399d37dde65',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  }
};

const fetchData=async()=>{
  try{
  const response= await axios.request(
    options
  )
  setData(response.data.data);
  setIsLoading(false);
  }
  catch(error){
   setError(error);
   alert(`There is an error`);
  }
  finally{
    setIsLoading(false);
  }

}
useEffect(() => {
  fetchData();
}, []);


const reFetch=()=>{
    setIsLoading(true);
    fetchData();
}

return {data,isLoading,error,reFetch};

}

