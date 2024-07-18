import { useState , useEffect } from "react";

 const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isPanding, setIsPanding] = useState(true);
    const [error, setError] = useState(null);
    const abortCont = new AbortController();

    useEffect(() =>{
        setTimeout(() => {
            fetch(url)
            fetch(url, { signal: abortCont.signal })
            .then(res =>
             {
              if (!res.ok){
                throw Error('could not fetch the data for that ressource');
              }
              return res.json();
             }
             )
            .then(data => {
    
            //console.log(data);
            setData(data);
            setIsPanding(false);
            })
            .catch((err)=>{
                    setIsPanding(false);
                  setError(err.message);
                  // if (err.name === 'AbortError') {
                  //   console.log('fetch aborted')
                  // } else {
                  //   // auto catches network / connection error
                  //   setIsPanding(false);
                  //   setError(err.message);
                  // }
             })}, 1000);
           // return () => abortCont.abort();
            },[url]);
            return {data , isPanding , error}

            }
 export default useFetch;
