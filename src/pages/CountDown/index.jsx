/* eslint-disable no-unused-vars */
import { useEffect , useState } from "react";

function CountDown() {
    const [countdown , setCountdown] = useState(10);

    useEffect(() => {
        if(countdown > 0) {
            const intervalValid = setInterval(() => {
                setCountdown((prev) => prev - 1)
            }, 1000);
            
            return () =>  {
            clearInterval(intervalValid)
        }
        }
    },[countdown])


    return(
       <div>
            <h1>{countdown > 0 ? `Count is ${countdown}`: "Count is 0"}</h1>
            <button onClick={() => setCountdown((prev) => 10)}>Reset</button>
       </div> 
    );
 }

 export default CountDown;