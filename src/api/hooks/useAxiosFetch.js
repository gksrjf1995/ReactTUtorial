import { useState , useEffect } from "react";
import axios from "axios";


const useAxiosFetch = (dataUrl) => {
    let [ data, setDate ] = useState([]);
    let [ fetchError , setfetchError ] = useState(null);
    let [ isLoading , setIsLoading ] = useState(false);

    useEffect(()=>{
        let isMounted = true;
        let source = axios.CancelToken.source();

        let fetchData = async (url) =>{
            setIsLoading(true);
            try{
                let response = await axios.get(url,{
                    cancelToken: source.token
                });
                console.log(response.data)
                if(isMounted){
                    setDate(response.data);
                    setfetchError(null)
                }
            }catch(err){
                console.log(err);
                setfetchError(err.message);
                setDate([]);
            }finally {
                isMounted && setIsLoading(false)
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            console.log('clean up funcion');
            isLoading = false;
            source.cancel();
        }
        return cleanUp;
    },[dataUrl]);

    return {data , fetchError , isLoading}
   
}

export default useAxiosFetch