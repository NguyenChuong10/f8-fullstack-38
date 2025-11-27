import { memo, useCallback } from "react";
import {useState} from "react";

const Childcomponent1 = memo(({count , onIncrease }) => {
    console.log("re-render");
    return(
        <div>
             <h1>Childcomponent1 count1  : {count}  </h1>
             <button onClick={onIncrease}> count is  {count}</button>
        </div>
    );
})


const Childcomponent2 = memo(({count2 , onIncrease2}) => {
    return(
        <div>
            <h1>Childcomponent2 count2 : {count2}</h1>
            <button onClick={onIncrease2}>Count is {count2}</button>
        </div>
    );
})


function ReactMemo() {
    const [count , setCount] = useState(0);
    const [count2 , setCount2] = useState(0);
    
    const handleIncrease = useCallback(() => {
        setCount(count+1);
    }
    
,[count])


    const handleIncrease2 = useCallback(() => {
        setCount2(count2+1);
    },[count2])
    return(
        <div>
            <h1>React Memo</h1>
            <Childcomponent1 count = {count} onIncrease = {handleIncrease}/>
            <Childcomponent2 count2 = {count2} onIncrease2 = {handleIncrease2}/>
            
        </div>
    );
}

export default ReactMemo;