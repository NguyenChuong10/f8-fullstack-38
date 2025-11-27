import { useRef , useState } from "react";


function UseState() {
    const countRef = useRef(0);
    const countconsoleRef = useRef(); 
    const [message , setMassage] = useState("")
    
    const handleClick = () => {
        countRef.current++
        console.log(countRef)
        if(countRef.current%5===0){
            setMassage(` click ${countRef.current} lần `)
        }
    }

    return(
        <div>
            {message  && <p className="text-black">{message}</p> }
            <button onClick={() => handleClick()} className= "w-20 h-20 text-white bg-black ">click me </button>
            <button onClick={() => { countconsoleRef.current++; console.log(countconsoleRef.current); }}className= "w-20 h-20 text-white bg-black " >chạy ngầm</button>
        </div>
    );
}

export default UseState;