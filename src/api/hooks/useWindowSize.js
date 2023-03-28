import { useEffect , useState } from "react";


const useWindowSize = () => {
    const [windowSize , SetwindowSize] = useState({
    width : undefined ,
    height : undefined
    });

    useEffect(()=>{
        const handleReSize = () => {
            SetwindowSize({
                width : window.innerWidth,
                height :  window.innerHeight ,
            })
        }

        handleReSize();

        window.addEventListener('resize',handleReSize);

        const cleanup = () => {
            console.log("runs if auseEffect dep chages");
            window.removeEventListener("resize",handleReSize )
        }
        
        return cleanup
    },[]);  
    return windowSize
}

export default useWindowSize