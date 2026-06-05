import {useState} from 'react';
import { useEffect } from 'react';
function UseEffectHook2(){
    const [count,setCount] = useState(1000);
    
    useEffect( ()=> {
        setTimeout( () => {
            setCount((count) => count - 1);
        },1000);
        
    }   );
    return <h1>timer set {count} !!!</h1>
}
export default UseEffectHook2;