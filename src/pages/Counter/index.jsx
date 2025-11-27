
import { useState , useCallback, memo } from"react";


const CountA = memo(({countA , onIncrease}) => {
    console.log("Re-renderA")
    return (
        <div>
            <h2>Count A is {countA}</h2>
            <button onClick={onIncrease} className="w-20 h-20 bg-amber-100"> Increase count A </button>
        </div>
        
    );
})


const CountB = memo(({countB , onIncrease}) => {
    console.log("Re-renderB")
    return(
        <div>
            <h2>Count B is {countB}</h2>
            <button onClick={onIncrease} className="w-20 h-20 bg-amber-100">Increase count B</button>
        </div>
    );
})


function Countparent() {
    const [countA,setCountA] = useState(0);
    const [countB,setCountB] = useState(0);

    const handleNorerenderCountA = useCallback(() => {setCountA(countA + 1);} , [countA])
    const handleNorerenderCountB = useCallback(() => {setCountB(countB + 1);} , [countB])

    return(
        <div>
            <CountA countA = {countA} onIncrease={handleNorerenderCountA}/>
            <CountB countB = {countB} onIncrease={handleNorerenderCountB}/>
        </div>
        
    );
}

export default Countparent;