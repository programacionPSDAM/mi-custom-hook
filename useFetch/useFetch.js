import { useEffect, useRef, useState } from "react"

const useFetch = (url ) => {

    const isMounted = useRef(true)
    
     const [state, setState] = useState ({data: null, loading : true, error : null})

     useEffect( () => {
        return () => {
            isMounted.current = false;
        }
     }, [])

     useEffect ( () => {
        setState ({data: null, loading : true, error : null})
         fetch(url)
         .then (res => res.json())
         .then(data => {
             setTimeout( () => {
                if (isMounted.current) {
                setState({
                    loading: false,
                    error : null, 
                    data
                })
            }
             }, 300);
            
            
         })
     }, [url]) //cuando cambie la url
     return state
}

export default useFetch
